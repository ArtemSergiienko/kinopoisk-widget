<script setup lang="ts">
import { ref } from "vue";
import FormReg from "@/components/FormReg.vue"

</script>

<template>
  <div class="registration">
    <div class="registration__wrap">
      <h1 class="registration__title">Вход</h1>
      <FormReg
        :type="'signUp'"
      />
    </div>
  </div>
</template>

<style scoped lang="sass">
  .registration

    &__title
      margin-bottom: 25px
      color: #fff
      font-weight: 600
      text-align: center

    &__wrap
      width: 500px
      height: 500px
      padding: 20px
      backdrop-filter: blur(10px)

</style>
