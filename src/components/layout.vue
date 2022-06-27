<template>
  <div>
    <el-row>
      <el-col :span="4">
        <!-- 左侧 menu -->
        <sidebar />
      </el-col>
      <el-col :span="20">
        <!-- 顶部的 navbar -->
        <navbar />
        <!-- 内容区 -->
        <app-main />
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
// 顶部
import Navbar from '../components/Navbar'
// 左侧
import Sidebar from '../components/Sidebar'
// 主体
import AppMain from '../components/AppMain'
</script>
<style lang="scss" scoped></style>
