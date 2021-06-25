<template>
  <div class="menuManagement">
    <createBtn titleText="菜单管理" />
    <el-card class="menuCard">
      <el-container>
        <el-aside width="200px">
          <span class="preview">效果预览</span>
          <menu-tree
            :menu-data="menuTree"
            :menuLoading="menuLoading"
            style="text-align:left;"
          ></menu-tree>
        </el-aside>
        <el-main>
          <el-form
            :inline="true"
            :model="listQuery"
            class="demo-form-inline"
            style="text-align:right;"
          >
            <el-form-item>
              <el-button
                type="primary"
                @click="handleAddMenu()"
                class="searchBtn fr"
                >添加</el-button
              >
            </el-form-item>
          </el-form>
          <el-table
            ref="menuTable"
            header-row-class-name="light_grey_table"
            style="width: 100%;"
            stripe
            :data="list"
            v-loading="listLoading"
            border
          >
            <el-table-column label="菜单名称">
              <template slot-scope="scope">{{ scope.row.title }}</template>
            </el-table-column>
            <el-table-column label="菜单级数" width="100">
              <template slot-scope="scope">{{
                scope.row.level | levelFilter
              }}</template>
            </el-table-column>
            <el-table-column label="前端名称">
              <template slot-scope="scope">{{ scope.row.name }}</template>
            </el-table-column>
            <!-- <el-table-column label="是否显示" width="100">
              <template slot-scope="scope">
                <el-switch
                  @change="handleHiddenChange(scope.$index, scope.row)"
                  :active-value="0"
                  :inactive-value="1"
                  v-model="scope.row.hidden"
                >
                </el-switch>
              </template>
            </el-table-column> -->
            <el-table-column label="排序" width="100">
              <template slot-scope="scope">{{ scope.row.sort }}</template>
            </el-table-column>
            <el-table-column label="设置" width="120">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="text"
                  :disabled="scope.row.level | disableNextLevel"
                  @click="handleShowNextLevel(scope.$index, scope.row)"
                  >查看下级
                </el-button>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="200">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleUpdate(scope.$index, scope.row)"
                  >编辑
                </el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                  >删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            class="footer-pagination"
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            layout="total, sizes,prev, pager, next,jumper"
            :page-size="listQuery.pageSize"
            :page-sizes="[10, 20, 30]"
            :current-page.sync="listQuery.pageNum"
            :total="total"
          >
          </el-pagination>
        </el-main>
      </el-container>
    </el-card>
  </div>
</template>

<script>
import createBtn from "@/components/createBtn";
import MenuTree from "./components/menuTree/menuTree";
export default {
  name: "menuManagement",
  components: {
    createBtn,
    MenuTree
  },
  props: {},
  data() {
    return {
      //   tableHeight: document.documentElement.clientHeight - 360 + "px",
      list: [
        {
          id: 19,
          parentId: 0,
          title: "数据管理",
          createTime: "2020-10-09 15:02:23",
          level: 0,
          sort: 0,
          name: "datamanage",
          icon: "",
          hidden: 0
        },
        {
          id: 1,
          parentId: 0,
          title: "系统管理",
          createTime: "2020-02-07 16:31:13",
          level: 0,
          sort: 0,
          name: "sysadmin",
          icon: "ums",
          hidden: 0
        },
        {
          id: 16,
          parentId: 0,
          title: "专业数据管理",
          createTime: "2021-01-29 13:07:08",
          level: 0,
          sort: 0,
          name: "profession",
          icon: "",
          hidden: 0
        }
      ],
      total: 1000,
      listLoading: false,
      menuLoading: false,
      menuTree: [
        [
          {
            id: 19,
            parentId: 0,
            title: "数据管理",
            createTime: "2020-10-09 15:02:23",
            level: 0,
            sort: 0,
            name: "datamanage",
            icon: "",
            hidden: 0,
            children: [
              {
                id: 32,
                parentId: 19,
                title: "院校专业管理",
                createTime: "2020-10-20 10:23:17",
                level: 1,
                sort: 7,
                name: "schoolMajor",
                icon: "",
                hidden: 0,
                children: []
              },
              {
                id: 33,
                parentId: 19,
                title: "元数据表管理",
                createTime: "2020-10-22 09:29:02",
                level: 1,
                sort: 0,
                name: "tableData",
                icon: "",
                hidden: 0,
                children: []
              },
              {
                id: 34,
                parentId: 19,
                title: "元数据列管理",
                createTime: "2020-10-22 09:29:31",
                level: 1,
                sort: 0,
                name: "tableColumn",
                icon: "",
                hidden: 0,
                children: []
              },
              {
                id: 21,
                parentId: 19,
                title: "行业管理",
                createTime: "2020-10-10 17:56:26",
                level: 1,
                sort: 8,
                name: "industryManage",
                icon: "",
                hidden: 0,
                children: []
              },
              {
                id: 20,
                parentId: 19,
                title: "职业大典数据管理",
                createTime: "2020-10-09 15:03:04",
                level: 1,
                sort: 7,
                name: "jobClassification",
                icon: "",
                hidden: 0,
                children: []
              },
              {
                id: 29,
                parentId: 19,
                title: "行业资讯管理",
                createTime: "2020-10-19 16:25:47",
                level: 1,
                sort: 6,
                name: "news",
                icon: "",
                hidden: 0,
                children: []
              },
              {
                id: 30,
                parentId: 19,
                title: "企业信息管理",
                createTime: "2020-10-19 17:44:44",
                level: 1,
                sort: 5,
                name: "enterprise",
                icon: "",
                hidden: 0,
                children: []
              },
              {
                id: 23,
                parentId: 19,
                title: "可视化后台管理",
                createTime: "2020-10-13 10:46:07",
                level: 1,
                sort: 4,
                name: "visualManagement",
                icon: "",
                hidden: 0,
                children: []
              },
              {
                id: 26,
                parentId: 19,
                title: "专业目录管理",
                createTime: "2020-10-19 11:19:38",
                level: 1,
                sort: 10,
                name: "professionManage",
                icon: "",
                hidden: 0,
                children: []
              },
              {
                id: 27,
                parentId: 19,
                title: "产业管理",
                createTime: "2020-10-19 11:21:31",
                level: 1,
                sort: 9,
                name: "industrialManage",
                icon: "",
                hidden: 0,
                children: []
              },
              {
                id: 15,
                parentId: 19,
                title: "数据检验",
                createTime: "2020-12-10 10:56:38",
                level: 1,
                sort: 0,
                name: "dataVerify",
                icon: "",
                hidden: 0,
                children: []
              },
              {
                id: 14,
                parentId: 19,
                title: "元数据表浏览",
                createTime: "2020-12-10 10:56:10",
                level: 1,
                sort: 0,
                name: "tableView",
                icon: "",
                hidden: 0,
                children: []
              },
              {
                id: 13,
                parentId: 19,
                title: "招聘信息查询",
                createTime: "2020-12-07 18:21:40",
                level: 1,
                sort: 11,
                name: "positionInfo",
                icon: "",
                hidden: 0,
                children: []
              },
              {
                id: 38,
                parentId: 19,
                title: "采集规则管理",
                createTime: "2021-02-24 14:30:57",
                level: 1,
                sort: 0,
                name: "spiderMgt",
                icon: "",
                hidden: 0,
                children: []
              },
              {
                id: 39,
                parentId: 19,
                title: "采集任务调度",
                createTime: "2021-02-24 14:31:23",
                level: 1,
                sort: 0,
                name: "spiderScheduler",
                icon: "",
                hidden: 0,
                children: []
              }
            ]
          },
          {
            id: 1,
            parentId: 0,
            title: "系统管理",
            createTime: "2020-02-07 16:31:13",
            level: 0,
            sort: 0,
            name: "sysadmin",
            icon: "ums",
            hidden: 0,
            children: [
              {
                id: 10,
                parentId: 1,
                title: "授权服务器列表",
                createTime: "2020-09-16 14:47:43",
                level: 1,
                sort: 0,
                name: "oauthClient",
                icon: null,
                hidden: 0,
                children: []
              },
              {
                id: 5,
                parentId: 1,
                title: "资源列表",
                createTime: "2020-02-07 16:31:13",
                level: 1,
                sort: 3,
                name: "resource",
                icon: "ums-resource",
                hidden: 0,
                children: []
              },
              {
                id: 2,
                parentId: 1,
                title: "用户列表",
                createTime: "2020-02-07 16:31:13",
                level: 1,
                sort: 6,
                name: "admin",
                icon: "ums-admin",
                hidden: 0,
                children: []
              },
              {
                id: 4,
                parentId: 1,
                title: "菜单列表",
                createTime: "2020-02-07 16:31:13",
                level: 1,
                sort: 4,
                name: "menu",
                icon: "ums-menu",
                hidden: 0,
                children: []
              },
              {
                id: 3,
                parentId: 1,
                title: "角色列表",
                createTime: "2020-02-07 16:31:13",
                level: 1,
                sort: 5,
                name: "role",
                icon: "ums-role",
                hidden: 0,
                children: []
              },
              {
                id: 11,
                parentId: 1,
                title: "数据字典列表",
                createTime: "2020-09-18 16:57:07",
                level: 1,
                sort: 1,
                name: "dict",
                icon: "",
                hidden: 0,
                children: []
              },
              {
                id: 12,
                parentId: 1,
                title: "分词管理",
                createTime: "2020-11-01 11:38:43",
                level: 1,
                sort: 10,
                name: "WordManagement",
                icon: "",
                hidden: 0,
                children: []
              }
            ]
          },
          {
            id: 16,
            parentId: 0,
            title: "专业数据管理",
            createTime: "2021-01-29 13:07:08",
            level: 0,
            sort: 0,
            name: "profession",
            icon: "",
            hidden: 0,
            children: [
              {
                id: 17,
                parentId: 16,
                title: "专业开设情况",
                createTime: "2021-01-29 13:07:34",
                level: 1,
                sort: 0,
                name: "professionSetUpMgt",
                icon: "",
                hidden: 0,
                children: []
              },
              {
                id: 22,
                parentId: 16,
                title: "专业证书管理",
                createTime: "2021-01-29 13:10:18",
                level: 1,
                sort: 0,
                name: "professionCertifMgt",
                icon: null,
                hidden: 0,
                children: []
              },
              {
                id: 24,
                parentId: 16,
                title: "专业院校数据",
                createTime: "2021-01-29 13:11:01",
                level: 1,
                sort: 0,
                name: "professionSchoolMgt",
                icon: "",
                hidden: 0,
                children: []
              },
              {
                id: 25,
                parentId: 16,
                title: "专业教师数据",
                createTime: "2021-01-29 13:11:39",
                level: 1,
                sort: 0,
                name: "professionTeacherMgt",
                icon: "",
                hidden: 0,
                children: []
              },
              {
                id: 28,
                parentId: 16,
                title: "专业学生数据",
                createTime: "2021-02-01 11:07:37",
                level: 1,
                sort: 0,
                name: "professionStudentMgt",
                icon: "",
                hidden: 0,
                children: []
              },
              {
                id: 31,
                parentId: 16,
                title: "专业就业数据",
                createTime: "2021-02-01 11:11:27",
                level: 1,
                sort: 0,
                name: "professionJiuyeMgt",
                icon: "",
                hidden: 0,
                children: []
              },
              {
                id: 35,
                parentId: 16,
                title: "专业企业数据",
                createTime: "2021-02-01 11:11:56",
                level: 1,
                sort: 0,
                name: "professionQiyeMgt",
                icon: "",
                hidden: 0,
                children: []
              },
              {
                id: 37,
                parentId: 16,
                title: "专业行业数据",
                createTime: "2021-02-01 11:12:38",
                level: 1,
                sort: 0,
                name: "zhuanyehangyeMgt",
                icon: "",
                hidden: 0,
                children: []
              },
              {
                id: 18,
                parentId: 16,
                title: "专业目录数据管理",
                createTime: "2021-01-29 13:07:58",
                level: 1,
                sort: 1,
                name: "professionDirMgt",
                icon: "",
                hidden: 0,
                children: []
              },
              {
                id: 36,
                parentId: 16,
                title: "专业招聘数据",
                createTime: "2021-02-01 11:12:13",
                level: 1,
                sort: 10,
                name: "positionInfo",
                icon: "",
                hidden: 0,
                children: []
              }
            ]
          }
        ]
      ],
      listQuery: {
        pageNum: 1,
        pageSize: 10
      },
      parentId: 0
    };
  },
  created() {
    this.resetParentId();
    this.getList();
  },
  watch: {
    $route(route) {
      this.resetParentId();
      this.getList();
    }
  },
  methods: {
    resetParentId() {
      this.listQuery.pageNum = 1;
      if (this.$route.query.parentId != null) {
        this.parentId = this.$route.query.parentId;
        console.log("this.parentId", this.parentId);
      } else {
        this.parentId = 0;
      }
    },
    // 获取列表数据
    getList() {},
    // 添加
    handleAddMenu() {
      this.$router.push("/home/addMenu");
    },
    // 编辑
    handleUpdate(index, row) {
      this.$router.push({
        path: "/home/updateMenu",
        query: { id: row.id }
      });
    },
    // 删除
    handleDelete(index, row) {
      this.$confirm("是否要删除该菜单", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          //   this.listLoading = true;
          //   deleteMenu(row.id).then(response => {
          //     this.$message({
          //       message: "删除成功",
          //       type: "success",
          //       duration: 1000
          //     });
          //     this.getList();
          //   });
        })
        .catch(() => {
          this.listLoading = false;
        });
    },
    // 查看下级
    handleShowNextLevel(index, row) {
      this.$router.push({
        path: "/home/menuManagement",
        query: { parentId: row.id }
      });
    },
    // ---分页逻辑开始---
    handleSizeChange(val) {
      this.listQuery.pageNum = 1;
      this.listQuery.pageSize = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.pageNum = val;
      this.getList();
    }
    // ---分页逻辑结束---
  },
  filters: {
    levelFilter(value) {
      if (value === 0) {
        return "一级";
      } else if (value === 1) {
        return "二级";
      }
    },
    disableNextLevel(value) {
      return value !== 0;
    }
  }
};
</script>

<style scoped lang="less">
.menuCard {
  margin-top: 20px;
  height: 400px;
}
.preview {
  font-size: 16px;
  margin-left: 58px;
  font-weight: 500;
}
</style>
