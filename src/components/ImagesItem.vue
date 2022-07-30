<script setup lang="ts">
import { ImagesTypes } from '@/types';

interface Props {
  itemImage: ImagesTypes
}

const props = defineProps<Props>();
const { imageUrl, previewUrl } = props.itemImage;

</script>

<template>
  <a class="image-item" :data-src="imageUrl">
    <img :src="previewUrl" alt="">
  </a>
</template>

<style scoped lang="sass">
.image-item
  display: block

  img
    border-radius: 20px

</style>