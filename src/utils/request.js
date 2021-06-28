import axios from "axios";
import {
  // Form,
  Message,
  MessageBox
} from "element-ui";
import store from "../store";
import { getToken } from "@/utils/tokenActions";
import router from "../router";
var me = this;
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API == "http://192.168.43.94:7002", // api的base_url
  timeout: 150000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  config => {
    var token = getToken();
    if (token) {
      config.headers["Authorization"] = token; // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  },
  error => {
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    if (
      response.config &&
      response.config.url &&
      response.config.url.endsWith("logout")
    ) {
      return response.data;
    }
    const res = response.data;
    if (res.code !== 200) {
      //code为非200是抛错 可结合自己业务进行修改
      Message({
        message: res.message,
        type: "error",
        duration: 3 * 1000
      });
      //
      if (res.code === 401) {
        MessageBox.alert("你已被登出请重新登录", "账户异常", {
          confirmButtonText: "重新登录",
          type: "warning"
        }).then(() => {
          var path = router.app._route.path;
          if (path == "/login") {
            return;
          } else {
            console.log("退出接口未调试");
          }
        });
      }
      return response;
      // return Promise.reject(res)
    } else {
      return response.data;
    }
  },
  error => {
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 3 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
