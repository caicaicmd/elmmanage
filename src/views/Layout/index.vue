<template>
  <div class="main">
    <div class="menu">
      <Menu />
    </div>
    <div class="content">
      <Content></Content>
    </div>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import Content from "./Content.vue";

export default {
  components: {
    Menu,
    Content,
  },
};
</script>

<style lang="less" scoped>
.main {
  .menu {
    background: pink;
    width: 200px;
    min-height: 1000px;
    // 固定定位
    position: fixed;
    top: 0;
    bottom: 0;
  }
  .content {
    margin-left: 200px;
  }
}
</style>
