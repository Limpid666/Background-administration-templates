<template>
  <div class="navbar">
    <div class="navbarbox">
      <!-- 左侧 -->
      <div class="left">
        <span class="svg-container">
          <svg-icon icon="hamburger-opened" class="addtolist" />
        </span>
        <span class="center">
          个人中心
        </span>
      </div>
      <!-- 右侧 -->
      <div class="right">
        <span class="svg-container">
          <svg-icon icon="guide" class="addtolist" />
        </span>
        <span class="svg-container">
          <svg-icon icon="search" class="addtolist" />
        </span>
        <span class="svg-container">
          <svg-icon icon="exit-fullscreen" class="addtolist" />
        </span>
        <span class="svg-container">
          <svg-icon icon="change-theme" class="addtolist" />
        </span>
        <span class="svg-container">
          <svg-icon icon="language" class="addtolist" />
        </span>
        <img src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png" class="sidebarimg" />
      </div>
    </div>

  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

  .navbarbox {
    display: flex;
    align-items: center;
    justify-content: space-between;
.right{
  display: flex;
  height: 50px;
  align-items: center;
}
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: #333;
      vertical-align: middle;
      display: inline-block;
    }

    .svg-icon[data-v-c8a70580] {
      width: 20px;
      height: 20px;
    }

    .center {
      color: $dark_gray;
    }
    .sidebarimg{
      width: 40px;
      height: 40px;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
}
</style>
