<script setup lang="ts">
interface Props {
  isLoad: boolean
}

const props = defineProps<Props>();
const not = (val: boolean) => val

</script>

<template>
  <div v-if="not(isLoad)" class="preloader">
    <div class="preloader__wrap">
      <div class="preloader__run"></div>
    </div>
  </div>

</template>

<style scoped lang="sass">

.preloader

  &__run
    position: relative
    width: 20px
    height: 20px
    border-radius: 50%
    animation: preloader__run 1s linear alternate infinite
    margin: 0 auto

  @keyframes preloader__run
    0%
      box-shadow: -60px 40px 0 2px #0052ec, -30px 40px 0 0 rgba(0, 82, 236, 0.2), 0 40px 0 0 rgba(0, 82, 236, 0.2), 30px 40px 0 0 rgba(0, 82, 236, 0.2), 60px 40px 0 0 rgba(0, 82, 236, 0.2)

    25%
      box-shadow: -60px 40px 0 0 rgba(0, 82, 236, 0.2), -30px 40px 0 2px #0052ec, 0 40px 0 0 rgba(0, 82, 236, 0.2), 30px 40px 0 0 rgba(0, 82, 236, 0.2), 60px 40px 0 0 rgba(0, 82, 236, 0.2)

    50%
      box-shadow: -60px 40px 0 0 rgba(0, 82, 236, 0.2), -30px 40px 0 0 rgba(0, 82, 236, 0.2), 0 40px 0 2px #0052ec, 30px 40px 0 0 rgba(0, 82, 236, 0.2), 60px 40px 0 0 rgba(0, 82, 236, 0.2)

    75%
      box-shadow: -60px 40px 0 0 rgba(0, 82, 236, 0.2), -30px 40px 0 0 rgba(0, 82, 236, 0.2), 0 40px 0 0 rgba(0, 82, 236, 0.2), 30px 40px 0 2px #0052ec, 60px 40px 0 0 rgba(0, 82, 236, 0.2)

    100%
      box-shadow: -60px 40px 0 0 rgba(0, 82, 236, 0.2), -30px 40px 0 0 rgba(0, 82, 236, 0.2), 0 40px 0 0 rgba(0, 82, 236, 0.2), 30px 40px 0 0 rgba(0, 82, 236, 0.2), 60px 40px 0 2px #0052ec


</style>