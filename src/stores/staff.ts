import { ref } from 'vue';
import {defineStore} from "pinia";
import { StaffTypes } from '@/types';
import { useStaff } from "@/composables/useStaff";
// import POSTER_BOX_STAFF from '@/fixtures/actor.json';

export const useStaffStore = defineStore('staff', () => {
  const isLoading = ref<boolean>(true);
  const staffList = ref<StaffTypes[]>([]);
  // posterData.value = [POSTER_DATA];

  async function getStaff(id: string | string[]) {
    const { staff, loaded } = await useStaff(id);
    isLoading.value = !loaded.value;
    staffList.value = staff.value.filter((item: any) => item.professionKey === 'ACTOR').slice(0, 5);
    // staffList.value = POSTER_BOX_STAFF.filter((item: any) => item.professionKey === 'ACTOR').slice(0, 5);
  }

  return { staffList, isLoading, getStaff }
})