/**
 * 验证码登录（js Component）
 * bin 2020/4/9
 */
import Vue from "vue";
import codeLoginVue from "./code-login.vue";

var CodeLoginConstructor = Vue.extend(codeLoginVue);
var instance;

function CodeLogin() {
    if (!instance) {
        instance = new CodeLoginConstructor({
            el: document.createElement("div")
        });
        document.body.appendChild(instance.$el);
    }
    if (instance.show) return;
    Vue.nextTick(() => {
        instance.show = true;
    });
}

export default CodeLogin;
