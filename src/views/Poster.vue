<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import Gallery from "@/components/Gallery.vue"
import Preloader from "@/components/Preloader.vue"
import BtnBack from "@/components/BtnBack.vue"
import { usePoster } from "@/composables/usePoster";
import { usePosterBudget } from "@/composables/usePosterBudget";
import { useTrailerItem } from "@/composables/useTrailerItem";
import { useImagesItem } from "@/composables/useImagesItem";
import { useStaff } from "@/composables/useStaff";
import { POSTER_DATA, POSTER_BOX_OFFICE, POSTER_VIDEOS, POSTER_BOX_STAFF } from '@/constans';
import { PostersTypes, BudgetTypes, VideosTypes, ImagesTypes, StaffTypes } from '@/types';

const isLoading = ref<boolean>(true);
let id = ref<string | string[]>('');
let posterData = ref<PostersTypes>();
let posterBudget = ref<BudgetTypes[]>([]);
let posterVideos = ref<VideosTypes[]>([]);
let imagesList = ref<ImagesTypes[]>([]);
let staffList = ref<StaffTypes[]>([]);
let arrayImg = ref();

onMounted(() => {
  id.value = useRoute().params.id;
  getPoster(id.value);
  getBudget(id.value);
  // getVideos(id.value);
  getImages(id.value);
  getStaff(id.value);
});

const getPoster = async (id: string | string[]) => {
  const { poster, loaded } = await usePoster(id);
  isLoading.value = !loaded.value;
  posterData.value = poster.value;
  // posterData.value = [POSTER_DATA];
}

const getBudget = async (id: string | string[]) => {
  const { budgets, loaded } = await usePosterBudget(id);
  isLoading.value = !loaded.value;
  // const budget: BudgetTypes[] = Object
  const budget: any = Object
    .values(budgets.value)
    .find((item: any) => item.type === 'WORLD')
  posterBudget.value = [budget]
  // posterBudget.value = POSTER_BOX_OFFICE
}

const getVideos = async (id: string | string[]) => {
  // const { videosLinks, loaded } = await useTrailerItem(id);
  // console.log(videosLinks);
  // posterVideos.value = POSTER_VIDEOS
}

const getImages = async (id: string | string[]) => {
  const { images, loaded } = await useImagesItem(id);
  isLoading.value = !loaded.value;
  imagesList.value = images.value
}

const getStaff = async (id: string | string[]) => {
  const { staff, loaded } = await useStaff(id);
  isLoading.value = !loaded.value;
  staffList.value = staff.value.filter((item: any) => item.professionKey === 'ACTOR').slice(0, 5);
  // staffList.value = POSTER_BOX_STAFF.filter((item: any) => item.professionKey === 'ACTOR').slice(0, 5);
}

</script>

<template>
  <Preloader v-if="isLoading" :isLoad="isLoading"/>
  <div v-else class="poster">
    <div class="container container--small">
      <BtnBack />
      <div class="poster__wrapper">
        <div class="poster__details">
          <div class="poster__title">
            {{ posterData?.nameRu || posterData?.nameOriginal }}
          </div>
          <div class="poster__rating">
          <span>
            Рейтинг КП: {{ posterData?.ratingKinopoisk }}
          </span>
            <span>
            Рейтинг IMDB: {{ posterData?.ratingImdb }}
          </span>
          </div>
          <div class="poster__detail">
            <span>Год:</span>
            <span>{{ posterData?.year }}</span>
          </div>
          <div class="poster__detail">
            <span>Страны:</span>
            <span>
              <span v-for="item in posterData?.countries">
                {{ item.country }}
              </span>
            </span>
          </div>
          <div class="poster__detail">
            <span>Слоган:</span>
            <span>{{ posterData?.slogan }}</span>
          </div>
          <div class="poster__detail">
            <span>Актеры:</span>
            <span>
              <span v-for="actor in staffList">
                {{ actor.nameRu }}
              </span>
            </span>
          </div>
          <div class="poster__detail">
            <span>Жанры:</span>
            <span>
              <span v-for="item in posterData?.genres">
                {{ item.genre }}
              </span>
            </span>
          </div>
          <div class="poster__detail">
            <span>Сборы в мире:</span>
            <span v-for="budget in posterBudget">
              {{ budget ? budget?.symbol + budget?.amount : '-' }}
            </span>
          </div>
          <div class="poster__detail">
            <span>Премьера в мире:</span>
            <span>2020</span>
          </div>
        </div>
        <div class="poster__preview">
          <div class="poster__img" :style="`background-image: url(${posterData?.posterUrlPreview})`">
          </div>
          <div class="poster__detail poster__detail--btn">
            <span>Смотреть трейлер</span>
            <span>
              <img src="@/assets/images/yt.svg" alt="">
            </span>
          </div>
        </div>
      </div>
      <div class="poster__desc">
        {{ posterData?.description }}
      </div>
    </div>
    <div class="container container--small">
      <Gallery
        :galleryImgs="imagesList"
        class="poster__images"
        :className="'poster-image'"
      />
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
    position: relative
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
      display: flex
      justify-content: flex-end
      flex-wrap: wrap
      font-size: 18px
      font-weight: 500
      transition: color 0.3s

      &:first-child
        padding-right: 20px

      &:last-child
        text-align: right

      span
        padding-right: 10px

        &:after
          content: ', '

        &:first-child
          padding-right: 10px

        &:last-child
          padding-right: 0

          &:after
            content: ''

  &__detail--btn
    align-items: center
    cursor: pointer

    img
      display: block
      width: 30px
      height: 22px

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

  &__images
    display: grid
    gap: 10px
    grid-template-columns: repeat(5, minmax(120px, 1fr))
    padding: 20px 0

</style>