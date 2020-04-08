<template>
  <div>
    <ul class="list">
      <li v-for="item in list" :key="item.id">
        <a href="#">
          <img :src="'https://images.weserv.nl?url='+item.images.small">
          <div class="info">
            <h3>{{item.title}}</h3>
            <p>豆瓣评分：{{item.rating.average}}</p>
            <p>
              <span v-for="(item,i) in item.genres" :key="i" class="tag">{{item}}</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Hot",
  data() {
    return {};
  },
  created() {
    // 去调用vuex中的action
    this.$store.dispatch("getHot");
  },
  computed: {
    ...mapState(["list"])
  }
};
</script>

<style scoped lang='less'></style>