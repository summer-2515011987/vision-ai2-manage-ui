<template>
  <div class="roleManagement">
    <el-card class="roleCard">
      <div slot="header" class="main_contain">
        <span class="el-icon-caret-right"></span>企业管理111
      </div>
      <div class="numberNode">
        <span class="el-icon-help"></span>
        <span>
          <p>
            企业数量
          </p>
          <h3>3</h3>
        </span>
      </div>
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
            placeholder="请输入企业名称"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="handleSearchList()"
            class="searchBtn"
            >搜索</el-button
          >
          <!-- <el-button
            type="primary"
            @click="handleResetSearch()"
            class="searchBtn"
            >重置</el-button
          > -->
        </el-form-item>
        <el-button type="primary" @click="handleAdd({})" class="el-icon-plus"
          >创建新企业</el-button
        >
      </el-form>
      <el-table
        ref="roleTable"
        header-row-class-name="light_grey_table"
        :data="list"
        style="width: 100%;flex:1;"
        v-loading="listLoading"
        stripe
        border
        height="250"
      >
        <el-table-column label="企业名称" prop="name"> </el-table-column>
        <el-table-column label="Logo" prop="logo">
          <!-- <template slot-scope="scope"> -->
          <el-image
            class="table-td-thumb"
            :src="require('./assets/2.jpg')"
          ></el-image>
          <!-- </template> -->
        </el-table-column>
        <el-table-column label="系统展示名称" prop="systemName">
        </el-table-column>
        <el-table-column label="节点限额" prop="nodeQuota"> </el-table-column>
        <el-table-column label="应用限额" prop="appliLimit"> </el-table-column>
        <el-table-column label="创建时间" width="200px">
          <template slot-scope="scope">{{
            scope.row.createTime | formatDateTime
          }}</template>
        </el-table-column>

        <!-- <el-table-column label="状态">
          <template slot-scope="scope">
            <el-switch
              @change="handleStatusChange(scope.$index, scope.row)"
              :active-value="1"
              :inactive-value="0"
              v-model="scope.row.status"
            >
            </el-switch>
          </template>
        </el-table-column> -->
        <el-table-column label="操作" width="300px">
          <template slot-scope="scope">
            <el-link size="mini" @click="handleEdit(scope.row)" type="primary"
              >详情
            </el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link @click="editItem(scope.row)" type="primary">编辑</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除
            </el-link>
            <!-- <el-button
              size="mini"
              @click="handleSelectMenu(scope.$index, scope.row)"
              >分配配额
            </el-button> -->
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
        :page-sizes="[10, 20, 30]"
        :total="total"
      >
      </el-pagination>
    </el-card>
    <AddEnterprise
      :visible="detailState"
      :detail="detail"
      @cancel="detailState = false"
    ></AddEnterprise>
  </div>
</template>

<script>
import { formatDate } from "@/utils/date";
import AddEnterprise from "./components/AddEnterprise.vue";
const defaultListQuery = {
  pageNum: 1,
  pageSize: 10,
  keyword: null
};
export default {
  name: "roleManagement",
  components: {
    AddEnterprise
  },
  data() {
    return {
      total: 1000,
      detailState: false, //添加角色
      detail: {},
      listQuery: Object.assign({}, defaultListQuery),
      listLoading: false,
      list: [
        {
          id: 1,
          name: "zs",
          systemName: "zs",
          nodeQuota: 13,
          appliLimit: 15,
          createTime: "2021-06-23",
          logo: "./assets/2.jpg"
        }
      ]
    };
  },
  created() {},
  filters: {
    formatDateTime(time) {
      if (time == null || time === "") {
        return "N/A";
      }
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    }
  },
  mounted() {},
  methods: {
    handleEdit() {
      console.log("详细");
    },
    //分页逻辑开始---
    handleSizeChange(val) {
      this.listQuery.pageNum = 1;
      this.listQuery.pageSize = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.pageNum = val;
      this.getList();
    },
    //分页逻辑结束---
    // 分配菜单
    // handleSelectMenu(index, data) {
    //   this.$router.push(
    //     `/home/roleManagement/distributionManagement${data.id}`
    //   );
    // },
    // 删除
    handleDelete(index, row) {
      this.$confirm("是否要删除该角色?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        // let ids = [];
        // ids.push(row.id);
        // let params = new URLSearchParams();
        // params.append("ids", ids);
        // deleteRole(params).then(response => {
        //   this.$message({
        //     type: "success",
        //     message: "删除成功!"
        //   });
        //   this.getList();
        // });
      });
    },
    //创建新企业
    handleAdd(data) {
      this.$router.push("/home/createEnterprise");
    },
    // 编辑新企业
    editItem(data) {
      this.$router.push({
        path: "/home/editEnterprise",
        query: data
      });
    },
    getList() {
      console.log("获取列表数据");
    },
    // 重置
    // handleResetSearch() {
    //   this.listQuery = Object.assign({}, defaultListQuery);
    // },
    //查询搜索
    handleSearchList() {
      this.listQuery.pageNum = 1;
      this.getList();
    }
    // 是否启用
    // handleStatusChange(index, row) {
    //   this.$confirm("是否要修改该状态?", "提示", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     type: "warning"
    //   })
    //     .then(() => {
    //       // updateStatus(row.id, { status: row.status }).then(response => {
    //       //   this.$message({
    //       //     type: "success",
    //       //     message: "修改成功!"
    //       //   });
    //       // });
    //     })
    //     .catch(() => {
    //       this.$message({
    //         type: "info",
    //         message: "取消修改"
    //       });
    //       this.getList();
    //     });
    // }
  }
};
</script>

<style scoped lang="less">
// .roleCard {
//   margin-top: 20px;
// }
.el-icon-plus {
  float: right;
}
.numberNode {
  width: 130px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
}

.el-icon-help {
  font-size: 46px;
  color: #409eff;
  margin-top: 10px;
}

.numberNode span:nth-child(2) p {
  margin-top: 6px;
  font-weight: bold;
}
.numberNode span:nth-child(2) h3 {
  text-align: center;
  font-weight: bold;
}
.searchBtn /deep/.el-form--inline .el-form-item__content {
  margin-right: 20px;
}
</style>
