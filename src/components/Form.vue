<script setup lang="ts">
import {ref} from 'vue';
import SearchList from '@/components/SearchList.vue';
import {useSearch} from '@/composables/useSearch';

const inputValue = ref<String>('');
const isShow = ref<boolean>(false);
const items = ref<any[]>([]);

const onSearch = (value: string) => {
  if (value.length > 3) {
    getSearch(value);
  } else {
    isShow.value = false;
  }
}

const getSearch = async (keyword: string) => {
  const {searchItems, loaded} = await useSearch(keyword);
  isShow.value = loaded.value
  items.value = searchItems.value;
}

</script>

<template>
  <form action="" class="form">
    <div class="form__wrap">
      <div class="form__place">
        <input
          @input="onSearch(inputValue)"
          v-model="inputValue"
          class="form__input"
          name="search"
          type="text"
          placeholder="Фильмы, сериалы, персоны"
        >
      </div>
      <button class="form__btn">Поиск</button>
    </div>
    <SearchList
      v-if="isShow"
      :searchItems="items"
      class="form__list"
    />
  </form>
</template>

<style scoped lang="sass">

.form
  position: relative
  width: 100%

  &__wrap
    display: flex
    align-items: center

  &__input
    display: block
    width: 100%
    height: 40px
    padding: 20px
    background-color: #fff
    border: 1px solid #ced4da
    border-radius: 5px
    color: #495057
    font-family: 'MontserratAlternates'
    font-weight: 400
    line-height: 1.5
    outline: none
    transition: border-color 0.3s

    &:focus
      border-color: #336CFB

    &::placeholder
      font-family: 'MontserratAlternates'

  &__place
    width: 100%
    margin-right: 40px

  &__btn
    display: inline-block
    padding: 13px 35px
    background-color: #336cfb
    border-radius: 60px
    border: none
    color: #f9fbfe
    font-family: 'MontserratAlternates'
    font-weight: 500
    cursor: pointer
    box-shadow: 0 12px 36px #b0c6fd
    transition: background-color 0.3s

    &:hover
      background-color: #2965fb

  &__list
    z-index: 100
    position: absolute
    top: 62px
    max-width: 900px
    width: 100%

</style>