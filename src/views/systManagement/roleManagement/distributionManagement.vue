<template>
  <div class="distributionManagement">
    <el-card>
      <div slot="header" class="clearfix">
        <el-page-header
          @back="$router.back()"
          content="分配菜单"
        ></el-page-header>
      </div>
      <el-tree
        v-loading="listLoading"
        :data="menuTreeList"
        show-checkbox
        default-expand-all
        node-key="id"
        ref="tree"
        highlight-current
        :props="defaultProps"
      >
      </el-tree>
      <ul style="text-align: center">
        <el-button type="primary" @click="handleSave()">保存</el-button>
        <el-button @click="handleClear()">清空</el-button>
      </ul>
    </el-card>
  </div>
</template>

<script>
// import {fetchTreeList} from '@/api/menu';
export default {
  name: "distributionManagement",
  components: {},
  props: {},
  data() {
    return {
      menuTreeList: [
        {
          id: 1,
          title: "一级 1",
          children: [
            {
              id: 4,
              title: "二级 1-1",
              children: [
                {
                  id: 9,
                  title: "三级 1-1-1"
                },
                {
                  id: 10,
                  title: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          title: "一级 2",
          children: [
            {
              id: 5,
              title: "二级 2-1"
            },
            {
              id: 6,
              title: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          title: "一级 3",
          children: [
            {
              id: 7,
              title: "二级 3-1"
            },
            {
              id: 8,
              title: "二级 3-2"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "title"
      },
      listLoading: false
    };
  },
  computed: {},
  watch: {},
  created() {
    console.log("路由id", this.$route.params.id);
  },
  mounted() {},
  methods: {
    treeList() {
      //   this.listLoading = true;
      //   fetchTreeList()
      //     .then(response => {
      //       this.menuTreeList = response.data;
      //       this.listLoading = false;
      //     })
      //     .then(resp => {
      //       this.getRoleMenu(this.roleId);
      //     })
      //     .catch(error => {
      //       this.listLoading = false;
      //     });
    },
    // 保存
    handleSave() {
      console.log("保存");
    },
    // 清空
    handleClear() {
      this.$refs.tree.setCheckedKeys([]);
    }
  }
};
</script>

<style scoped lang="less"></style>
