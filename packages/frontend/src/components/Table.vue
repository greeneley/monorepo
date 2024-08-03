<script setup>
import items from '../data/table.json'
const headers = [
  { text: 'Loại vàng (VND/Lượng)', value: 'label', width: 200 },
  { text: 'Mua vào', value: 'buy', width: 150 },
  { text: 'Bán ra', value: 'sell', width: 150 }
]
</script>

<template>
  <EasyDataTable :headers="headers" :items="items" hide-footer alternating />
</template>

<style>
.header-text {
  font-weight: 700;
}
</style>
