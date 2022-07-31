import { ref } from "vue";
import { useRequest } from "@/composables/useRequest";

export const usePoster = async (id: string | string[]) => {
  const loaded = ref<boolean>(false);
  const { response: poster, request } = useRequest(`v2.2/films/${id}`, {});

  if(!loaded.value) {
    await request();
    loaded.value = true;
  }

  return { poster, loaded }
}