<script setup>
import SJC from '@/components/Chart/SJC.vue';
import PNJ from '@/components/Chart/PNJ.vue';
</script>

<template>
  <main class="container mt-14">
    <div class="row main border-content">
      <section class="chart-section">
        <SJC />
      </section>
      <hr class="my-5" />
      <section class="chart-section">
        <PNJ />
      </section>
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

.chart-section {
  margin-top: 20px;
}
</style>
