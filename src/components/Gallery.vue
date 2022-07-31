<script setup lang="ts">
import { ref, watch, nextTick, onUpdated } from "vue";
import ImagesItem from "@/components/ImagesItem.vue"
import Lightgallery from 'lightgallery/vue';
import { ImagesTypes } from '@/types';
import 'lightgallery/plugins/zoom';
import 'lightgallery/css/lightgallery.css';

interface Props {
  galleryImgs: ImagesTypes[];
  className?: string
}

const props = defineProps<Props>();
let lightGallery: any = null;
let imgs = ref<ImagesTypes[]>([]);

const onInit = (detail?: any) => {
  lightGallery = detail.instance;
}

onUpdated(() => {
  imgs.value = props.galleryImgs
})

watch(imgs,
  (newValue, oldValue) => {
    if(newValue !== oldValue) {
      nextTick(() => {
        lightGallery.refresh();
      })
    }
  }
)
</script>

<template>
  <lightgallery
    :onInit="onInit"
  >
    <ImagesItem
      v-for="imageUrls in galleryImgs"
      :class="className"
      :itemImage="imageUrls"
    />
  </lightgallery>

</template>

<style scoped lang="sass">
.poster-image
  align-self: center
  cursor: pointer

</style>