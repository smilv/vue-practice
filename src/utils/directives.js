// bin 2020/01/03
import Vue from "vue";
import tools from "./tools";

// 弹出键盘页面定位问题
Vue.directive("fixed-input", function(el, binding) {
    //ios 失去焦点后页面滚动到初始位置
    el.addEventListener("blur", function() {
        window.scrollTo(0, 0);
    });
    //ios 获取焦点有 页面上弹
    el.addEventListener("focus", function() {
        var e = tools.iosVersion() && tools.iosVersion() < 1130 && tools.iosVersion() > 1100,
            t = e && (tools.safari() || tools.browser("qqbrowser") || tools.browser("micromessenger")),
            n = 812 === window.screen.height,
            a = 414 === window.screen.width,
            i = 375 === window.screen.width,
            r = 320 === window.screen.width,
            o = tools.browser("android") && (tools.browser("baidu") || tools.browser("NewsArticle"));
        if (tools.iosVersion() && tools.browser("ucbrowser")) {
            window.setTimeout(function() {
                el.scrollIntoView(!1);
            }, 600);
        } else if (t) {
            window.addEventListener("touchmove", function() {
                //把焦点给一个新窗口
                window.focus();
                setTimeout(function() {
                    el.blur();
                }, 0);
            });
        } else if (tools.browser("android")) {
            var timerOut;
            clearTimeout(timerOut);
            timerOut = setTimeout(function() {
                el.scrollIntoViewIfNeeded(true);
                el.scrollIntoView(true);
            }, 500);
        } else if (tools.iosVersion() && tools.iosVersion() > 1130) {
            setTimeout(function() {
                document.body.scrollTop = document.body.scrollHeight;
            }, 200);
        }
    });
});

// 点击除当前元素外的空白区域
Vue.directive("click-outside", {
    bind(el, binding, vnode) {
        const documentHandler = function(e) {
            if (vnode.context && !el.contains(e.target)) {
                vnode.context[el["@@clickoutsideContext"].methodName]();
            }
        };
        el["@@clickoutsideContext"] = {
            documentHandler,
            methodName: binding.expression,
            arg: binding.arg || "click"
        };
        document.addEventListener(el["@@clickoutsideContext"].arg, documentHandler);
    },
    unbind(el) {
        document.removeEventListener(el["@@clickoutsideContext"].arg, el["@@clickoutsideContext"].documentHandler);
    }
});
