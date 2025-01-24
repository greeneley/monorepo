<script setup>
import { ref } from 'vue';
import GoldService from '@/services/GoldService.js';

const headers = [
  { text: 'Loại vàng', value: 'label' },
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
  <div class="table-container mx-auto">
    <EasyDataTable
      :headers="headers"
      :items="goldPrices"
      hide-footer
      alternating
      :loading="loading"
      :body-row-class-name="onCustomBodyRow"
      :table-min-height="100"
    >
      <template #item-buy="item"> {{ formatPrice(item.buy) }}</template>
      <template #item-sell="item"> {{ formatPrice(item.sell) }}</template>
      <template #item-spread="item"> {{ formatPrice(item.sell - item.buy) }}</template>
    </EasyDataTable>
  </div>
</template>

<style>
.table-container {
  width: 100%;
  max-width: 90vw;
  overflow-x: auto;
}

.header {
  padding: 0.75rem;
}

.header-text {
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
}

.row {
  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 0.875rem;
  --easy-table-body-item-padding: 1rem 1rem;
}

@media (max-width: 639px) {
  .header-text {
    font-size: 0.75rem;
    line-height: 1rem;
  }

  .row {
    --easy-table-body-row-font-size: 0.75rem;
  }
}
</style>
