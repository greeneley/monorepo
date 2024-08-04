<script setup>
import { ref } from 'vue'

const text = 'Biểu đồ giá vàng AVPL/SJC HCM 1 tháng qua'

const chartOptions = ref({
  chart: {
    zooming: {
      mouseWheel: {
        enabled: false
      }
    }
  },
  title: {
    text: text
  },
  legend: {
    enabled: true,
    verticalAlign: 'top',
    events: {
      itemClick: function (e) {
        return false
      }
    }
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
    allButtonsEnabled: true
  },
  xAxis: {
    minTickInterval: 24 * 3600 * 1000,
    labels: {
      formatter: function () {
        const date = new Date(this.value).getDate().toString()
        const month = new Date(this.value).getMonth().toString()
        return date + '/' + month
      }
    }
  },
  tooltip: {
    xDateFormat: '%H:%M %d/%m'
  },
  navigator: {
    enabled: false
  },
  credits: {
    text: 'Nguồn: tổng hợp giá vàng toàn quốc'
  },
  series: [
    {
      name: 'Mua vào',
      color: '#65bc00',
      data: [
        [Date.UTC(2024, 8, 1, 8, 0, 0), 78.5],
        [Date.UTC(2024, 7, 31, 8, 0, 0), 77.5],
        [Date.UTC(2024, 7, 30, 8, 0, 0), 77.5],
        [Date.UTC(2024, 7, 29, 8, 0, 0), 76.8],
        [Date.UTC(2024, 7, 28, 8, 0, 0), 75.8],
        [Date.UTC(2024, 7, 27, 8, 0, 0), 74.8],
        [Date.UTC(2024, 7, 26, 8, 0, 0), 73.8],
        [Date.UTC(2024, 7, 25, 8, 0, 0), 72.8],
        [Date.UTC(2024, 7, 24, 8, 0, 0), 71.8],
        [Date.UTC(2024, 7, 23, 8, 0, 0), 70.8],
        [Date.UTC(2024, 7, 22, 8, 0, 0), 69.8],
        [Date.UTC(2024, 7, 21, 8, 0, 0), 68.8],
        [Date.UTC(2024, 7, 20, 8, 0, 0), 67.8]
      ]
    },
    {
      name: 'Bán ra',
      color: '#FF0000',
      data: [
        [Date.UTC(2024, 8, 1, 8, 0, 0), 80.5],
        [Date.UTC(2024, 7, 31, 8, 0, 0), 79.5],
        [Date.UTC(2024, 7, 30, 8, 0, 0), 79.5],
        [Date.UTC(2024, 7, 29, 8, 0, 0), 80],
        [Date.UTC(2024, 7, 28, 8, 0, 0), 82],
        [Date.UTC(2024, 7, 27, 8, 0, 0), 83],
        [Date.UTC(2024, 7, 26, 8, 0, 0), 79],
        [Date.UTC(2024, 7, 25, 8, 0, 0), 78],
        [Date.UTC(2024, 7, 24, 8, 0, 0), 77],
        [Date.UTC(2024, 7, 23, 8, 0, 0), 76],
        [Date.UTC(2024, 7, 22, 8, 0, 0), 75],
        [Date.UTC(2024, 7, 21, 8, 0, 0), 71],
        [Date.UTC(2024, 7, 20, 8, 0, 0), 74]
      ]
    }
  ]
})
</script>

<template>
  <div>
    <highcharts :constructorType="'stockChart'" :options="chartOptions" ref="chart"></highcharts>
  </div>
</template>
