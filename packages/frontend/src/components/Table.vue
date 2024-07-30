<script setup>
const headers = [
  { text: 'Loại vàng (VND/Lượng)', value: 'label' },
  { text: 'Mua vào', value: 'buy' },
  { text: 'Bán ra', value: 'sell' }
]

const items = [
  {
    label: 'AVPL/SJC HCM',
    buy: 77000,
    sell: 79000
  },
  {
    label: 'Hà Nội PNJ',
    buy: 75700,
    sell: 77020
  },
  {
    label: 'SJC 1L, 10L, 1KG',
    buy: 77000,
    sell: 79000
  },
]
</script>

<template>
  <EasyDataTable :headers="headers" :items="items" />
</template>
