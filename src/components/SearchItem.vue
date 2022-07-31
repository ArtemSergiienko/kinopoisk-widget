<script setup lang="ts">
import {ref} from "vue";
import {PostersTypes} from '@/types';

interface Props {
  searchItem: PostersTypes
}

const props = defineProps<Props>();
const {searchItem} = props;
const {
  kinopoiskId,
  filmId,
  ratingKinopoisk,
  nameRu,
  nameOriginal,
  year,
  rating,
  posterUrlPreview,
  genres
} = searchItem;

const colorRatingClasses = () => {
  if (rating) {
    if (rating <= 5) {
      return 'search-item__rating--red'
    } else if (rating >= 7) {
      return 'search-item__rating--green'
    }
  }

  if (ratingKinopoisk <= 5) {
    return 'search-item__rating--red'
  } else if (ratingKinopoisk >= 7) {
    return 'search-item__rating--green'
  }
}

</script>

<template>
  <router-link
    :to="`poster/${filmId}`"
    class="search-item">
    <div class="search-item__img">
      <img :src="posterUrlPreview" alt="">
    </div>
    <div class="search-item__details">
      <div class="search-item__title">
        <div :class="colorRatingClasses()" class="search-item__rating">
          {{ ratingKinopoisk ? ratingKinopoisk : rating ? rating : '-' }}
        </div>
        {{ nameRu ? nameRu : nameOriginal }}
      </div>
      <div class="search-item__year">
        Год: {{ year }}
      </div>
      <div class="search-item__genres">
        Жанр:
        <span v-for="genre of genres">
        {{ genre.genre }}
      </span>
      </div>
    </div>
  </router-link>
</template>

<style scoped lang="sass">
.search-item
  display: flex
  color: inherit
  text-decoration: none
  margin-bottom: 10px
  padding: 10px
  border-radius: 10px
  transition: color 0.3s, box-shadow 0.3s

  &:hover
    color: #336cfb
    box-shadow: 0 12px 36px #b0c6fd

  &:last-child
    margin-bottom: 0

  &__title
    display: flex
    margin-bottom: 10px
    font-size: 20px
    font-weight: 700

  &__rating
    margin-right: 10px
    color: #a2a2a2
    font-weight: 700

  &__rating--red
    color: red

  &__rating--green
    color: green

  &__img
    width: 180px
    height: 270px
    margin-right: 20px

    img
      display: block
      width: 100%
      height: 100%
      border-radius: 10px
      object-fit: cover

  &__details
    padding: 10px 0

  &__year,
  &__genres
    font-size: 18px
    font-weight: 500

  &__year
    margin-bottom: 10px

  &__genres

    span

      &:after
        content: ', '

      &:last-child

        &:after
          content: ''


</style>