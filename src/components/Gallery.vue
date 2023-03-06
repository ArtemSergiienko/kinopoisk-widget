<script setup lang="ts">
import { ref, watch, nextTick, onUpdated } from "vue";
import ImageItem from "@/components/ImageItem.vue"
import VideoItem from "@/components/VideoItem.vue"
import Lightgallery from 'lightgallery/vue';
import lgVideo from 'lightgallery/plugins/video';
import { ImagesTypes } from '@/types';
import { VideosTypes } from '@/types';
import 'lightgallery/plugins/zoom';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-video.css';

interface Props {
  galleryImgs: ImagesTypes[];
  galleryVideos: VideosTypes[];
  className?: string
}
const props = defineProps<Props>();
let lightGallery: any = null;
let imgs = ref<ImagesTypes[]>([]);
let videos = ref<VideosTypes[]>([]);

const onInit = (detail?: any) => {
  lightGallery = detail.instance;
}

onUpdated(() => {
  imgs.value = props.galleryImgs
  videos.value = props.galleryVideos
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
    :settings="{ plugins: [lgVideo] }"
    :onInit="onInit"
  >
    <ImageItem
      v-if="galleryImgs.length"
      v-for="imageUrls in galleryImgs"
      :class="className"
      :itemImage="imageUrls"
    />
    <VideoItem
        v-else
        v-for="videoUrl in galleryVideos"
        :itemVideo="videoUrl"
    />
  </lightgallery>

</template>

<style scoped lang="sass">
.poster-image
  align-self: center
  cursor: pointer

</style>