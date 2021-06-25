<template>
  <el-dialog
    :title="title"
    :visible="visible"
    width="34%"
    @close="$emit('cancel')"
  >
    <el-form
      label-position="right"
      label-width="100px"
      :model="apForm"
      ref="ruleForm"
      :rules="rules"
      v-if="visible"
      v-loading="listLoading"
    >
      <el-form-item
        label="角色名称:"
        prop="name"
        :rules="[{ required: true, message: '请填写账号', trigger: 'change' }]"
      >
        <el-input class="account" v-model="apForm.name"> </el-input>
      </el-form-item>
      <el-form-item
        label="描述:"
        prop="description"
        :rules="[{ required: true, message: '请填写描述', trigger: 'change' }]"
      >
        <el-input
          class="name"
          v-model="apForm.description"
          type="textarea"
          :rows="5"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="是否启用：" prop="status">
        <el-radio-group v-model="apForm.status">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="0">否</el-radio>
        </el-radio-group>
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
  name: "testEdit",
  props: {
    visible: {
      type: Boolean,
      required: false,
      default: false
    },
    detail: {
      type: Object,
      required: false,
      default: () => {}
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
  watch: {
    visible(newValue) {
      if (!newValue) return false;
      // this.getSysDataList()
      this.title = `${this.detail.id ? "编辑" : "添加"}角色`;
      if (this.detail.id) {
        //编辑
        this.apForm = this.detail;
      } else {
        //创建
        this.apForm = {
          name: "",
          description: ""
        };
      }
    }
  },

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
