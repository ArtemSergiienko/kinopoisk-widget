import { ref } from 'vue';
import {defineStore} from "pinia";
import { ImagesTypes } from '@/types';
import { useImagesItem } from "@/composables/useImagesItem";

export const useImagesStore = defineStore('images', () => {
  const isLoading = ref<boolean>(true);
  const imagesList = ref<ImagesTypes[]>([]);
  // posterData.value = [POSTER_DATA];

  async function getImages(id: string | string[]) {
    const { images, loaded } = await useImagesItem(id);
    isLoading.value = !loaded.value;
    imagesList.value = images.value?.items;
  }

  return { imagesList, isLoading, getImages }
})