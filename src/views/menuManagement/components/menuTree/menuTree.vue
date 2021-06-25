<template>
  <el-menu
    :show-timeout="200"
    style="border-right:none;margin: 0; text-align: center;"
    v-loading="menuLoading"
  >
    <menu-tree-item :menuItemsData="menuData"></menu-tree-item>
  </el-menu>
</template>

<script>
import MenuTreeItem from "./menuTreeItem.vue";

export default {
  name: "menuTree",
  components: { MenuTreeItem },
  props: {
    menuData: {
      type: Array
    },
    menuLoading: {
      type: Boolean,
      default: false //调通接口后记得改成true
    }
  },
  created() {}
};
</script>

<style scoped></style>
