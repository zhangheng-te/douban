<template>
  <div class="item">
    <img :src="'https://images.weserv.nl/?url='+item.images.medium">
    <div>
      <p>豆瓣评分：{{item.rating.average}}</p>
      <p>产地：{{item.cuntries}}</p>
      <p>
        <span class="tag">{{item.genres[0]}}</span>
      </p>
      <p>{{item.summary}}</p>
    </div>
    {{$route.params.id}}
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "",
  created() {
    this.getItem(this.$route.params.id);
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["item"])
  },
  methods: {
    ...mapActions(["getItem"])
  }
};
</script>

<style lang="" scoped>
</style>