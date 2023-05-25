<script setup lang="ts">
import { ref } from "vue";
import Select from "@/components/Select.vue";
import InputTel from "@/components/InputTel.vue";
import { Store } from '@/stores/store';

interface Props {
  type: string
}

const props = defineProps<Props>();
const { useUserStore } = Store;
const useUser = useUserStore();

const user = {
  firstName: null,
  lastName: null,
  phone: null,
  email: null,
  password: null,
  country: null ,
}

const handleSubmit = () => {
  useUser.registerUser(user.email, user.password);
}

</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    action=""
    class="form-reg"
  >
    <div class="form-reg__places">
      <div class="form-reg__place">
        <input
          v-model="user.email"
          class="form-reg__input"
          name="email"
          placeholder="Ваш email"
        >
      </div>
      <div v-if="type === 'signUp'" class="form-reg__place">
        <input
          v-model="user.password"
          class="form-reg__input"
          type="password"
          name="password"
          placeholder="Ваш пароль"
        >
      </div>
    </div>
    <div v-if="type !== 'signUp'" class="form-reg__places">
      <div class="form-reg__place">
        <input
          v-model="user.password"
          class="form-reg__input"
          type="password"
          name="password"
          placeholder="Ваш пароль"
        >
      </div>
      <div class="form-reg__place">
        <input
          v-model="user.password"
          class="form-reg__input"
          type="password"
          name="password"
          placeholder="Повторите пароль"
        >
      </div>
    </div>
    <div class="form-reg__bottom">
      <button
        v-if="type === 'signUp'"
        class="form-reg__submit">
        Войти
      </button>
      <button
        else
        class="form-reg__submit">
        Зарегистрироваться
      </button>
    </div>

  </form>
</template>

<style scoped lang="sass">
.form-reg

  &__places
    display: grid
    gap: 15px
    grid-template-columns: repeat(2, 1fr)
    margin-bottom: 15px

  &__place
    position: relative

  &__input
    display: block
    width: 100%
    padding: 9px 20px
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

  &__submit
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