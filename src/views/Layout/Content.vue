<template>
  <div>
    <div class="header">
      <i
        v-if="!isCollapse"
        @click="changeCollapse"
        class="iconfont icon-right-indent"
      ></i>
      <i
        v-else
        @click="changeCollapse"
        class="iconfont icon-bx-right-indent"
      ></i>
      顶部区域
    </div>
    <div class="content">
      <!-- 内容区域，路由出口 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isCollapse"],
  methods: {
    changeCollapse() {
      this.$emit("changeCollapse");
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  background: #666;
  height: 50px;
  .iconfont {
    font-size: 24px;
  }
}
.isActive {
}
</style>
