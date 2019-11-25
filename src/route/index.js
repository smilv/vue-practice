import Vue from "vue";
import Router from "vue-router";

/** 路由
 * /prizedraw       抽奖
 */

const Example = () => import("../views/example");
const PrizeDraw = () => import("../views/prize-draw");

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
        }
    ]
});
