<template>
  <div class="my-header">
    <span>{{title}}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MyHeader",
  computed: {
    ...mapState(["title"])
  }
};
</script>

<style scoped lang='less'></style>