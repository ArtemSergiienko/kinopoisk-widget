import { ref } from "vue";
import { useFilms } from "@/composables/useFilms";

export const usePoster = async (id: string | string[]) => {
  const loaded = ref<boolean>(false);
  const { response: poster, request } = useFilms(`films/${id}`, {});

  if(!loaded.value) {
    await request();
    loaded.value = true;
  }

  return { poster, loaded }
}