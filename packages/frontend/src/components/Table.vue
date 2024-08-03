<script setup>
const headers = [
  { text: 'Loại vàng (VND/Lượng)', value: 'label', width: 200 },
  { text: 'Mua vào', value: 'buy', width: 150 },
  { text: 'Bán ra', value: 'sell', width: 150 }
]

const items = [
  {
    id: 1,
    label: 'AVPL/SJC HCM',
    buy: 77000,
    sell: 79000
  },
  {
    id: 2,
    label: 'Hà Nội PNJ',
    buy: 75700,
    sell: 77020
  },
  {
    id: 3,
    label: 'SJC 1L, 10L, 1KG',
    buy: 77000,
    sell: 79000
  },
]
</script>

<template>
  <EasyDataTable :headers="headers" :items="items" hide-footer alterning/>
</template>

<style>
.header-text {
  font-weight: 700;
}
</style>
