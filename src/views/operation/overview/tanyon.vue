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
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "能耗量",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "20",
              fontWeight: "bold",
            },
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: "煤" },
            { value: 735, name: "气" },
            { value: 580, name: "油品" },
            { value: 484, name: "电" },
            { value: 300, name: "热" },
          ],
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
