<!-- 运营管理 -->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" name="asideMenu" class="Aside">
        <el-row class="tac">
      <el-col :span="12">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#415c85"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
          unique-opened
        >
          <el-menu-item index="1">
            <template #title>
              <el-icon><House /></el-icon>
              <span>运营总览</span>
            </template>
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><Reading /></el-icon>
              <span>内容管理</span>
            </template>
            <el-menu-item-group title="">
              <el-menu-item index="2-1">文章发布管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="">
              <el-menu-item index="2-2">内容评论管理</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><document /></el-icon>
              <span>招商管理</span>
            </template>
            <el-menu-item-group title="">
              <el-menu-item index="3-1">合同签订管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="">
              <el-menu-item index="3-2">客户信息管理</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>
              <el-icon><Avatar /></el-icon>
              <span>租户管理</span>
            </template>
            <el-menu-item-group title="">
              <el-menu-item index="4-1">租户信息管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="">
              <el-menu-item index="4-2">租户人员管理</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="5">
            <template #title>
              <el-icon><School /></el-icon>
              <span>资产管理</span>
            </template>
            <el-menu-item-group title="">
              <el-menu-item index="5-1">楼宇信息管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="">
              <el-menu-item index="5-2">公共资源管理</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="6">
            <template #title>
              <el-icon><setting /></el-icon>
              <span>账单管理</span>
            </template>
            <el-menu-item-group title="">
              <el-menu-item index="6-1">车辆缴费账单</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="">
              <el-menu-item index="6-2">租户账单管理</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-col>
    </el-row>
      </el-aside>
      <el-main>
      </el-main>
    </el-container>
  </div>
</template>
<script lang="ts" >
  import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
export default{
  data(){
    return{
       menuData:{

       }
    }
  }
}
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.Aside{
  background-color: #415c85;
}
.el-menu-vertical-demo{
    width: 200px;
}
.el-menu{
  border-right: none;
}
</style>