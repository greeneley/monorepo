<script setup>
import Table from '@/components/GoldPriceTable.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const onClick = () => {
  router.push({ name: 'chart' });
};
</script>

<template>
  <main class="container mt-14">
    <div class="row main border-content">
      <section class="w-full">
        <h1 class="headline highlight">GIÁ VÀNG HÔM NAY TRÊN TOÀN QUỐC</h1>
        <p>Cập nhật lúc 10:05:22 03/08/2024</p>
      </section>
      <br />
      <section>
        <Table />
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

@media (min-width: 1200px) {
  .container {
    //max-width: 1140px;
  }
}
</style>
