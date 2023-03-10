import { ref } from 'vue';
import {defineStore} from "pinia";
import { usePosterBudget } from "@/composables/usePosterBudget";
import { BudgetTypes } from '@/types';
// import POSTER_BOX_OFFICE from '@/fixtures/office.json';

export const useBudgetStore = defineStore('budget', () => {
  const isLoading = ref<boolean>(true);
  const posterBudget = ref<BudgetTypes[]>([]);
  // posterData.value = [POSTER_DATA];

  async function getBudget(id: string | string[]) {
    const { budgets, loaded } = await usePosterBudget(id);
    isLoading.value = !loaded.value;
    const budget: any = Object
      .values(budgets.value)
      .find((item: any) => item.type === 'WORLD')
    posterBudget.value = [budget]
    // posterBudget.value = POSTER_BOX_OFFICE
  }

  return { posterBudget, isLoading, getBudget }
})