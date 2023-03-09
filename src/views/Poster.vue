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
// import POSTER_BOX_STAFF from '@/fixtures/actor.json';
// import POSTER_VIDEOS from '@/fixtures/videos.json';
// import POSTER_BOX_OFFICE from '@/fixtures/office.json';
// import POSTER_DATA from '@/fixtures/poster.json';
import { PostersTypes, BudgetTypes, VideosTypes, ImagesTypes, StaffTypes } from '@/types';

const isLoading = ref<boolean>(true);
let id = ref<string | string[]>(useRoute().params.id);
let posterData = ref<PostersTypes>();
let posterBudget = ref<BudgetTypes[]>([]);
let posterVideos = ref<VideosTypes[]>([]);
let imagesList = ref<ImagesTypes[]>([]);
let staffList = ref<StaffTypes[]>([]);

onMounted(() => {
  getPoster(id.value);
  getBudget(id.value);
  getVideos(id.value);
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
  const budget: any = Object
    .values(budgets.value)
    .find((item: any) => item.type === 'WORLD')
  posterBudget.value = [budget]
  // posterBudget.value = POSTER_BOX_OFFICE
}

const getVideos = async (id: string | string[]) => {
  const { videosLinks, loaded } = await useTrailerItem(id);
  posterVideos.value = videosLinks.value?.items;
  isLoading.value = !loaded.value;
  // posterVideos.value = POSTER_VIDEOS
}

const getImages = async (id: string | string[]) => {
  const { images, loaded } = await useImagesItem(id);
  isLoading.value = !loaded.value;
  imagesList.value = images.value?.items;
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