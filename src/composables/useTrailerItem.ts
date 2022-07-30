import { ref } from "vue";
import { useFilms } from "@/composables/useFilms";

export const useTrailerItem = async (id: string | string[]) => {
  const loaded = ref<boolean>(false);
  const { response: videosLinks, request } = useFilms(`films/${id}/videos`,'');

  if(!loaded.value) {
    await request();
    loaded.value = true;
  }

  return { videosLinks, loaded }
}