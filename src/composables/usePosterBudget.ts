import { ref } from "vue";
import { useRequest } from "@/composables/useRequest";

export const usePosterBudget = async (id: string | string[]) => {
  const loaded = ref<boolean>(false);
  const { response: budgets, request } = useRequest(`v2.2/films/${id}/box_office`, {});

  if(!loaded.value) {
    await request();
    loaded.value = true;
  }

  return { budgets, loaded }
}