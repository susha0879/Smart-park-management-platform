<!-- 页面布局 -->
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <div class="header-bottom">
        <div class="select">
          项目地址
          <el-select v-model="value" class="m-2" placeholder="成都高华设计科创园" size="small">
            <el-option 
            v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
            />
          </el-select>
        </div>
        <div class="timer">
          {{ nowTime }}
        </div>
      </div>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import Header from "../components/header.vue";
import { formatTime } from "../utils/formatdate";
import { ref, onMounted } from "vue";

const nowTime = ref("nowTime");
onMounted(() => {
  setInterval(() => {
    nowTime.value = formatTime(new Date());
  });
});

const value = ref('')

const options = [
  {
    value: '成都高华设计科创园',
    label: '成都高华设计科创园',
  },
  {
    value: '德信AI产业科技园',
    label: '德信AI产业科技园',
  },
  {
    value: '米菲影视娱乐产业园',
    label: '米菲影视娱乐产业园',
  },
  {
    value: '讯特产业科技园',
    label: '讯特产业科技园',
  },
]
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.common-layout,
.el-container {
  width: 100%;
  height: 100%;
}

::v-deep.el-header {
  padding: 0;
  height: 46px;
}
.header-bottom {
  position: relative;
  height: 46px;
  background-color: #415c85;
  padding: 10px;
  color: white;
}

.select {
  position: relative;
  left: 10px;
  width: 300px;
  display: inline-block;
}

.timer {
  position: relative;
  width: 200px;
  top: 6px;
  float: right;
}
</style>
