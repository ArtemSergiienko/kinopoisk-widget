<script setup lang="ts">
import Title from '@/components/Title.vue'
import Form from '@/components/Form.vue'
import PosterList from '@/components/PosterList.vue'

</script>

<template>
  <div class="home">
    <div class="container">
      <div class="home__top">
        <Title
          :title="'КиноПоиск Widget'"
          :decorText="'КиноПоиск'"
          :descShow="true"
          :fromText="'from Artem Sergienko'"
        />
      </div>
      <div class="home__search">
        <Form/>
      </div>
      <PosterList />
    </div>
  </div>
</template>

<style scoped lang="sass">
@import "./../styles/mixins/media"

.home

  &__top
    display: flex
    justify-content: center
    margin-bottom: 40px

  &__search
    max-width: 1600px
    width: 100%
    margin: 0 auto 40px auto

</style>
