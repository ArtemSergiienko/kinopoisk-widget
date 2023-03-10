<script setup lang="ts">
import { ref, onMounted } from "vue";
import {useRoute} from "vue-router";
import Preloader from "@/components/Preloader.vue"
import BtnBack from "@/components/BtnBack.vue"
import Fact from "@/components/Fact.vue"
import Film from "@/components/Film.vue"
import { storeToRefs } from "pinia";
import { Store } from '@/stores/store';

let id = ref<string | string[]>(useRoute().params.id);
let spliceFilms = ref<number>(15);
const { useActorStore } = Store;
const actorStore = useActorStore();
const { actor, films, isLoading } = storeToRefs(actorStore);
const { getActor } = actorStore;


onMounted(() => {
  getActor(id.value);
});

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