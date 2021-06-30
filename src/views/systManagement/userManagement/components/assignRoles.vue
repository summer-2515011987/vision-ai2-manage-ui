<template>
  <el-dialog
    title="分配角色"
    :visible="roleVisible"
    width="30%"
    @close="$emit('cancel')"
  >
    <el-select v-model="roleValue" placeholder="请选择角色" clearable multiple>
      <el-option
        v-for="item in roleData"
        :key="item.id"
        :label="item.name"
        :value="item.id"
      >
        <span style="float:left">{{ item.name }}</span>
        <!-- <span style="float:right;color:#8492a6;font-size:14px">{{
          item.id
        }}</span> -->
      </el-option>
    </el-select>

    <div class="botBtn">
      <el-button @click="$emit('cancel')">取消</el-button>
      <el-button type="primary" @click="submit" :loading="btnLoading"
        >确认</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
import { updateUserrole } from "@/api/systManagement/userManagement.js";
export default {
  name: "assignRoles",
  props: {
    roleVisible: {
      type: Boolean,
      required: false,
      default: false
    },
    roleData: {
      type: Array,
      required: false,
      default: () => {}
    }
  },
  data() {
    return {
      roles: [
        { value: "zs", label: "张三" },
        { value: "ls", label: "李四" },
        { value: "ww", label: "王五" },
        { value: "zl", label: "赵六" }
      ],
      roleValue: "",
      listLoading: false,
      title: "",
      moduleSystemId: "",
      btnLoading: false,
      sysOptions: [],
      apForm: {},
      ct_user_id: "", //用户id
      os_id: "", //资源池id
      rules: {
        name: [
          {
            trigger: "blur",
            required: true,
            message: "请输入名称"
          }
        ]
      }
    };
  },
  watch: {},
  created() {
    // this.getAssignuser();
  },
  methods: {
    // getAssignuser() {
    //   assignUserRoles()
    //     .then(res => {
    //       console.log("获取角色列表", res);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },
    submit() {
      // this.$refs.ruleForm.validate(vaild => {
      //   if (!vaild) return false;
      //   console.log("this.roleValue", this.roleValue);
      // });
      console.log("this.roleValue", this.roleValue);
      // if (this.roleValue.length > 0 && this.roleValue != null){
      // }
      // updateUserrole(this.roleValue)
      //   .then(res => {
      //     console.log("分配角色", res);
      //   })
      //   .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped lang="less">
.botBtn {
  text-align: right;
  margin-top: 20px;
}
.el-input__inner {
  width: 60%;
}
</style>
