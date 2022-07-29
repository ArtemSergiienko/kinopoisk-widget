<script setup lang="ts">
interface Props {
  title: string;
  decorText: string;
  fromText?: string;
  descShow?: boolean;
}

defineProps<Props>();

</script>

<template>
  <div class="title">
    <div class="title__text">{{ title }}</div>
    <div
      v-if="descShow"
      class="title__desc"
    >
      {{ fromText }}
    </div>
    <div class="title__decor">{{ decorText }}</div>
  </div>
</template>

<style scoped lang="sass">
.title
  position: relative

  &__text
    z-index: 10
    position: relative
    color: #336cfb
    font-size: 54px
    font-weight: 700
    text-shadow: 0 12px 36px #b0c6fd

  &__desc
    z-index: 10
    position: relative
    font-weight: 300
    font-size: 18px

  &__decor
    position: absolute
    top: -20%
    left: -2%
    width: 100%
    color: rgba(238, 245, 255, 0.53)
    font-size: 85px
    font-weight: 700
    text-transform: uppercase

</style>