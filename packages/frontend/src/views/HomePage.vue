<script setup>
import { ref, onMounted } from 'vue';
import GoldTable from '@/components/GoldPriceTable.vue';
import GoldService from '@/services/GoldService.js';
import { formatTwoDigit, toDateFormat } from '../helper/parseDateTime.js';
import KimKhanhTable from '@/components/KimKhanhTable.vue';

const updatedGoldTime = ref(null);
const isLoading = ref(false);

const getUpdateGoldTime = async () => {
  isLoading.value = true;
  const response = await GoldService.getUpdateGoldTime();

  const updateDateTime = toDateFormat(response.data.update_at);

  const hour = formatTwoDigit(updateDateTime.getHours());
  const minutes = formatTwoDigit(updateDateTime.getMinutes());
  const date = formatTwoDigit(updateDateTime.getUTCDate());
  const month = formatTwoDigit(updateDateTime.getMonth() + 1);
  const year = updateDateTime.getFullYear();

  updatedGoldTime.value = `${hour}:${minutes} ngày ${date}/${month}/${year}`;
  isLoading.value = false;
};

onMounted(getUpdateGoldTime);
</script>

<template>
  <main class="container">
    <div class="row main border-content">
      <section class="w-full">
        <h1 class="headline highlight">GIÁ VÀNG HÔM NAY TRÊN TOÀN QUỐC</h1>
        <p>
          Cập nhật lúc:
          <span v-if="isLoading" class="italic">Đang cập nhật</span>
          <span v-else class="text-red-600 font-bold">{{ updatedGoldTime }}</span>
        </p>
      </section>
      <br />
      <section>
        <GoldTable />
      </section>
      <br />
      <section>
        <h4 class="headline highlight">GIÁ VÀNG KIM KHÁNH VIỆT HÙNG</h4>
      </section>
      <br />
      <section>
        <KimKhanhTable />
      </section>
      <br />
    </div>
  </main>
</template>

<style scoped>
.top-space {
  margin-top: 40px;
}

.container {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 90%;
}

.row {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: white;
  min-height: 90vh;
}

.border-content {
  border: none;
  border-radius: 6px;
  padding: 1rem;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
}

.headline.highlight {
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 600;
}

@media (max-width: 768px) {
  .headline.highlight {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 600;
  }
}
</style>
