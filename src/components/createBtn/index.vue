<template>
  <div class="top clearfix">
    <el-row type="flex" align="middle" style="height:60px;">
      <el-col :span="Array.isArray(buttonText) ? 17 : 20">
        <el-main>
          <div class="top_title_con">{{ titleText }}</div>
        </el-main>
      </el-col>
      <el-col
        class="btn"
        :span="Array.isArray(buttonText) ? 7 : 4"
        v-if="buttonText"
      >
        <div class="right" v-if="Array.isArray(buttonText)">
          <el-button type="primary" @click="createEvent">{{
            buttonText[0]
          }}</el-button>
          <el-button type="primary" @click="createEvent_Def">{{
            buttonText[1]
          }}</el-button>
        </div>
        <div class="right" v-else-if="buttonText == ''"></div>
        <div class="right" v-else>
          <el-button type="primary" @click="createEvent">{{
            buttonText
          }}</el-button>
          <el-button
            v-if="buttonTexts"
            type="primary"
            @click="createStrategy"
            >{{ buttonTexts }}</el-button
          >
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    name: [String],
    stack: "",
    buttonText: [String, Array],
    buttonTexts: [String],
    type: [String],
    titleText: [String],
    tip: [String]
  },
  data() {
    return {
      activeName: "first",
      pibcurrentId: "",
      ctyunId: "",
      ctyunRegion: {},
      publicRegion: {}
    };
  },

  methods: {
    createEvent(fun) {
      this.$emit("create", fun);
    },
    createEvent_Def(fun) {
      this.$emit("createDef", fun);
    },
    createStrategy() {
      this.$emit("strategy");
    }
  }
};
</script>

<style lang="less" scoped>
.top {
  background: #ffffff;
  // border-bottom: 1px solid #f8f9fb;
  position: relative;
  // padding: 10px 30px 10px 10px;
  // border-bottom: 1px solid #e2e2e2;
  .top_title_con {
    color: #000;
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
  }
  .addTitle {
    width: 1.2em;
    height: 1.2em;
    margin-right: 5px;
    vertical-align: sub;
  }
  .btn:active {
    background-image: none;
    outline: 0;
    box-shadow: none;
  }
  .areaButton {
    display: block;
    min-width: 90px;
    padding: 0 10px;
    height: 30px;
    margin-bottom: 15px;
    background: #f0f2f7;
    float: left;
    text-align: center;
    line-height: 30px;
    border-radius: 5px;
    margin-right: 10px;
    font-size: 14px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  /deep/ .el-main {
    padding: 0 20px;
  }
  /deep/ .areaButton-bg {
    background: #f9cd76;
    border-color: #f9cd76;
    color: #ffffff;
  }
  /deep/ .areaButton:hover {
    background: #f9cd76;
    border-color: #f9cd76;
    color: #ffffff;
  }
}
.clear {
  content: ".";
  clear: both;
  display: block;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
.line {
  height: 10px;
  width: 100%;
  background: #f0f2f7;
  background-size: 50% 100%;
  background-repeat: no-repeat;
}
.btn {
  float: right;
}
.right {
  float: right;
}
</style>
