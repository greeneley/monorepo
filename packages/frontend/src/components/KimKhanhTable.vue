<script setup>
import { ref } from 'vue';
import KimKhanhVietHungGoldService from '@/services/KimKhanhVietHungGoldService.js';
import GoldService from '@/services/GoldService.js';

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
  const response = await GoldService.getGoldPrice('kim-khanh');
  loading.value = false;
  goldPrices.value = response.data.map((item) => {
    return {
      ...item,
      buy: item.buy * 1000,
      sell: item.sell * 1000
    };
  });
};

getGoldPriceTable();

const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN').format(price);
};
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
    <template #item-buy="item"> {{ formatPrice(item.buy) }}</template>
    <template #item-sell="item"> {{ formatPrice(item.sell) }}</template>
    <template #item-spread="item"> {{ formatPrice(item.sell - item.buy) }}</template>
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
