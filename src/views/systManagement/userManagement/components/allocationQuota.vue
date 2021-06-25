<template>
  <el-dialog
    title="分配配额"
    :visible="alloVisible"
    width="40%"
    @close="$emit('cancel')"
  >
    <el-form
      label-position="right"
      label-width="148px"
      :model="apForm"
      ref="ruleForm"
      :rules="rules"
      v-if="alloVisible"
      v-loading="listLoading"
    >
      <el-form-item
        label="可创建节点数:"
        prop="nodeNumber"
        :rules="[
          { required: true, message: '请填写可创建节点数', trigger: 'change' }
        ]"
      >
        <el-input
          class="nodeNumber"
          v-model="apForm.nodeNumber"
          show-word-limit
        >
        </el-input>
      </el-form-item>
      <el-form-item
        label="可创建应用部署数:"
        prop="appliNumber"
        :rules="[{ required: true, message: '请填写姓名', trigger: 'change' }]"
      >
        <el-input class="name" v-model="apForm.appliNumber" show-word-limit>
        </el-input>
      </el-form-item>
      <el-form-item style="margin: 0;text-align: center">
        <el-button @click="$emit('cancel')">取消</el-button>
        <el-button type="primary" @click="submit" :loading="btnLoading"
          >确认</el-button
        >
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
// import { getRegionId } from "@/utils/auth";
// import { addFire, editFire } from "@/api/fusionCloud/firewall";
export default {
  name: "allocationQuota",
  props: {
    alloVisible: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
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

<style scoped lang="less"></style>
