<template>
  <div class="default-layout">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped lang="sass">
.default-layout
  min-height: 100vh
  display: grid
  grid-template-rows: auto 1fr auto
</style>