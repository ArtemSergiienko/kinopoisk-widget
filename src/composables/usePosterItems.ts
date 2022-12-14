import { ref } from "vue";
import { useRequest } from "@/composables/useRequest";

export const usePosterItems = async () => {
  const loaded = ref<boolean>(false);
  const { response: posterItems, request } = useRequest('v2.2/films/top', {
    type: 'TOP_100_POPULAR_FILMS',
    page: 1
  });

  if(!loaded.value) {
    await request();
    loaded.value = true;
  }

  return { posterItems, loaded }
}