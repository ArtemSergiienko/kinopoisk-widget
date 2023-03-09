import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { usePosterItems } from '@/composables/usePosterItems';
import { PostersTypes } from '@/types';

export const posters = defineStore('alerts', () => {
  let postersData = ref<PostersTypes[]>([]);
  let page = ref<number>(1);
  let pagesCount = ref<number>(0);
  const isLoading = ref<boolean>(true);

  // const testFunc = computed(() => {});

  async function getPosters() {
    const { posterItems, loaded } = await usePosterItems(page.value);
    postersData.value = [...postersData.value, ...posterItems.value.films];
    isLoading.value = !loaded.value;
    pagesCount.value = posterItems.value.pagesCount;
  }

  function setPage() {
    page.value++;
  }

  function setLoading() {
    isLoading.value = !isLoading.value;
  }

  return { postersData, pagesCount, page, isLoading, getPosters, setPage, setLoading }
})