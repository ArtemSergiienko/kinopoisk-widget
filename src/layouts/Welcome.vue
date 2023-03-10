<template>
  <div class="welcome-layout">
    <router-view />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">
  .welcome-layout
    min-height: 100vh
    display: flex
    justify-content: center
    align-items: center
    background-image: url('movie_posters.webp')
</style>
