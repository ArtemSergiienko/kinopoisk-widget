import { ref } from 'vue';
import { defineStore } from "pinia";
import { ActorTypes, FilmType } from '@/types';
import { useActor } from "@/composables/useActor";
// import ACTOR_DATA from '@/fixtures/actor.json';

export const useActorStore = defineStore('actor', () => {
  const isLoading = ref<boolean>(true);
  let actor = ref<ActorTypes>();
  let films = ref<FilmType[] | undefined>([]);
  // posterData.value = [POSTER_DATA];

  async function getActor(id: string | string[]) {
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

  return { actor, films, isLoading, getActor }
})