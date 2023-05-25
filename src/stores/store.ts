import { usePostersStore } from '@/stores/posters';
import { usePosterStore } from '@/stores/poster';
import { useImagesStore } from '@/stores/images';
import { useBudgetStore } from '@/stores/budget';
import { useStaffStore } from '@/stores/staff';
import { useVideosStore } from '@/stores/videos';
import { useActorStore } from '@/stores/actor';
import { useUserStore } from '@/stores/user';

export const Store = {
  usePostersStore,
  usePosterStore,
  useImagesStore,
  useBudgetStore,
  useStaffStore,
  useVideosStore,
  useActorStore,
  useUserStore
}