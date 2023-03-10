import { ref } from 'vue';
import { defineStore } from 'pinia';
import { usePosterItems } from '@/composables/usePosterItems';
import { PostersTypes } from '@/types';
// import POSTERS_DATA from '@/fixtures/posters.json';

export const usePostersStore = defineStore('posters', () => {
  let postersData = ref<PostersTypes[]>([]);
  let page = ref<number>(1);
  let pagesCount = ref<number>(0);
  const isLoading = ref<boolean>(true);

  // const posters = computed((postersData) => {
  //   return postersData
  // });

  async function getPosters() {
    const { posterItems, loaded } = await usePosterItems(page.value);
    postersData.value = [...postersData.value, ...posterItems.value.films];
    isLoading.value = !loaded.value;
    pagesCount.value = posterItems.value.pagesCount;
    page.value++;
  }

  return {
    postersData,
    page,
    pagesCount,
    isLoading,
    getPosters
  }
})