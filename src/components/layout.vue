<template>
  <div>
    <template>
      <div class="app-wrapper">
        <!-- 左侧 menu -->
        <sidebar />
        <div class="main-container">
          <div class="fixed-header">
            <!-- 顶部的 navbar -->
            <navbar />
          </div>
          <!-- 内容区 -->
          <app-main />
        </div>
      </div>
    </template>
    <app-navbar></app-navbar>
    <!-- 左侧导航栏 -->
    <app-sidebar></app-sidebar>
    <!-- 右侧主体 -->
    <app-main></app-main>
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
