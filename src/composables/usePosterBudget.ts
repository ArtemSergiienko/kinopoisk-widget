import { ref } from "vue";
import { useFilms } from "@/composables/useFilms";

export const usePosterBudget = async (id: string | string[]) => {
  const loaded = ref<boolean>(false);
  const { response: budgets, request } = useFilms(`${id}/box_office`, {});

  if(!loaded.value) {
    await request();
    loaded.value = true;
  }

  return { budgets, loaded }
}