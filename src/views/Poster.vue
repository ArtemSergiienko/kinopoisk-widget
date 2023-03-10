<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from 'pinia';
import Gallery from "@/components/Gallery.vue"
import Preloader from "@/components/Preloader.vue"
import BtnBack from "@/components/BtnBack.vue"
import { Store } from '@/stores/store';

const isLoading = ref<boolean>(true);
const id = ref<string | string[]>(useRoute().params.id);
const { usePosterStore, useBudgetStore, useVideosStore, useImagesStore, useStaffStore } = Store;
const poster = usePosterStore();
const budget = useBudgetStore();
const videos = useVideosStore();
const images = useImagesStore();
const staff = useStaffStore();
const { posterData } = storeToRefs(poster);
const { posterBudget } = storeToRefs(budget);
const { posterVideos } = storeToRefs(videos);
const { imagesList } = storeToRefs(images);
const { staffList } = storeToRefs(staff);

onMounted(() => {
  Promise.all([
    poster.getPoster(id.value),
    budget.getBudget(id.value),
    videos.getVideos(id.value),
    images.getImages(id.value),
    staff.getStaff(id.value),
  ]).then(() => {
    isLoading.value = false;
  }).catch((error) => {
    console.error(error)
  })
});

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
              <router-link
                v-for="actor in staffList"
                :to="`/kinopoisk-widget/actor/${actor?.staffId}`"
                class="poster__link"
              >
                {{ actor.nameRu }}
              </router-link>
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
<!--          <div class="poster__detail poster__detail&#45;&#45;btn">-->
<!--            <span>Смотреть трейлер</span>-->
<!--            <span>-->
<!--              <img src="@/assets/images/yt.svg" alt="">-->
<!--            </span>-->
<!--          </div>-->

          <Gallery
              :galleryImgs="[]"
              :galleryVideos="posterVideos"
              class="poster__images"
              :className="'poster__detail poster__detail--btn'"
          />
        </div>
      </div>
      <div class="poster__desc">
        {{ posterData?.description }}
      </div>
    </div>
    <div class="container container--small">
      <Gallery
        :galleryImgs="imagesList"
        :galleryVideos="[]"
        class="poster__images"
        :className="'poster-image'"
      />
    </div>
  </div>
</template>

<style lang="sass">

</style>