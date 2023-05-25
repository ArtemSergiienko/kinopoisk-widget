<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";

let layout = ref<string | any>('default');
router.beforeEach((to) => {
  layout.value = to.meta.layout;
})

</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style lang="scss">
#app {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>

