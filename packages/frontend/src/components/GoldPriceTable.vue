<script setup>
import GoldService from '@/services/GoldService.js';
import { ref } from 'vue';

const headers = [
  { text: 'Loại vàng (VND/Lượng)', value: 'label', width: 400 },
  { text: 'Mua vào', value: 'buy', width: 150 },
  { text: 'Bán ra', value: 'sell', width: 150 }
];

const goldPrices = ref([]);

const onCustomBodyRow = (item, rowNumber) => {
  return 'row';
};

const getGoldPriceTable = async () => {
  const response = await GoldService.getGoldPriceTable();
  goldPrices.value = response.data.data;
};

getGoldPriceTable();
</script>

<template>
  <EasyDataTable
    :headers="headers"
    :items="goldPrices"
    hide-footer
    alternating
    :body-row-class-name="onCustomBodyRow"
  />
</template>

<style>
.header {
  height: 50px;
  font-size: 16px;
}

.header-text {
  font-weight: 700;
}

.row {
  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 16px;
}
</style>
