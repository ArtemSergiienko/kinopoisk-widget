import { ref } from "vue";
import { useRequest } from "@/composables/useRequest";

export const useTrailerItem = async (id: string | string[]) => {
  const loaded = ref<boolean>(false);
  const { response: videosLinks, request } = useRequest(`v2.2/films/${id}/videos`,'', false);

  if(!loaded.value) {
    await request();
    loaded.value = true;
  }

  return { videosLinks, loaded }
}