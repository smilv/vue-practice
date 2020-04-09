import Vue from "vue";
import Router from "vue-router";

/** 路由
 *      /                首页
 *      /prizedraw       抽奖
 *      /upload          图片上传
 *      /codelogin       验证码登录
 */

const Home = () => import("../views/home");
const PrizeDraw = () => import("../views/prize-draw");
const Upload = () => import("../views/upload");
const CodeLogin = () => import("../views/code-login");

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home,
            meta: { name: "首页" }
        },
        {
            path: "/prizedraw",
            component: PrizeDraw,
            meta: { name: "九宫格抽奖" }
        },
        {
            path: "/upload",
            component: Upload,
            meta: { name: "图片上传" }
        },
        {
            path: "/codelogin",
            component: CodeLogin,
            meta: { name: "验证码登录" }
        }
    ]
});

router.beforeEach((to, from, next) => {
    //设置页面title
    if (to.matched.some(v => v.meta.title)) {
        to.matched.forEach((v, i) => {
            if (v.meta.title) document.title = v.meta.title;
        });
    }
    next();
});

export default router;
