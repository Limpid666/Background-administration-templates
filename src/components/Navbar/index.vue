/* 顶部 */
<template>
  <div class="navbar">
    <div class="navbar_box">
      个人中心
      <div>
        <div style="font-size: 30px">
          <!-- 由于SVG图标默认不携带任何属性 -->
          <!-- 你需要直接提供它们 -->
          <Edit style="width: 1em; height: 1em; margin-right: 8px" />
          <Share style="width: 1em; height: 1em; margin-right: 8px" />
          <Delete style="width: 1em; height: 1em; margin-right: 8px" />
          <Search style="width: 1em; height: 1em; margin-right: 8px" />
        </div>
      </div>
    </div>
    <template>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
  </div>
</template>
<script setup>
import { Edit, Share, Delete, Search } from '@element-plus/icons-vue'
</script>
<style scoped lang="scss">
.navbar {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);

  .navbar_box {
    display: flex;
    justify-content: space-between;
  }
}
</style>
