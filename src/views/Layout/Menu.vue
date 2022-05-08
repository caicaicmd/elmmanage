<template>
  <div>
    <el-menu
      default-active="/"
      class="el-menu-vertical-demo"
      background-color="#333"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :collapse="isCollapse"
    >
      <el-menu-item index="/">
        <i class="iconfont icon-shouye"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index="/datamanage/userlist" class="menusize">
        <template slot="title">
          <i class="iconfont icon-shujuguanli"></i>
          <span>数据管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/datamanage/userlist">
            <i class="iconfont icon-yonghuliebiao"></i>
            <span>用户列表</span>
          </el-menu-item>
          <el-menu-item index="/datamanage/merchantlist">
            <i class="iconfont icon-shangjialiebiaoicon"></i>
            <span>商家列表</span>
          </el-menu-item>
          <el-menu-item index="/datamanage/foodlist">
            <i class="iconfont icon-shouyeshipin"></i>
            <span>食品列表</span>
          </el-menu-item>
          <el-menu-item index="/datamanage/orderlist">
            <i class="iconfont icon-dingdanliebiao"></i>
            <span>订单列表</span>
          </el-menu-item>
          <el-menu-item index="/datamanage/adminlist">
            <i class="iconfont icon-a-ziyuan26"></i>
            <span>管理员列表</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="/dataadd/addmerchant">
        <template slot="title">
          <i class="iconfont icon-tianjiashuju"></i>
          <span>添加数据</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/datamanage/userlist">
            <i class="iconfont icon-shangpu"></i>
            <span>添加商铺</span>
          </el-menu-item>
          <el-menu-item index="/dataadd/addfood">
            <i class="iconfont icon-shangpin"></i>
            <span>添加商品</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/userfenbu">
        <i class="iconfont icon-tubiao-bingtu"></i>
        <span slot="title">用户分布</span>
      </el-menu-item>
      <el-menu-item index="/adminsetting">
        <i class="iconfont icon-shezhi"></i>
        <span slot="title">管理员设置</span>
      </el-menu-item>
      <el-menu-item index="/adout">
        <i class="iconfont icon-guanyu"></i>
        <span slot="title">关于我</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: ["isCollapse"],
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.iconfont {
  font-size: 20px;
  letter-spacing: 18px;
}
.iconfont + span {
  font-size: 18px;
}
.el-menu {
  border-right: 0;
  .is-active {
    background: #222 !important;
    color: #fff !important;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 300px;
  min-height: 400px;
}
</style>
