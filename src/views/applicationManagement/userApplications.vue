<template>
  <div class="userApplications">
    用户应用
    <input type="text" v-model="Amount" />
    <button @click="setData">传递到父组件</button>
  </div>
</template>

<script>
export default {
  name: "userApplications",
  components: {},
  props: {},
  data() {
    return {
      Amount: 100
    };
  },
  computed: {},
  watch: {
    Amount(newVal, oldVal) {
      console.log(newVal, oldVal);
      if (newVal > 5000) {
        alert("最大为5000");
        this.Amount = 5000;
      }
    }
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less"></style>
