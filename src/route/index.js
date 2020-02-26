import Vue from "vue";
import Router from "vue-router";

/** 路由
 * /prizedraw       抽奖
 * /upload          图片上传
 */

const Example = () => import("../views/example");
const PrizeDraw = () => import("../views/prize-draw");
const Upload = () => import("../views/upload");

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Example
        },
        {
            path: "/prizedraw",
            component: PrizeDraw
        },
        {
            path: "/upload",
            component: Upload
        }
    ]
});
