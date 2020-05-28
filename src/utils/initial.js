/*
 * @Description: 域名添加到vue.prototype，在vue文件中可使用this.apiPath
 * @Autor: bin
 * @Date: 2019-11-23 16:08:35
 * @LastEditors: bin
 * @LastEditTime: 2020-05-28 15:40:41
 */

import Vue from "vue";
import path from "../../api";

const pathEnv = path[process.env.BUILD_TYPE];

Object.keys(pathEnv).map(v => {
    let pathKey = v.replace(/^_/, "");
    Vue.prototype[pathKey] = JSON.parse(pathEnv[v]);
});
