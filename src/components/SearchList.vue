<script setup lang="ts">
import SearchItem from '@/components/SearchItem.vue';
import { PostersTypes } from '@/types';
import { POSTER_DATA } from '@/constans';

interface Props {
  searchItems: PostersTypes[]
}

defineProps<Props>();

</script>

<template>
<div class="search-list">
  <div class="search-list__wrap">
    <SearchItem
      v-for="item of searchItems"
      :searchItem="item"
    />
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


</style>