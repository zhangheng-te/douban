<template>
  <div class="my-footer">
    <ul>
      <li>
        <router-link :to="{path:'/hot'}">
          <span class="iconfont icon-remen"></span>
          <p>正在热映</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{path:'/movie'}">
          <span class="iconfont icon-dianying"></span>
          <p>即将上映</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{path:'/top'}">
          <span class="iconfont icon-top"></span>
          <p>top250</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='less'></style>