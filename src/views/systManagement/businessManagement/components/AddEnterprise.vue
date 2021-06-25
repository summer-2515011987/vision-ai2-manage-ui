<template>
  <el-dialog
    title="添加企业管理"
    :visible="visible"
    width="40%"
    @close="$emit('cancel')"
  >
    <el-form
      label-position="right"
      label-width="96px"
      :model="apForm"
      ref="ruleForm"
      :rules="rules"
      v-if="visible"
      v-loading="listLoading"
    >
      <el-form-item
        label="企业名称"
        prop="nodeName"
        :rules="[
          { required: true, message: '请填写节点名称', trigger: 'change' }
        ]"
      >
        <el-input class="nodeName" v-model="apForm.nodeName" show-word-limit>
        </el-input>
      </el-form-item>

      <el-form-item label="企业logo" prop="nodeDec">
        <el-upload
          class="avatar-uploader"
          :show-file-list="false"
          action="/index/upload"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          :auto-upload="false"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item
        label="系统名称"
        prop="nodeName"
        :rules="[
          { required: true, message: '请填写节点名称', trigger: 'change' }
        ]"
      >
        <el-input class="nodeName" v-model="apForm.nodeName" show-word-limit>
        </el-input>
      </el-form-item>

      <el-form-item
        label="标题背景颜色"
        prop="nodeName"
        :rules="[
          { required: true, message: '请填写节点名称', trigger: 'change' }
        ]"
      >
        <el-input class="nodeName" v-model="apForm.nodeName" show-word-limit>
        </el-input>
      </el-form-item>
      <el-form-item
        label="菜单背景颜色"
        prop="nodeName"
        :rules="[
          { required: true, message: '请填写节点名称', trigger: 'change' }
        ]"
      >
        <el-input class="nodeName" v-model="apForm.nodeName" show-word-limit>
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
  name: "testEdit",
  props: {
    visible: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      imageUrl: "",
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
    handleBeforeUploadImg() {
      console.log("图片上传");
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    // 上传
    submit() {
      this.$refs.ruleForm.validate(vaild => {
        if (!vaild) return false;
      });
    }
  }
};
</script>

<style scoped lang="less">
.avatar-uploader /deep/ .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
