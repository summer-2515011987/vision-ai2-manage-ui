<template>
  <el-dialog
    title="分配角色"
    :visible="roleVisible"
    width="30%"
    @close="$emit('cancel')"
  >
    <el-select v-model="value" placeholder="请选择角色" clearable multiple>
      <el-option
        v-for="item in roles"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
        <span style="float:left">{{ item.label }}</span>
        <span style="float:right;color:#8492a6;font-size:14px">{{
          item.value
        }}</span>
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
// import { getRegionId } from "@/utils/auth";
// import { addFire, editFire } from "@/api/fusionCloud/firewall";
export default {
  name: "testEdit",
  props: {
    roleVisible: {
      type: Boolean,
      required: false,
      default: false
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
      value: "",
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
  created() {},
  methods: {
    submit() {
      this.$refs.ruleForm.validate(vaild => {
        if (!vaild) return false;
      });
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
