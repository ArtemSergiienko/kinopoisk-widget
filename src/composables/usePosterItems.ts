import { ref } from "vue";
import { useFilms } from "@/composables/useFilms";

export const usePosterItems = async () => {
  const loaded = ref<boolean>(false);
  const { response: posterItems, request } = useFilms('films/top','');

  if(!loaded.value) {
    await request();
    loaded.value = true;
  }

  return { posterItems, loaded }
}