<template>
  <el-container style="height: 100%">
    <el-aside class="aside_bg" width="230px">
      <el-header height="77px" class="side_logo">
        <div class="side_logo_container">
          <img class="side_logo_img" src="../assets/logo.png" >
        </div>
      </el-header>
      <my-menu></my-menu>
    </el-aside>
    <el-container>
      <el-header height="81" style="padding: 0px">
        <my-header></my-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import myMenu from './../components/MyMenu'
import myHeader from './../components/MyHeader'

export default {
  name: 'Home',
  components: { myMenu, myHeader }
}
</script>

<style>
  .side_logo {
    padding: 0px;
  }
  .side_logo_img {
    width: 230px;
  }
  .aside_bg {
    background-color: #071429;
  }
</style>
