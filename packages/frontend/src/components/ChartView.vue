<script setup>
import { ref } from 'vue'

const chartOptions = ref({
  series: [
    {
      data: [1, 2, 3]
    }
  ]
})

</script>

<template>
  <div>
    <highcharts
      :constructorType="'stockChart'"
      class="hc"
      :options="chartOptions"
      ref="chart"
    ></highcharts>
  </div>
</template>
