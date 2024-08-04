<script setup>
import { ref } from 'vue'

const chartOptions = ref({
  title: {
    text: 'Biểu đồ giá vàng SJC 1 tháng qua'
  },
  legend: {
    enabled: true
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true
      }
    }
  },
  rangeSelector: {
    selected: 4,
    enabled: false,
    inputEnabled: false,
    allButtonsEnabled: true,
    buttonTheme: {
      visibility: 'hidden'
    },
    labelStyle: {
      visibility: 'hidden'
    }
  },
  xAxis: {
    minTickInterval: 24 * 3600 * 1000
  },
  series: [
    {
      name: 'Mua vào',
      color: '#65bc00',
      data: [
        [1722297600000, 77000],
        [1722211200000, 77500],
        [1722124800000, 77500],
        [1722038400000, 77500]
      ]
    },
    {
      name: 'Bán ra',
      color: '#FF0000',
      data: [
        [1722297600000, 79000],
        [1722211200000, 79500],
        [1722124800000, 79500],
        [1722038400000, 79500]
      ]
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
