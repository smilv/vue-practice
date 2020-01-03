// bin 2020/01/03
export default {
    //判断ios手机版本
    iosVersion() {
        var e = (navigator.userAgent || navigator.vendor || window.opera).toLowerCase();
        if (/ip(hone|od|ad)/.test(e)) {
            var t = e.match(/os (\d+)_(\d+)_?(\d+)?/);
            return +[parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3] || 0, 10)].join("");
        }
    },
    //判断浏览器
    browser(e) {
        var t = (navigator.userAgent || navigator.vendor || window.opera).toLowerCase();
        var e = e.toLowerCase();
        return t.indexOf(e) >= 0 ? !0 : !1;
    },
    // 判断是否是ios
    safari() {
        var e = navigator.userAgent.toLowerCase(),
            t = e.match(/applewebkit\/(\d+)(.\d+)?/),
            n = e.match(/safari\/(\d+)(.\d+)?/);
        return t && n
            ? parseInt(t[1]) != parseInt(n[1])
                ? !1
                : e.indexOf("baidu") > -1
                ? !1
                : e.indexOf("safari") > -1 && e.indexOf("chrome") < 1
            : !1;
    },
    //禁止滚动  true禁止/false取消
    lockScroll(lock) {
        if (lock) {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            document.body.style.overflow = "hidden";
            document.body.style.position = "fixed";
            document.body.style.width = "100%";
            document.body.style.top = -scrollTop + "px";
        } else {
            document.body.style.overflow = "auto";
            document.body.style.position = "static";
            document.body.style.width = "auto";
            document.documentElement.scrollTop = document.body.scrollTop = document.body.style.top.match(/\d+/)[0];
        }
    }
};
