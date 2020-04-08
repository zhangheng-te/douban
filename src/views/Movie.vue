<template>
  <ul class="list">
    <li v-for="(item,id) in list" :key="id">
      <a href="./item.html">
        <img :src="'https://images.weserv.nl/?url='+item.images.small">
        <div class="info">
          <h3>{{item.title}}</h3>
          <p>豆瓣评分：{{item.rating.average}}</p>
          <p>
            <span class="tag" v-for="tag in item.genres" :key="tag">{{tag}}</span>
          </p>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "",
  data() {
    return {};
  },
  created() {
    // 调用actions
    this.getMovie();
  },
  computed: {
    ...mapState(["list"])
  },
  methods: {
    ...mapActions(["getMovie"])
  }
};
</script>

<style lang="" scoped>
</style> 