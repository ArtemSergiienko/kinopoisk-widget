<script setup lang="ts">
import {FilmType} from '@/types';

interface Props {
  film: FilmType;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="film">
    <router-link :to="`/kinopoisk-widget/poster/${film.filmId}`">
      {{ film.nameRu }}
    </router-link>

    <span>
      Рейтинг:
      {{ film.rating }}
    </span>
  </div>
</template>

<style scoped lang="sass">
.film

  a
    color: #336cfb
    text-decoration: none
    transition: color 0.3s

    &:hover
      color: #365383
</style>