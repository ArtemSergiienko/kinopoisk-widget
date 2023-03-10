import { ref } from 'vue';
import {defineStore} from "pinia";
import { usePoster } from "@/composables/usePoster";
import { PostersTypes } from '@/types';

export const usePosterStore = defineStore('poster', () => {
  const isLoading = ref<boolean>(true);
  let posterData = ref<PostersTypes[]>([]);
  // posterData.value = [POSTER_DATA];

  async function getPoster(id: string | string[]) {
    const { poster, loaded } = await usePoster(id);
    isLoading.value = !loaded.value;
    posterData.value = poster.value;
    return isLoading.value;
  }

  return { posterData, isLoading, getPoster }
})