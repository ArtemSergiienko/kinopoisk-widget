import { ref } from "vue";
import { useRequest } from "@/composables/useRequest";

export const useImagesItem = async (id: string | string[]) => {
  const loaded = ref<boolean>(false);
  const { response: images, request } = useRequest(`v2.2/films/${id}/images`,'');

  if(!loaded.value) {
    await request();
    loaded.value = true;
  }

  return { images, loaded }
}