// 系统管理--->用户管理

import request from "@/utils/request";
let BASEPATH = "/VideoPlatform";
// 用户管理列表接口
// export function getUserList(params) {
//     return request({
//         url: BASEPATH + "/userManager/list",
//         method: "get",
//         params: params
//     });
// }
export function getUserList(data) {
    return request({
        url: BASEPATH + "/userManager/list/",
        method: "post",
        data: data
    });
}
// 启用禁用
export function updateStatus(id, params) {
    return request({
        url: BASEPATH + "/userManager/updateStatus/" + id,
        method: "post",
        params: params
    });
}
// 根据用户名获取通用用户信息
export function getUsername(params) {
    return request({
        url: BASEPATH + "/userManager/loadByUsername",
        method: "get",
        params: params
    });
}