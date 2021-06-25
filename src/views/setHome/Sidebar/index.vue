<template>
  <el-menu
    style="border-right: none"
    :default-active="$route.path"
    router
    background-color="#002033"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse-transition="false"
  >
    <el-menu-item index="/home/node">
      <!-- <i class="el-icon-s-home"></i> -->
      <span slot="title">边缘节点</span>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        <!-- <i class="el-icon-chat-round"></i> -->
        <span>应用管理</span>
      </template>
      <el-menu-item index="/home/userApplications">用户应用</el-menu-item>
      <el-menu-item index="/home/marketApplication">市场应用</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <!-- <i class="el-icon-chat-round"></i> -->
        <span>应用部署管理</span>
      </template>
      <el-menu-item index="/home/applicationTem">应用模板</el-menu-item>
      <el-menu-item index="/home/containerApplication">容器应用</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <!-- <i class="el-icon-chat-round"></i> -->
        <span>云边消息</span>
      </template>
      <el-menu-item index="/home/newsReport">消息上报</el-menu-item>
      <el-menu-item index="/home/messageDistribution">消息下发</el-menu-item>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">
        <!-- <i class="el-icon-chat-round"></i> -->
        <span>系统管理</span>
      </template>
      <el-menu-item index="/home/businessManagement">企业管理</el-menu-item>
      <el-menu-item index="/home/userManagement">用户管理</el-menu-item>
      <el-menu-item index="/home/roleManagement">角色管理</el-menu-item>
    </el-submenu>
    <el-menu-item index="/home/menuManagement">
      <!-- <i class="el-icon-s-home"></i> -->
      <span slot="title">菜单管理</span>
    </el-menu-item>
    <el-submenu index="6">
      <template slot="title">
        <!-- <i class="el-icon-chat-round"></i> -->
        <span>日志管理</span>
      </template>
      <el-menu-item index="/home/logIn">登陆日志</el-menu-item>
      <el-menu-item index="/home/operationLog">操作日志</el-menu-item>
      <el-menu-item index="/home/receivingLog">接收日志</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
// import { mapGetters } from "vuex";

export default {
  computed: {
    // ...mapGetters(["routers", "sidebar"]),
    // routes() {
    //   // return this.routers;
    // },
    // isCollapse() {
    //   return false;
    // }
  },
  methods: {
    // hasOneShowingChildren(children) {
    //   const showingChildren = children.filter(item => {
    //     return !item.hidden;
    //   });
    //   return showingChildren.length === 1;
    // }
  }
};
</script>

<style scoped lang="less"></style>
