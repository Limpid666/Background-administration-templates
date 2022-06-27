<template>
  <div>
    <app-navbar></app-navbar>
    <!-- 左侧导航栏 -->
    <app-sidebar></app-sidebar>
    <!-- 右侧主体 -->
    <app-main></app-main>
  </div>
</template>
<script setup>
// 顶部
import AppNavbar from '../components/AppNavbar'
// 左侧
import AppSidebar from '../components/AppSidebar'
// 主体
import AppMain from '../components/AppMain'
</script>
<style scoped lang="scss">
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
}
</style>
