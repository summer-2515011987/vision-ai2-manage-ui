import Vue from "vue";
import VueRouter from "vue-router";
// import login from "@/views/login";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("@/views/login") //路由懒加载
  },
  {
    path: "/home",
    name: "home",
    // hidden: true,判断路由入口是否可见的开关
    component: () => import("@/views/setMain"),
    redirect: "/home/node",
    meta: { title: "系统管理", icon: "ums", isLeaf: false },
    // 子路由
    children: [
      {
        path: "/home/node",
        name: "node",
        component: () => import("@/views/node/index"),
        meta: { title: "边缘节点", icon: "ums-admin", isLeaf: true }
      },
      {
        path: "/home/userApplications",
        name: "userApplications",
        component: () =>
          import("@/views/applicationManagement/userApplications"),
        meta: { title: "用户应用" }
      },
      {
        path: "/home/marketApplication",
        name: "marketApplication",
        component: () =>
          import("@/views/applicationManagement/marketApplication"),
        meta: { title: "市场应用" }
      },
      {
        path: "/home/applicationTem",
        name: "containerTem",
        component: () => import("@/views/applicationDeploy/applicationTem"),
        meta: { title: "应用模板" }
      },
      {
        path: "/home/containerApplication",
        name: "containerDeploy",
        component: () =>
          import("@/views/applicationDeploy/containerApplication"),
        meta: { title: "容器应用" }
      },
      {
        path: "/home/newsReport",
        name: "newsReport",
        component: () => import("@/views/cloudNews/newsReport"),
        meta: { title: "消息上报" }
      },
      {
        path: "/home/messageDistribution",
        name: "messageDistribution",
        component: () => import("@/views/cloudNews/messageDistribution"),
        meta: { title: "消息下发" }
      },

      {
        path: "/home/businessManagement",
        name: "businessManagement",
        component: () => import("@/views/systManagement/businessManagement"),
        meta: { title: "企业管理" }
      },
      {
        path: "/home/createEnterprise",
        name: "createEnterprise",
        component: () =>
          import("@/views/systManagement/businessManagement/createEnterprise"),
        meta: { title: "创建企业" }
      },
      {
        path: "/home/editEnterprise",
        name: "editEnterprise",
        component: () =>
          import("@/views/systManagement/businessManagement/editEnterprise"),
        meta: { title: "编辑企业" }
      },
      {
        path: "/home/userManagement",
        name: "userManagement",
        component: () => import("@/views/systManagement/userManagement"),
        meta: { title: "用户管理" }
      },
      {
        path: "/home/roleManagement",
        name: "roleManagement",
        component: () => import("@/views/systManagement/roleManagement"),
        meta: { title: "角色管理" }
      },
      {
        path: "/home/roleManagement/distributionManagement:id",
        name: "distributionManagement",
        component: () =>
          import(
            "@/views/systManagement/roleManagement/distributionManagement"
          ),
        meta: { title: "分配菜单" }
      },
      // 菜单管理
      {
        path: "/home/menuManagement",
        name: "menuManagement",
        component: () => import("@/views/menuManagement"),
        meta: { title: "菜单管理" }
      },
      {
        path: "/home/addMenu",
        name: "addMenu",
        component: () => import("@/views/menuManagement/add"),
        meta: { title: "添加菜单" }
      },
      {
        path: "/home/updateMenu",
        name: "updateMenu",
        component: () => import("@/views/menuManagement/update"),
        meta: { title: "编辑菜单" }
      },
      {
        path: "/home/logIn",
        name: "logIn",
        component: () => import("@/views/logManagement/logIn"),
        meta: { title: "登陆日志" }
      },
      {
        path: "/home/operationLog",
        name: "roleManagement",
        component: () => import("@/views/logManagement/operationLog"),
        meta: { title: "操作日志" }
      },
      {
        path: "/home/receivingLog",
        name: "receivingLog",
        component: () => import("@/views/logManagement/receivingLog"),
        meta: { title: "接口日志" }
      }
    ]
  },
  // // 详情页
  // {
  //     path: "/Homedetail:id",
  //     name: "Homedetail",
  //     component: () =>
  //         import ("@/views/Homedetail.vue")
  // }
  { path: "*", redirect: "/404", hidden: true }
];

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;
