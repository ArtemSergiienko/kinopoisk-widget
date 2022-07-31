<script setup lang="ts">
import { ref, onMounted } from "vue"
import Preloader from "./Preloader.vue"
import PosterItem from "./PosterItem.vue"
import { PostersTypes } from '@/types';
import { POSTERS_DATA } from '@/constans';
import { usePosterItems } from '@/composables/usePosterItems';

const isLoading = ref<boolean>(true);
let postersData = ref<PostersTypes[]>([]);

const posters = async () => {
  const { posterItems, loaded } = await usePosterItems();
  postersData.value = posterItems.value;
  isLoading.value = !loaded.value;
  // postersData.value = POSTERS_DATA
}

onMounted(() => {
  posters();
});

</script>

<template>
  <Preloader v-if="isLoading" :isLoad="isLoading"/>
  <div v-else class="poster-list">
    <PosterItem
      v-for="poster in postersData"
      :data="poster"
    />
  </div>
</template>

<style scoped lang="sass">
.poster-list
  display: grid
  grid-template-columns: repeat(5, 1fr)
  gap: 30px

</style>