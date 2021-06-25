<template>
  <div class="roleManagement">
    <createBtn titleText="角色管理" />
    <el-card class="roleCard">
      <el-form
        :inline="true"
        :model="listQuery"
        class="demo-form-inline"
        style="text-align:left;"
      >
        <el-form-item label="角色名称：">
          <el-input
            v-model="listQuery.keyword"
            class="input-width"
            placeholder="角色名称"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="handleSearchList()"
            class="searchBtn"
            >查询搜索</el-button
          >
          <el-button
            type="primary"
            @click="handleResetSearch()"
            class="searchBtn"
            >重置</el-button
          >
        </el-form-item>
        <el-button type="primary" @click="handleAdd({})" class="addBtn"
          >添加</el-button
        >
      </el-form>
      <el-table
        ref="roleTable"
        header-row-class-name="light_grey_table"
        :data="list"
        style="width: 100%;flex:1; min-height: 300px"
        v-loading="listLoading"
        stripe
        border
      >
        <el-table-column label="角色名称">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column label="描述">
          <template slot-scope="scope">{{ scope.row.description }}</template>
        </el-table-column>
        <el-table-column label="添加时间">
          <template slot-scope="scope">{{
            scope.row.createTime | formatDateTime
          }}</template>
        </el-table-column>
        <el-table-column label="是否启用">
          <template slot-scope="scope">
            <el-switch
              @change="handleStatusChange(scope.$index, scope.row)"
              :active-value="1"
              :inactive-value="0"
              v-model="scope.row.status"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="400px">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleSelectMenu(scope.$index, scope.row)"
              >分配菜单
            </el-button>

            <el-button size="mini" @click="handleAdd(scope.row)"
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
        :current-page.sync="listQuery.pageNum"
        :page-size="listQuery.pageSize"
        :page-sizes="[10, 20, 30]"
        :total="total"
      >
      </el-pagination>
    </el-card>
    <roleEdit
      :visible="detailState"
      :detail="detail"
      @cancel="detailState = false"
    ></roleEdit>
  </div>
</template>

<script>
import createBtn from "@/components/createBtn";
import { formatDate } from "@/utils/date";
import roleEdit from "./components/roleEdit.vue";
const defaultListQuery = {
  pageNum: 1,
  pageSize: 10,
  keyword: null
};
export default {
  name: "roleManagement",
  components: {
    createBtn,
    roleEdit
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
          description: "是张三吗？",
          createTime: "2021-06-23"
        },
        {
          id: 2,
          name: "ls",
          description: "是李四吗？",
          createTime: "2021-06-22"
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
    handleSelectMenu(index, data) {
      this.$router.push(
        `/home/roleManagement/distributionManagement${data.id}`
      );
    },
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
    //添加编辑用户
    handleAdd(data) {
      this.detail = JSON.parse(JSON.stringify(data));
      this.detailState = true;
    },
    getList() {
      console.log("获取列表数据");
    },
    // 重置
    handleResetSearch() {
      this.listQuery = Object.assign({}, defaultListQuery);
    },
    //查询搜索
    handleSearchList() {
      this.listQuery.pageNum = 1;
      this.getList();
    },
    // 是否启用
    handleStatusChange(index, row) {
      this.$confirm("是否要修改该状态?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // updateStatus(row.id, { status: row.status }).then(response => {
          //   this.$message({
          //     type: "success",
          //     message: "修改成功!"
          //   });
          // });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消修改"
          });
          this.getList();
        });
    }
  }
};
</script>

<style scoped lang="less">
.roleCard {
  margin-top: 20px;
}
.addBtn {
  float: right;
}
</style>
