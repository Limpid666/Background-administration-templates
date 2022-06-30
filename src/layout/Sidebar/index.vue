<template>
  <div>
    <div class="sidebar-title">
      <img src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png" class="sidebarimg" />
      <span>usian-admin</span>
    </div>
    <menu-tree></menu-tree>
  </div>
</template>

<script setup>
import MenuTree from './MenuTree.vue'
</script>

<style lang="scss" scoped>
.sidebarimg {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.sidebar-title {
  text-align: center;
  padding: 15px 0;
  font-size: 22px;
  vertical-align: middle;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
