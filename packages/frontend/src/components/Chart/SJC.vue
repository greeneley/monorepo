<script setup>
import { ref } from 'vue';
import GoldService from '@/services/GoldService.js';
import { formatTwoDigit } from '@/helper/parseDateTime.js';

const chartTitle = 'Biểu đồ giá vàng SJC 1 tháng qua';
const chartOptions = ref({
  chart: {
    zooming: {
      mouseWheel: {
        enabled: false
      }
    }
  },
  scrollbar: {
    enabled: false
  },
  title: {
    text: chartTitle
  },
  legend: {
    enabled: true,
    verticalAlign: 'top',
    events: {
      itemClick: function (e) {
        return false;
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
        const date = formatTwoDigit(new Date(this.value).getDate().toString());
        const month = formatTwoDigit(new Date(this.value).getMonth().toString());
        return date + '/' + month;
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
  }
});
const getDataChart = async () => {
  const { data } = await GoldService.fetchGoldPriceChartByCompany('SJC');
  const buyArray = [];
  const sellArray = [];
  data.forEach(({ dateTimeStamp, buy, sell }) => {
    buyArray.push([dateTimeStamp, buy]);
    sellArray.push([dateTimeStamp, sell]);
  });

  chartOptions.value.series = [
    {
      name: 'Mua vào',
      color: '#65bc00',
      data: [...buyArray]
    },
    {
      name: 'Bán ra',
      color: '#FF0000',
      data: [...sellArray]
    }
  ];
};

getDataChart();
</script>

<template>
  <div>
    <highcharts :constructorType="'stockChart'" :options="chartOptions" ref="chart"></highcharts>
  </div>
</template>
