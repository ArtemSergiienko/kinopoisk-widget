<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"
import throttle from 'lodash-es/throttle';
import Preloader from "./Preloader.vue"
import PosterItem from "./PosterItem.vue"
import { storeToRefs } from 'pinia'
import { Store } from '@/stores/store';

const target = ref();
const { usePostersStore } = Store;
const posters = usePostersStore();
const { postersData, pagesCount, isLoading, page } = storeToRefs(posters);
const { getPosters } = posters;

const handleScroll = () => {
  const postList = target.value;
  if(page.value > pagesCount.value) return;
  if(isLoading.value) return;
  if(postList.offsetTop + postList.clientHeight < window.outerHeight + window.scrollY) {
    getPosters();
  }
}

const initThrottle = throttle(handleScroll, 200);

onMounted(() => {
  getPosters();
  window.addEventListener("scroll", initThrottle);
});

onUnmounted(() => {
  window.removeEventListener("scroll", initThrottle)
});

</script>

<template>
  <div ref="target" class="poster-list">
    <PosterItem
      v-for="poster in postersData"
      :data="poster"
      :key="poster.filmId"
    />
  </div>
  <Preloader v-if="isLoading" :isLoad="isLoading"/>
</template>

<style scoped lang="sass">
@import "./../styles/mixins/media"
.poster-list
  display: grid
  grid-template-columns: repeat(5, 1fr)
  gap: 30px

  +max-w(1500)
    grid-template-columns: repeat(4, 1fr)

  +max-w(1200)
    grid-template-columns: repeat(3, 1fr)
    gap: 15px

  +max-w(768)
    grid-template-columns: repeat(2, 1fr)
    gap: 15px

  +max-w(480)
    grid-template-columns: repeat(1, 1fr)

</style>