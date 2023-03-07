import { ref } from "vue";
import { useRequest } from "@/composables/useRequest";

export const useActor = async (id: string | string[]) => {
  const loaded = ref<boolean>(false);
  const { response: actor, request } = useRequest(`v1/staff/${id}`, '', true);

  if(!loaded.value) {
    await request();
    loaded.value = true;
  }

  return { actor, loaded }
}