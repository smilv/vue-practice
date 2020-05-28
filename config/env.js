/*
 * @Description: webpack全局变量
 * @Autor: bin
 * @Date: 2019-11-23 16:08:35
 * @LastEditors: bin
 * @LastEditTime: 2020-05-28 15:39:43
 */

const apiPath = require("../api");

module.exports = Object.assign({ "process.env": { BUILD_TYPE: JSON.stringify(process.env.BUILD_TYPE) } }, apiPath[process.env.BUILD_TYPE]);
