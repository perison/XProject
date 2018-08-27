<template>
  <div>
    <el-menu :router="rout" :default-active="activeIndex" mode="horizontal" @select="handleSelect"
             background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" class="el-menu-demo">
      <el-menu-item index="/operation" id="h">赛车</el-menu-item>
      <!--<el-menu-item index="/upgrade">升级检查</el-menu-item>-->
      <!--<el-submenu index="/home">-->
        <!--<template slot="title">各种平台</template>-->
        <!--<el-menu-item index="2-1">PC腾讯视频</el-menu-item>-->
        <!--<el-menu-item index="2-2">Mac腾讯视频</el-menu-item>-->
        <!--<el-menu-item index="2-3">企鹅直播</el-menu-item>-->
      <!--</el-submenu>-->
      <!--<el-menu-item index="/scroll">轮播</el-menu-item>-->
      <!--<el-menu-item index="/md">markdown</el-menu-item>-->
      <!--<el-menu-item index="/water">water</el-menu-item>-->
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '/operation',
        activeIndex2: '1',
        rout:true
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  #h {
    margin-left: 100px;
  }
</style>
