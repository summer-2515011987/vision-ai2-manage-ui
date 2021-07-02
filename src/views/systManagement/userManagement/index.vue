<template>
  <div class="userManagement">
    <el-card class="userCard">
      <div slot="header" class="main_contain">
        <span class="el-icon-caret-right"></span>用户管理
      </div>
      <!-- 表单项 -->
      <el-form
        :inline="true"
        :model="listQuery"
        class="demo-form-inline"
        style="text-align:left;"
      >
        <el-form-item label="">
          <el-input
            v-model="listQuery.keyword"
            class="input-width"
            placeholder="用户名称"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="handleSearchList(listQuery.keyword)"
            class="searchBtn"
            >查询搜索</el-button
          >
          <!-- <el-button
            type="primary"
            @click="handleResetSearch()"
            class="searchBtn"
            >重置</el-button
          > -->
        </el-form-item>
        <el-button type="primary" @click="handleAdd({})" class="addBtn"
          >添加</el-button
        >
      </el-form>
      <!-- 列表项 -->
      <el-table
        ref="roleTable"
        header-row-class-name="light_grey_table"
        :data="list"
        class="tableList"
        v-loading="listLoading"
        height="300px"
        stripe
        border
      >
        <el-table-column
          label="账号"
          prop="nickName"
          align="center"
          width="100px"
        >
        </el-table-column>
        <el-table-column
          label="姓名"
          prop="username"
          align="center"
          width="80px"
        >
        </el-table-column>
        <el-table-column label="邮箱" prop="email" align="center">
          <template slot-scope="scope">{{ scope.row.email }}</template>
        </el-table-column>
        <el-table-column label="添加时间" align="center" prop="createTime">
          <template slot-scope="scope">{{ scope.row.createTime }}</template>
        </el-table-column>
        <el-table-column label="最后登陆" align="center" prop="loginTime">
          <template slot-scope="scope">{{
            scope.row.loginTime == null ? "---" : scope.row.loginTime
          }}</template>
        </el-table-column>
        <el-table-column
          label="是否启用"
          width="100px"
          align="center"
          prop="active"
        >
          <template slot-scope="scope">
            <el-switch
              @change="handleStatusChange(scope.$index, scope.row)"
              :active-value="1"
              :inactive-value="0"
              v-model="scope.row.active"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="400px" align="center">
          <template slot-scope="scope">
            <!-- <el-button size="mini" @click="allocationQuota(scope.row)"
              >分配配额
            </el-button> -->
            <el-button size="mini" @click="assignRoles(scope.row)"
              >分配角色
            </el-button>
            <el-button size="mini" @click="handleAdd(scope.row)"
              >编辑
            </el-button>
            <el-button size="mini" type="danger" @click="deleteItem(scope.row)"
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
        :current-page.sync="listQuery.pageNum"
        :page-size="listQuery.pageSize"
        :page-sizes="[10, 15, 20]"
        :total="total"
      >
      </el-pagination>
    </el-card>
    <!-- 使用组件 -->
    <addUser
      :visible="detailState"
      :detail="detail"
      @cancel="detailState = false"
      @success="getList()"
    ></addUser>
    <assignRoles
      :roleVisible="roleVisible"
      @cancel="roleVisible = false"
      :roleData="roleData"
      :detail="detail"
      @success="getList()"
    ></assignRoles>
    <!-- 分配配额 -->
    <!-- <allocationQuota
      :alloVisible="alloVisible"
      @cancel="alloVisible = false"
      :detail="detail"
      @success="getList()"
    ></allocationQuota> -->
  </div>
</template>

<script>
// 导入删除接口（以下接口仅为模拟，需根据实际状况导入)
import {
  getUserList,
  updateStatus,
  getUsername,
  deleteUser,
  assignUserRoles
} from "@/api/systManagement/userManagement.js";
import addUser from "./components/addUser.vue"; //添加用户
import assignRoles from "./components/assignRoles.vue";
// import allocationQuota from "./components/allocationQuota.vue";
const defaultListQuery = {
  keyword: "",
  pageNum: 1,
  pageSize: 10
};
export default {
  name: "userManagement",
  components: {
    addUser,
    assignRoles
    // allocationQuota
  },
  data() {
    return {
      roleData: [],
      total: 10,
      detail: {},
      detailState: false, //添加用户
      roleVisible: false, //角色
      alloVisible: false, //分配配额
      listQuery: Object.assign({}, defaultListQuery), //传到列表里的参数
      listLoading: false,
      list: [
        {
          id: 1,
          nickName: "251501111",
          username: "zs",
          email: "2515011987@qq.com",
          createTime: "2021-06-15",
          loginTime: "2021-06-17",
          active: 1
        }
      ]
    };
  },
  created() {
    this.getList();
  },
  mounted() {},
  methods: {
    // 查询列表
    getList() {
      this.listLoading = true;
      getUserList(this.listQuery).then(response => {
        if (response.code == 200) {
          this.listLoading = false;
          this.list = response.data.content;
          this.total = response.data.totalElements;
        }
      });
    },
    // 是否启用
    handleStatusChange(index, row) {
      console.log("启用禁用", row);
      this.$confirm("是否要修改该状态?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let data = {
            active: row.active,
            id: row.id
          };
          // let params = {
          //   actite: row.active,
          //   id: row.id
          // };
          updateStatus(data).then(response => {
            this.$message({
              type: "success",
              message: "修改成功!"
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消修改"
          });
        });
    },
    // 分配配额
    // allocationQuota(data) {
    //   console.log("分配配额111", data);
    //   this.detail = JSON.parse(JSON.stringify(data));
    //   this.alloVisible = true;
    // },
    // 分配角色
    assignRoles(data) {
      this.detail = JSON.parse(JSON.stringify(data));
      this.roleVisible = true;
      assignUserRoles()
        .then(res => {
          if (res.code == 200) {
            console.log("列表数据", res.data);
            this.roleData = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 删除用户
    deleteItem(data) {
      console.log("删除", data);
      // let params = {
      //   id: data.id
      // };
      this.$confirm(
        `确定要删除模块【${data.username}】吗？`,
        "删除系统应用模块",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      ).then(() => {
        deleteUser(data.id, data)
          .then(res => {
            console.log("删除当前信息", res);
            if (res.code === 200) {
              this.$message.success("删除成功");
              this.getList();
            } else {
              this.$message.error(`删除失败`);
            }
          })
          .catch(err => {
            this.$message.error(err.response.data.msg);
          });
      });
    },
    //添加编辑用户
    handleAdd(data) {
      this.detail = JSON.parse(JSON.stringify(data));
      this.detailState = true;
    },
    // handleResetSearch() {
    //   this.listQuery = Object.assign({}, defaultListQuery);
    // },
    //查询搜索
    handleSearchList(row) {
      this.listLoading = true;
      getUsername({ username: row })
        .then(res => {
          if (res.code == 200) {
            this.listLoading = false;
            this.list = res.data;
          }
        })
        .catch(err => console.log(err));
    },
    handleSizeChange(val) {
      this.listQuery.pageNum = 1;
      this.listQuery.pageSize = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.pageNum = val;
      this.getList();
    }
  }
};
</script>

<style scoped lang="less">
.addBtn {
  float: right;
}
.tableList {
  margin-top: 10px;
}
// .userCard {
//   margin-top: 20px;
// }
</style>
