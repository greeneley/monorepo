<script setup>
import Header from '@/components/Header.vue';
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Header />
  <div class="mt-28 lg:mt-14">
    <RouterView />
  </div>
  <Footer />
</template>
