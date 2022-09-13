<!-- 运营管理 -->
<template>
  <el-container>
    <el-container>
      <!-- 右侧内容 -->
      <el-main>
        <!-- 页面右侧视图 -->
        <div class="router-view-box">
          <!-- 上方盒子 -->
          <div class="hh">
            <!-- 上方左边盒子 -->
            <div class="top-left-box">
              <!-- 上方头部 -->
              <div class="header-box">
                <div class="hh">
                  <img src="../../../../public/images/1.png" />
                  <div class="text-hh hhh">
                    <text class="hh2">文章总数（篇）</text>
                    <text class="hh3 color1">915</text>
                  </div>
                </div>
                <div class="hh">
                  <img src="../../../../public/images/2.png" />
                  <div class="text-hh hhh">
                    <text class="hh2">潜在用户（个）</text>
                    <text class="hh3 color2">536</text>
                  </div>
                </div>
                <div class="hh">
                  <img src="../../../../public/images/3.png" />
                  <div class="text-hh hhh">
                    <text class="hh2">企业情况（家）</text>
                    <text class="hh3 color3">694</text>
                  </div>
                </div>
                <div class="hh">
                  <img src="../../../../public/images/4.png" />
                  <div class="text-hh hhh">
                    <text class="hh2">园区用户（人）</text>
                    <text class="hh3 color4">8536</text>
                  </div>
                </div>
              </div>
              <!-- 待办和动态的盒子 -->
              <div class="daiban-dongtai-box">
                <!-- 待办事项 -->
                <div class="daiban-box">
                  <div>
                    <div class="small-box"></div>
                    <text class="small-box-text">待办事项</text>
                  </div>
                  <div
                    v-for="item in daibantableData"
                    :index="item"
                    :key="item.date"
                    class="daiban-table daiban-table-margin"
                  >
                    <div>{{ item.date }}</div>
                    <div>{{ item.name }}</div>
                    <button class="daiban-btn">我来处理</button>
                  </div>
                </div>
                <!-- 最新动态 -->
                <div class="daiban-box">
                  <div>
                    <div class="small-box"></div>
                    <text class="small-box-text">最新动态</text>
                  </div>
                  <div
                    v-for="item in dongtaitableData"
                    :index="item"
                    :key="item.name"
                    class="daiban-table dongtai-table-margin"
                  >
                    <div>
                      <button :id="item.color" class="dongtai-btn">
                        {{ item.name }}
                      </button>
                    </div>
                    <div>我（超级管理员） 通过了{公司}的入驻申请</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 园区优质企业排名TOP10 -->
            <div class="top10box">
              <div class="toptitle">园区优质企业排名TOP10</div>
              <el-table
                :data="tableData"
                stripe
                :row-class-name="tableRowClassName"
              >
                <el-table-column prop="name" label="企业名称" width="290" />
                <el-table-column prop="person" label="高新人才数" width="100" />
                <el-table-column prop="money" label="企业估值（亿元）" />
              </el-table>
            </div>
          </div>
          <!-- 下方盒子 -->
          <div class="down-box">
            <!-- 园区企业资质情况 -->
            <div class="daiban-box">
              <div>
                <div class="small-box"></div>
                <text class="small-box-text">园区企业资质情况</text>
              </div>
              <div>
                <zizhi />
              </div>
            </div>
            <!-- 园区双碳用能情况 -->
            <div class="daiban-box">
              <div>
                <div class="small-box"></div>
                <text class="small-box-text">园区双碳用能情况</text>
              </div>
              <div>
                <tanyon />
              </div>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import { reactive } from "@vue/reactivity";
import zizhi from "../overview/zizhi.vue";
import tanyon from "../overview/tanyon.vue";
import VChart from "vue-echarts";
import { ref } from "vue";
import * as ElIcons from "@element-plus/icons-vue";

const tableData = [
  {
    name: "杭州久碳科技有限公司",
    person: "287",
    money: "345",
  },
  {
    name: "杭州麟云科技有限公司",
    person: "225",
    money: "298",
  },
  {
    name: "杭州数溪科技有限公司",
    person: "219",
    money: "289",
  },
  {
    name: "南京可达鸭娱乐有限公司",
    person: "203",
    money: "276",
  },
  {
    name: "杭州起梦科技有限公司",
    person: "195",
    money: "234",
  },
  {
    name: "杭州氧屋东西科技有限公司",
    person: "182",
    money: "215",
  },
  {
    name: "喵兜兜（杭州）科技有限公司",
    person: "170",
    money: "132",
  },
  {
    name: "杭州依熙商务服务有限公司",
    person: "158",
    money: "109",
  },
  {
    name: "杭州泓淼投资管理有限公司",
    person: "143",
    money: "56",
  },
  {
    name: "杭州林涛工程机械科技有限公司",
    person: "129",
    money: "32",
  },
];

const daibantableData = reactive([
  {
    date: "入驻待审核企业",
    name: "23(家)",
  },
  {
    date: "合同签订待处理",
    name: "42(单)",
  },
  {
    date: "租户物业费催缴",
    name: "22(单)",
  },
  {
    date: "潜在客户待签单",
    name: "37(单)",
  },
]);

const dongtaitableData = reactive([
  {
    color: "zhid",
    name: "置顶",
  },
  {
    color: "zhid",
    name: "置顶",
  },
  {
    color: "rem",
    name: "热门",
  },
  {
    color: "rem",
    name: "热门",
  },
  {
    color: "rem",
    name: "热门",
  },
  {
    color: "zuix",
    name: "最新",
  },
]);
</script>

<style scoped>
.down-box {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.router-view-box {
  padding: 0px;
}
.header-box {
  display: flex;
  flex-direction: cow;
  justify-content: space-between;
  background-color: white;
  padding: 20px;
  /* justify-content: space-between; */
}
.hh {
  display: flex;
  justify-content: space-between;
}
.hh img{
  width: 80%;
  height: 80%;
}
.hhh {
  display: flex;
  flex-direction: column;
}
.hh2 {
  /* outline: 1px solid red; */
  width: 100%;
}
.hh3 {
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
}
.color1 {
  color: #0202ff;
}
.color2 {
  color: #8502ff;
}
.color3 {
  color: #f4ab4c;
}
.color4 {
  color: #55c2ed;
}
.text-hh {
  font-size: 20px;
  margin-top: 20px;
}
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
.toptitle {
  height: 57px;
  font-size: 27px;
  text-align: center;
  line-height: 57px;
  color: white;
  font-weight: bold;
  background-color: #02f4f4;
}
.small-box {
  background-color: #5f81ea;
  width: 10px;
  height: 35px;
  display: inline-block;
}
.small-box-text {
  color: black;
  font-size: 27px;
  font-weight: bold;
  margin-left: 30px;
}
.daiban-box {
  width: 49.5%;
  background-color: white;
  padding: 18px;
}
.daiban-table {
  display: flex;
  flex-direction: cow;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
}
.daiban-table-margin {
  margin-top: 20px;
}
.dongtai-table-margin {
  margin-top: 10px;
}
.daiban-table button {
  color: #02bfbf;
  border: 1px solid #02bfbf;
  border-radius: 5px;
  font-size: 20px;
  background-color: white;
}
.daiban-btn {
  padding: 7px 15px;
  font-size: 15px;
}
.dongtai-btn {
  padding: 5px 10px;
}
#zhid {
  color: #02bfbf;
  border: 1px solid #02bfbf;
  font-size: 15px;
  font-weight: bold;
}
#rem {
  color: #a40216;
  border: 1px solid #a40216;
  font-size: 15px;
  font-weight: bold;
}
#zuix {
  color: #f4ab4c;
  border: 1px solid #f4ab4c;
  font-size: 15px;
  font-weight: bold;
}
.daiban-dongtai-box {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.top-left-box {
  display: flex;
  flex-direction: column;
  width: 65%;
}
.top10box {
  margin-left: 10px;
  width: 36%;
  /* height: 50%; */
}
</style>
