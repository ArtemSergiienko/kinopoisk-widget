<script setup lang="ts">
import SearchItem from '@/components/SearchItem.vue';
import { PostersTypes } from '@/types';
import POSTER_DATA from '@/fixtures/poster.json';

interface Props {
  searchItems: PostersTypes[]
}
defineProps<Props>();

</script>

<template>
<div class="search-list">
  <div class="search-list__wrap">
    <div></div>
    <SearchItem
      v-for="(item, index) in searchItems"
      v-if="searchItems.length > 0"
      :key="item.filmId"
      :searchItem="item"
    />
    <div
      v-else
      class="search-list__nothing">
      Ничего не найдено
    </div>
  </div>
</div>
</template>

<style scoped lang="sass">
.search-list
  max-height: 620px
  background-color: #ffffff
  border-radius: 5px
  border: 1px solid #ced4da
  box-shadow: 0 12px 36px #b0c6fd
  overflow-x: auto

  &__wrap
    padding: 15px

  &__nothing
    padding: 50px 0
    font-size: 18px
    text-align: center

</style>