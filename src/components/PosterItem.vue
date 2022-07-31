<script setup lang="ts">
import { PostersTypes } from '@/types';

interface Props {
  data: PostersTypes;
}

const props = defineProps<Props>();
const { data } = props;
const {
  kinopoiskId,
  ratingKinopoisk,
  nameRu,
  nameOriginal,
  year,
  posterUrlPreview,
  filmId,
  rating
} = data;

const colorRatingClasses = () => {
  if(rating) {
    if(rating <= 5 ) {
      return 'poster-item__rating--red'
    } else if (rating >= 7) {
      return 'poster-item__rating--green'
    }
  }

  if(ratingKinopoisk <= 5 ) {
    return 'poster-item__rating--red'
  } else if (ratingKinopoisk >= 7) {
    return 'poster-item__rating--green'
  }
}

</script>

<template>
  <router-link
    :to="`/poster/${kinopoiskId ? kinopoiskId : filmId}`"
    class="poster-item">
    <div class="poster-item__preview">
      <div
        class="poster-item__rating"
        :class="colorRatingClasses()"
      >
        {{ ratingKinopoisk ? ratingKinopoisk : rating ? rating : '-' }}
      </div>
      <div class="poster-item__poster">
        <img :src="posterUrlPreview" alt="">
      </div>
    </div>
    <div class="poster-item__name">{{ nameRu || nameOriginal }}</div>
    <div class="poster-item__desc">
      <div class="poster-item__detail">
        <span>{{ year }}, </span>
        <span>{{ props.data.genres[0].genre }}</span>
      </div>
    </div>
  </router-link>
</template>

<style scoped lang="sass">
.poster-item
  display: flex
  flex-direction: column
  height: 100%
  color: inherit
  text-decoration: none
  transition: color 0.3s

  &:hover
    color: #336cfb

  &__preview
    position: relative
    height: 100%
    margin-bottom: 16px

  &__rating
    position: absolute
    top: 20px
    left: -10px
    padding: 5px 10px
    background-color: #a2a2a2
    border-radius: 10px
    color: #fff

  &__rating--red
    background-color: red

  &__rating--green
    background-color: green

  &__poster
    height: 400px
    border-radius: 20px
    overflow: hidden

    img
      display: block
      width: 100%
      height: 100%
      object-fit: cover

  &__desc
    height: 100%

  &__name
    margin-bottom: 8px
    font-size: 20px
    font-weight: 700

  &__detail
    font-size: 16px

</style>