<template>
  <el-card class="enterpriseDetail">
    <div slot="header" class="clearfix">
      <el-page-header @back="$router.back()" :content="title"></el-page-header>
    </div>
    <el-form
      label-position="right"
      label-width="120px"
      :model="apForm"
      ref="ruleForm"
      :rules="rules"
      v-loading="listLoading"
    >
      <el-form-item label="基本信息" class="baseNews"></el-form-item>
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
      <el-form-item
        label="系统展示名称"
        prop="nodeName"
        :rules="[
          { required: true, message: '请填写节点名称', trigger: 'change' }
        ]"
      >
        <el-input class="nodeName" v-model="apForm.nodeName" show-word-limit>
        </el-input>
      </el-form-item>
      <el-form-item label="Logo" prop="nodeDec">
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
        label="描述："
        prop="nodeName"
        :rules="[
          { required: true, message: '请填写节点名称', trigger: 'change' }
        ]"
      >
        <el-input
          type="textarea"
          class="nodeName"
          v-model="apForm.nodeName"
          show-word-limit
        >
        </el-input>
      </el-form-item>
      <!-- 企业管理员 -->
      <el-form-item label="企业管理员" class="baseNews"></el-form-item>
      <el-form-item label="账号：" prop="account">
        <el-input class="account" v-model="apForm.account" show-word-limit>
        </el-input>
      </el-form-item>
      <el-form-item label="姓名：" prop="name">
        <el-input class="name" v-model="apForm.name" show-word-limit>
        </el-input>
      </el-form-item>
      <el-form-item label="邮箱：" prop="email">
        <el-input class="email" v-model="apForm.email" show-word-limit>
        </el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input class="password" v-model="apForm.password" show-word-limit>
        </el-input>
      </el-form-item>
      <!--企业资源配额-->
      <el-form-item label="企业资源配额" class="baseNews"></el-form-item>
      <el-form-item label="可创建节点数：" prop="password">
        <el-input-number
          v-model="num"
          controls-position="right"
          @change="handleChange"
          :min="1"
          :max="10"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="可创建应用数：" prop="password">
        <el-input-number
          v-model="num"
          controls-position="right"
          @change="handleChange"
          :min="1"
          :max="10"
        ></el-input-number>
      </el-form-item>
      <!-- 视频平台访问配置 -->
      <el-form-item label="访问地址：" prop="address">
        <el-input
          class="address"
          v-model="apForm.address"
          placeholder="请输入"
          show-word-limit
        >
        </el-input>
      </el-form-item>
      <el-form-item label="访问账号：" prop="address">
        <el-input
          class="address"
          v-model="apForm.address"
          placeholder="请输入"
          show-word-limit
        >
        </el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="pass">
        <el-input
          class="pass"
          v-model="apForm.pass"
          placeholder="请输入"
          show-word-limit
        >
        </el-input>
      </el-form-item>
      <el-form-item style="margin: 0;text-align: center">
        <!-- <el-button @click="$emit('cancel')">取消</el-button> -->
        <el-button
          type="primary"
          @click="submit"
          :loading="btnLoading"
          class="el-icon-plus"
          >创建</el-button
        >
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: "enterpriseDetail",
  components: {},
  props: {
    title: {
      type: String,
      required: false,
      default: () => {}
    }
  },
  data() {
    return {
      num: 1,
      imageUrl: "",
      listLoading: false,
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
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleAvatarSuccess() {
      console.log("handleAvatarSuccess");
    },
    beforeAvatarUpload() {
      console.log("beforeAvatarUpload");
    },
    handleChange(value) {
      console.log(value);
    },
    // 创建
    submit() {
      console.log("创建");
    }
  }
};
</script>

<style scoped lang="less">
/deep/.avatar-uploader .el-upload {
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
.baseNews /deep/.el-form-item__label {
  width: 120px;
  font-weight: bold;
  font-size: 16px;
}
.enterpriseDetail {
  max-height: 572px;
  overflow: auto;
}
</style>
