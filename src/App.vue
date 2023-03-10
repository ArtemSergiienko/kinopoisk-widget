<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";

let layout = ref<string>('default');
router.beforeEach((to) => {
  if(to.meta.layout === 'welcome') {
    layout.value = to.meta.layout;
  }
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

