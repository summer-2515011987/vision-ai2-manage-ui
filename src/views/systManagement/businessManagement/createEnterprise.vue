<template>
  <enterprise-detail :is-edit="false" :title="title"></enterprise-detail>
</template>

<script>
import enterpriseDetail from "./components/enterpriseDetail.vue";
export default {
  name: "createEnterprise",
  components: {
    enterpriseDetail
  },
  props: {},
  data() {
    return {
      title: "创建"
    };
  },
  computed: {},
  watch: {},
  created() {
    console.log("this.$route.params", this.$route.params);
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less"></style>
