import axios from "axios";
const instance = axios.create();
axios.defaults.withCredentials = true;
//请求拦截器
instance.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
//响应拦截器
instance.interceptors.response.use(
    response => {
        return Promise.resolve(response.data);
    },
    error => {
        return Promise.reject(error);
    }
);
export default {
    //上传图片
    uploadImg: data => {
        return instance.post("//172.16.20.98:3000/upload", data);
    }
};
