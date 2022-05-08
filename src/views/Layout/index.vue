<template>
  <div class="main">
    <div class="menu">
      <Menu :isCollapse="isCollapse" />
    </div>
    <div class="content">
      <Content
        @changeCollapse="changeCollapse"
        :isCollapse="isCollapse"
        :class="{ isActive: isCollapse }"
      ></Content>
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
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    changeCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  .menu {
    background: #333;
    // width: 300px;
    // min-height: 1000px;
    // 固定定位
    position: fixed;
    top: 0;
    bottom: 0;
  }
  .content {
    margin-left: 300px;
  }
  .isActive {
    margin-left: -236px;
  }
}
</style>
