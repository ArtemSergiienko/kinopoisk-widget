import { ref } from "vue";
import { useRequest } from "@/composables/useRequest";

export const useSearch = async (keyword: string) => {
  const loaded = ref<boolean>(false);
  const { response: searchItems, request } = useRequest('v2.1/films/search-by-keyword', {
    keyword: keyword,
    page: 1
  }, false);

  if(!loaded.value) {
    await request();
    loaded.value = true;
  }

  return { searchItems, loaded }
}