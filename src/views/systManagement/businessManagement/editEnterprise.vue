<template>
  <enterprise-detail :is-edit="true" :title="title"></enterprise-detail>
</template>

<script>
import enterpriseDetail from "./components/enterpriseDetail.vue";
export default {
  name: "editEnterprise",
  components: {
    enterpriseDetail
  },
  props: {},
  data() {
    return {
      title: "编辑"
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less"></style>
