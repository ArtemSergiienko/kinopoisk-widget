<script setup lang="ts">

</script>

<template>
  <a
    @click="$router.go(-1)"
    class="btn-back"
  >
    <img src="@/assets/images/free_icon_1.svg" alt="">
    Назад
  </a>
</template>

<style scoped lang="sass">
.btn-back
  display: inline-flex
  font-size: 18px
  padding: 20px 0 30px
  color: inherit
  text-decoration: none
  transition: color 0.3s

  &:hover
    color: #0052ec

  img
    margin-right: 10px
    width: 20px
    height: 20px

</style>