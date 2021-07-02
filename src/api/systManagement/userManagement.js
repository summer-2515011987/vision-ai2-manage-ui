// 系统管理--->用户管理

import request from "@/utils/request";
let BASEPATH = "/VideoPlatform";
export function getUserList(data) {
    return request({
        url: BASEPATH + "/userManager/list/",
        method: "post",
        data: data
    });
}
// 启用禁用
export function updateStatus(data) {
    return request({
        url: BASEPATH + "/userManager/updateStatus",
        method: "post",
        data: data
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
// 用户注册(新增);
export function createUser(data) {
    return request({
        url: BASEPATH + "/userManager/create",
        method: "post",
        data: data
    });
}
// 编辑用户
export function updateUser(id, data) {
    return request({
        url: BASEPATH + "/userManager/update/" + id,
        method: "post",
        data: data
    });
}
// 根据ID删除指定用户信息（删除账号
export function deleteUser(id, data) {
    return request({
        url: BASEPATH + "/userManager/delete/" + id,
        method: "DELETE",
        data: data
    });
}
// 获取所有角色（用户分配角色时使用）
export function assignUserRoles() {
    return request({
        url: BASEPATH + "/role/listAll",
        method: "get"
    });
}
// 给用户分配角色（给用户分配角色
export function updateUserrole(data) {
    return request({
        url: BASEPATH + "/userManager/role/update",
        method: "post",
        data: data
    });
}
// 分配配额
export function allocationQuota(data) {
    return request({
        url: BASEPATH + "/userManager/createNodeAddCount",
        method: "post",
        data: data
    });
}