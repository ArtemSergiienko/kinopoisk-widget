<script setup lang="ts">
import { ref, onMounted } from "vue";
import Preloader from "@/components/Preloader.vue"
import { usePoster } from "@/composables/usePoster";
import { usePosterBudget } from "@/composables/usePosterBudget";
import { useRoute } from "vue-router";
import { POSTER_DATA, POSTER_BOX_OFFICE } from '@/constans';
import { PostersTypes, BudgetTypes } from '@/types';

const isLoading = ref<boolean>(true);
let id = ref<string | string[]>('');
let posterData = ref<PostersTypes[]>([]);
let posterBudget = ref<BudgetTypes[]>([]);

onMounted(() => {
  id.value = useRoute().params.id;
  getPoster(id.value);
  getBudget(id.value);
});

const getPoster = async (id: string | string[]) => {
  const { poster, loaded } = await usePoster(id);
  isLoading.value = !loaded.value;
  // posterData.value = poster.value;
  posterData.value = POSTER_DATA;
}
const getBudget = async (id: string | string[]) => {
  const { budgets, loaded } = await usePosterBudget(id);
  isLoading.value = !loaded.value;
  // const budget: BudgetTypes[] = Object
  // const budget: any = Object
  //   .values(budgets.value)
  //   .find((item: any) => item.type === 'WORLD')
  // posterBudget.value = budget
  posterBudget.value = POSTER_BOX_OFFICE
}

</script>

<template>
  <Preloader v-if="isLoading" :isLoad="isLoading"/>
  <div v-else class="poster">
    <div class="container container--small">
      <div class="poster__wrapper">
        <div class="poster__details">
          <div class="poster__title">
            {{ posterData.nameRu || posterData.nameOriginal }}
          </div>
          <div class="poster__rating">
          <span>
            Рейтинг КП: {{ posterData.ratingKinopoisk }}
          </span>
            <span>
            Рейтинг IMDB: {{ posterData.ratingImdb }}
          </span>
          </div>
          <div class="poster__detail">
            <span>Год:</span>
            <span>{{ posterData.year }}</span>
          </div>
          <div class="poster__detail">
            <span>Страны:</span>
            <span>
              <span v-for="item of posterData.countries">
                {{ item.country }}
              </span>
            </span>
          </div>
          <div class="poster__detail">
            <span>Слоган:</span>
            <span>{{ posterData.slogan }}</span>
          </div>
          <div class="poster__detail">
            <span>Актеры:</span>
            <span>-</span>
          </div>
          <div class="poster__detail">
            <span>Жанры:</span>
            <span>
              <span v-for="item of posterData.genres">
                {{ item.genre }}
              </span>
            </span>
          </div>
          <div class="poster__detail">
            <span>Сборы в мире:</span>
            <span >
              {{ posterBudget.symbol + posterBudget.amount }}
            </span>
          </div>
          <div class="poster__detail">
            <span>Премьера в мире:</span>
            <span>2020</span>
          </div>
        </div>
        <div class="poster__preview">
          <div class="poster__img" :style="`background-image: url(${posterData.posterUrlPreview})`">
          </div>
          <div class="poster__detail">
            <span>Смотреть трейлер</span>
            <a href="/">BTN</a>
          </div>
        </div>
      </div>
      <div class="poster__desc">
        {{ posterData.description }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.poster

  &__wrapper
    display: flex

  &__details
    width: 100%

  &__title
    margin-bottom: 8px
    font-size: 22px
    font-weight: 700

  &__rating
    margin-bottom: 18px

    span
      margin-right: 16px
      font-size: 18px
      font-weight: 500

  &__detail
    display: flex
    justify-content: space-between
    margin-bottom: 15px
    padding: 17px 24px
    background-color: #eef5ff
    border-radius: 6px
    transition: background-color 0.3s

    &:last-child
      margin-bottom: 0

    &:hover
      background-color: #336cfb

      span
        color: #fff

    span
      font-size: 18px
      font-weight: 500
      transition: color 0.3s

  &__preview
    max-width: 370px
    width: 100%
    flex-shrink: 0
    padding-left: 30px

  &__img
    position: relative
    width: 100%
    height: 490px
    margin-bottom: 10px
    border-radius: 30px
    background:
      position: center
      repeat: no-repeat
      size: cover

    &:before
      content: ""
      z-index: 0
      position: absolute
      display: block
      width: 100%
      height: 100%
      background: inherit
      border-radius: 15px
      filter: blur(15px)

    &:after
      content: ""
      z-index: 0
      position: absolute
      top: 0
      display: block
      width: 100%
      height: 100%
      background: inherit
      border-radius: 15px

    img
      width: 100%
      height: 100%
      object-fit: cover

  &__desc
    margin-top: 18px
    font-size: 18px
    font-weight: 500



</style>