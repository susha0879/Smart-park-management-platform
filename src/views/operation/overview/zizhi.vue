<template>
  <div>
    <VChart class="chart" :option="option" />
  </div>
</template>

<script>
import VChart from "vue-echarts";
import { ref } from "vue";

export default {
  components: {
    VChart,
  },
  setup: () => {
    const option = ref({
      xAxis: {
        type: "category",
        data: [
          "能源",
          "工业",
          "农业",
          "医疗",
          "制造业",
          "交通",
          "信息化服务业",
        ],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [200, 400, 800, 1000, 800, 400, 200],
          type: "bar",
        },
      ],
    });
    return { option };
  },
};
</script>

<style scoped>
.chart {
  height: 300px;
}
</style>
