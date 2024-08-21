<script setup>
import GoldService from '@/services/GoldService.js';
import { ref } from 'vue';

const headers = [
  { text: 'Loại vàng (VND/Lượng)', value: 'label' },
  { text: 'Mua vào', value: 'buy' },
  { text: 'Bán ra', value: 'sell' },
  { text: 'Chênh lệch', value: 'spread' }
];

const goldPrices = ref([]);
const loading = ref(false);
const onCustomBodyRow = () => {
  return 'row';
};

const getGoldPriceTable = async () => {
  loading.value = true;
  const response = await GoldService.getGoldPriceTable();
  loading.value = false;
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
    :loading="loading"
    :body-row-class-name="onCustomBodyRow"
  >
    <template #item-buy="item"> {{ new Intl.NumberFormat('en-us').format(item.buy) }}</template>
    <template #item-sell="item"> {{ new Intl.NumberFormat('en-us').format(item.sell) }}</template>
    <template #item-spread="item">
      {{ new Intl.NumberFormat('en-us').format(item.sell - item.buy) }}</template
    >
  </EasyDataTable>
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

@media (max-width: 768px) {
  .header {
    height: 40px;
    font-size: 12px;
  }
}
</style>
