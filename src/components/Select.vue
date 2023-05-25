<script setup lang="ts">
import { ref, onMounted, VueElement } from "vue";

// interface Props {
//   values: string[];
// }
//
// const props = defineProps<Props>();
// const { values } = props;
// const values = ["Россия", "Украина", "Белорусь", "Казахстан"]
const values = ref<string>();
const name = "country";
const options = ["Россия", "Украина", "Белорусь", "Казахстан"];

</script>

<template>
  <VueMultiselect
    v-model="values"
    class="select"
    :options="options"
    placeholder="Выберете страну"
    selectLabel=""
  />
</template>

<style scoped lang="sass">

</style>