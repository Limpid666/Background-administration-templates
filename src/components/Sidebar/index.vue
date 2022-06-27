/* 左侧 */
<template>
  <div>
    <!-- 左侧导航栏 -->
    <el-menu
      active-text-color="#ffd04b"
      background-color="#304156"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1">
        <el-icon>
          <MilkTea />
        </el-icon>
        <span>个人中心</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon>
          <Setting />
        </el-icon>
        <span>数据可视化</span>
      </el-menu-item>
      <el-sub-menu index="3">
        <template #title>
          <el-icon>
            <MilkTea />
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-2">111</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="1-3">2222</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
<script setup>
import { MilkTea, Setting } from '@element-plus/icons-vue'
const handleOpen = () => {}
const handleClose = () => {}
</script>
<style scoped lang="scss">
.el-menu-vertical-demo{
  height: 100vh;
}
</style>
