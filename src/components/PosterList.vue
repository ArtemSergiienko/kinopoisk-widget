<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"
import throttle from 'lodash-es/throttle';
import Preloader from "./Preloader.vue"
import PosterItem from "./PosterItem.vue"
import { PostersTypes } from '@/types';
import { POSTERS_DATA } from '@/constans';
import { usePosterItems } from '@/composables/usePosterItems';

const target = ref();
const isLoading = ref<boolean>(true);
let postersData = ref<PostersTypes[]>([]);
let page = 1;

const posters = async () => {
  const { posterItems, loaded } = await usePosterItems(page);
  postersData.value = [...postersData.value, ...posterItems.value];
  isLoading.value = !loaded.value;
  // isLoading.value = false;
  // postersData.value = POSTERS_DATA
}

const handleScroll = () => {
  const postList = target.value;
  if(isLoading.value) return
  if(postList.offsetTop + postList.clientHeight < window.outerHeight + window.scrollY) {
    page++;
    isLoading.value = true;
    posters();
  }
}

onMounted(() => {
  posters();
  window.addEventListener("scroll", throttle(handleScroll, 150));
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
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
.poster-list
  display: grid
  grid-template-columns: repeat(5, 1fr)
  gap: 30px

</style>