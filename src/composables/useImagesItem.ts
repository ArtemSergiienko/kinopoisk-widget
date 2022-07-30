import { ref } from "vue";
import { useFilms } from "@/composables/useFilms";

export const useImagesItem = async (id: string | string[]) => {
  const loaded = ref<boolean>(false);
  const { response: images, request } = useFilms(`films/${id}/images`,'');

  if(!loaded.value) {
    await request();
    loaded.value = true;
  }

  return { images, loaded }
}