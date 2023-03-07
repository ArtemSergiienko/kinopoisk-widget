import { ref } from "vue";
import { useRequest } from "@/composables/useRequest";

export const usePosterItems = async (page: number) => {
  const loaded = ref<boolean>(false);
  const { response: posterItems, request } = useRequest('v2.2/films/top', {
    type: 'TOP_100_POPULAR_FILMS',
    page
  }, true);

  if(!loaded.value) {
    await request();
    loaded.value = true;
  }

  return { posterItems, loaded }
}