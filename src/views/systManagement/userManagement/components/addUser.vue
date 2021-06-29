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
        label="账号:"
        prop="nickName"
        :rules="[{ required: true, message: '请填写账号', trigger: 'change' }]"
      >
        <el-input class="nickName" v-model="apForm.nickName" show-word-limit>
        </el-input>
      </el-form-item>
      <el-form-item
        label="姓名:"
        prop="username"
        :rules="[{ required: true, message: '请填写姓名', trigger: 'change' }]"
      >
        <el-input class="username" v-model="apForm.username" show-word-limit>
        </el-input>
      </el-form-item>
      <el-form-item
        label="邮箱:"
        prop="email"
        :rules="[{ required: true, message: '请填写邮箱', trigger: 'change' }]"
      >
        <el-input class="email" v-model="apForm.email" show-word-limit>
        </el-input>
      </el-form-item>
      <el-form-item
        label="密码:"
        prop="password"
        :rules="[{ required: true, message: '请填写密码', trigger: 'change' }]"
      >
        <el-input class="password" v-model="apForm.password" show-word-limit>
        </el-input>
      </el-form-item>
      <el-form-item label="备注:" prop="description">
        <el-input
          type="textarea"
          class="description"
          v-model="apForm.description"
          show-word-limit
        >
        </el-input>
      </el-form-item>
      <el-form-item label="是否启用：" prop="active">
        <el-radio-group v-model="apForm.active">
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
import { updateUser } from "@/api/systManagement/userManagement.js";
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
      this.title = `${this.detail.id ? "编辑" : "添加"}用户`;
      if (this.detail.id) {
        //编辑
        this.apForm = this.detail;
        // console.log("编辑apForm", this.apForm);
      } else {
        //创建
        this.apForm = {
          // name: "",
          // description: ""
        };
      }
    }
  },

  created() {},
  methods: {
    submit() {
      this.$refs.ruleForm.validate(vaild => {
        if (!vaild) return false;
        if (this.detail.id) {
          // 编辑
          this.listLoading = true;
          updateUser(this.apForm.id, this.apForm)
            .then(res => {
              this.listLoading = false;
              if (res.code == 200) {
                this.$message.success(res.msg);
                this.$emit("success");
                this.$emit("cancel");
              }
            })
            .catch(err => console.log(err));
        } else {
          // 新增
          this.listLoading = true;
          createUser(this.apForm)
            .then(res => {
              this.listLoading = false;
              if (res.code == 200) {
                console.log("当前新建的数据", res.data);
                this.$message.success("添加成功");
                this.$emit("success");
                this.$emit("cancel");
              }
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    }
  }
};
</script>

<style scoped lang="less"></style>
