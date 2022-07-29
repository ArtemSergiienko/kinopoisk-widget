<script setup lang="ts">
</script>

<template>
  <form action="" class="form">
    <div class="form__wrap">
      <div class="form__place">
        <input name="search" type="text" class="form__input" placeholder="Фильмы, сериалы, персоны">
      </div>
      <button class="form__btn">Поиск</button>
    </div>
  </form>
</template>

<style scoped lang="sass">

  .form
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
      border-radius: 0.25rem
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

</style>