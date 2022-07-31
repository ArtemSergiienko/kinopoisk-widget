import { ref } from "vue";
import { useRequest } from "@/composables/useRequest";

export const usePosterItems = async () => {
  const loaded = ref<boolean>(false);
  const { response: posterItems, request } = useRequest('v2.2/films/top','');

  if(!loaded.value) {
    await request();
    loaded.value = true;
  }

  return { posterItems, loaded }
}