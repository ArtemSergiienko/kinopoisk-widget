import { ref } from 'vue';
import {defineStore} from "pinia";
import { VideosTypes } from '@/types';
import { useTrailerItem } from "@/composables/useTrailerItem";
// import POSTER_VIDEOS from '@/fixtures/videos.json';

export const useVideosStore = defineStore('videos', () => {
  const isLoading = ref<boolean>(true);
  const posterVideos = ref<VideosTypes[]>([]);
  // posterData.value = [POSTER_DATA];

  async function getVideos(id: string | string[]) {
    const { videosLinks, loaded } = await useTrailerItem(id);
    posterVideos.value = videosLinks.value?.items;
    isLoading.value = !loaded.value;
    // posterVideos.value = POSTER_VIDEOS
  }

  return { posterVideos, isLoading, getVideos }
})