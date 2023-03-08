<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"
import throttle from 'lodash-es/throttle';
import Preloader from "./Preloader.vue"
import PosterItem from "./PosterItem.vue"
import { PostersTypes } from '@/types';
import POSTERS_DATA from '@/fixtures/posters.json';
import { usePosterItems } from '@/composables/usePosterItems';

const target = ref();
const isLoading = ref<boolean>(true);
let postersData = ref<PostersTypes[]>([]);
let page = ref<number>(1);
let pagesCount = ref<number>(0);

const posters = async () => {
  const { posterItems, loaded } = await usePosterItems(page.value);
  postersData.value = [...postersData.value, ...posterItems.value.films];
  isLoading.value = !loaded.value;
  pagesCount.value = posterItems.value.pagesCount;
  // isLoading.value = false;
  // postersData.value = POSTERS_DATA
}

const handleScroll = () => {
  const postList = target.value;
  if(page.value > pagesCount.value) return
  if(isLoading.value) return
  if(postList.offsetTop + postList.clientHeight < window.outerHeight + window.scrollY) {
    page.value++;
    isLoading.value = true;
    posters();
  }
}

const initThrottle = throttle(handleScroll, 150);

onMounted(() => {
  posters();
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