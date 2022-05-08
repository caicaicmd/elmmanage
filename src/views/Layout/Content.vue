<template>
  <div>
    <div class="header">顶部区域</div>
    <div class="content">
      <!-- 内容区域，路由出口 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  background: #666;
  height: 50px;
}
</style>
