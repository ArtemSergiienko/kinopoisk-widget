<script setup lang="ts">
import { ref, onMounted } from "vue";
import {useRoute} from "vue-router";
import Preloader from "@/components/Preloader.vue"
import BtnBack from "@/components/BtnBack.vue"
import Fact from "@/components/Fact.vue"
import Film from "@/components/Film.vue"
import { useActor } from "@/composables/useActor";
// import ACTOR_DATA from '@/fixtures/actor.json';
import {ActorTypes, FilmType} from '@/types';

const isLoading = ref<boolean>(true);
let actor = ref<ActorTypes>();
let id = ref<string | string[]>(useRoute().params.id);
let spliceFilms = ref<number>(15);
let films = ref<FilmType[] | undefined>([]);

onMounted(() => {
  getActor(id.value);
});

const getActor = async (id: string | string[]) => {
  const { actor: actorData, loaded } = await useActor(id);
  actor.value = actorData.value;
  isLoading.value = !loaded.value;
  films.value = actor.value?.films.reduce((prevFilms: FilmType[], curFilms: FilmType) => {
    if(!prevFilms.some(film => film.filmId === curFilms.filmId )) {
      prevFilms.push(curFilms)
    }
    return prevFilms
  }, []);
  // isLoading.value = false;
  // actor.value = ACTOR_DATA;
}

const handleLoadFilms = () => {
  spliceFilms.value = spliceFilms.value + 15;
}

</script>

<template>
  <div class="actor-page">
<!--    {{ actor }}-->
    <Preloader v-if="isLoading" :isLoad="isLoading"/>
    <div v-else class="poster">
      <div class="container container--small">
        <BtnBack />
        <div class="poster__wrapper">
          <div class="poster__details">
            <div class="poster__title">
              {{ actor?.nameRu }}
            </div>
            <div class="poster__rating">
            <span>
              Пол: {{ actor?.sex === 'MALE' ? 'мужской' : 'женский' }}
            </span>
            </div>
            <div class="poster__detail">
              <span>Год рождения:</span>
              <span>{{ actor?.birthday }}</span>
            </div>
            <div v-if="actor.death" class="poster__detail">
              <span>Дата смерти:</span>
              <span>
                {{ actor.death }}
              </span>
            </div>
            <div class="poster__detail">
              <span>Возраст:</span>
              <span>{{ actor?.age }}</span>
            </div>
            <div class="poster__detail">
              <span>Место рождения:</span>
              <span>{{ actor?.birthplace }}</span>
            </div>
            <div class="poster__detail">
              <span>Место смерти:</span>
              <span>{{ actor?.deathplace }}</span>
            </div>
            <div class="poster__detail">
              <span>Профессия:</span>
              <span>{{ actor?.profession }}</span>
            </div>
            <div class="poster__detail">
              <span>Награды:</span>
              <span>{{ actor?.hasAwards }}</span>
            </div>
          </div>
          <div class="poster__preview">
            <div class="poster__img" :style="`background-image: url(${actor?.posterUrl})`">
          </div>
        </div>
        </div>
        <div class="poster__desc">
          <div class="poster__part" v-if="actor.facts.length">
            <div class="poster__title">
              Факты
            </div>
            <Fact
              v-for="fact in actor.facts"
              :fact="fact"
            />
          </div>
          <div class="poster__part" v-if="films.length">
            <div class="poster__title">
              Фильмы
            </div>
            <div class="poster__films">
              <Film
                :key="film.filmId"
                v-for="film in films.slice(0, spliceFilms)"
                :film="film"
              />
            </div>
          </div>
          <button class="poster__btn" @click="handleLoadFilms">Показать еще</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import "./../styles/mixins/media"
</style>