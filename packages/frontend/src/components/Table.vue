<script setup>
import items from '../data/table.json'
import { useCounterStore } from '@/stores/counter.js'
import GoldService from '@/services/GoldService.js'
const store = useCounterStore()
const headers = [
  { text: 'Loại vàng (VND/Lượng)', value: 'label', width: 400 },
  { text: 'Mua vào', value: 'buy', width: 150 },
  { text: 'Bán ra', value: 'sell', width: 150 }
]

const onCustomBodyRow = (item, rowNumber) => {
  return 'row'
}

const onClick = () => {
  store.increment()
}

// async function getData() {
//   const items = await GoldService.getGoldPriceTable()?.data
// }
</script>

<template>
  <EasyDataTable
    :headers="headers"
    :items="items"
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
