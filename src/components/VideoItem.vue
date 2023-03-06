<script setup lang="ts">
import { VideosTypes } from '@/types';

interface Props {
  itemVideo: VideosTypes
}

const props = defineProps<Props>();
const { url, name } = props.itemVideo;

</script>

<template>
  <a class="image-item"
     :href="url"
     data-lg-size="1280-720"
     :data-src="url"
     :title="name">
<!--    <img :src="url" alt="">-->
    <span>{{name}}</span>
  </a>
</template>

<style scoped lang="sass">
.image-item
  display: block

  img
    border-radius: 20px

</style>