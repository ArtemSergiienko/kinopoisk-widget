import { ref } from "vue";
import { useFilms } from "@/composables/useFilms";

export const usePosterItems = async () => {
  const loaded = ref<boolean>(false);
  const { response: posterItems, request } = useFilms('','');

  if(!loaded.value) {
    await request();
    loaded.value = true;
  }

  return { posterItems, loaded }
}