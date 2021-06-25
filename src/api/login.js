import request from "@/utils/request";
let BASEPATH = "/VideoPlatform";
// 登陆接口
export function login(data) {
    return request({
        url: BASEPATH + "/login",
        method: "post",
        data: data
    });
}