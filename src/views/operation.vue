<!-- 运营管理 -->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" name="asideMenu">
        <opMenu></opMenu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import opMenu from '@/components/operationMenu';
export default defineComponent({
      name:"operation",
      components:{
        opMenu
      },
});
</script>

<style scoped>

</style>