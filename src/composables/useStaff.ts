import { ref } from "vue";
import { useRequest } from "@/composables/useRequest";

export const useStaff = async (id: string | string[]) => {
  const loaded = ref<boolean>(false);
  const { response: staff, request } = useRequest('v1/staff', {
    filmId: id
  });

  if(!loaded.value) {
    await request();
    loaded.value = true;
  }

  return { staff, loaded }
}