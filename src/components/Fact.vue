<script setup lang="ts">
interface Props {
  fact: string;
}

const props = defineProps<Props>();

</script>

<template>
  <div class="fact">
    {{ fact }}
  </div>
</template>

<style scoped lang="sass"></style>