<script setup lang="ts">
import { ref } from "vue";

// interface Props {
//   values: string[];
// }
//
// const props = defineProps<Props>();
// const { values } = props;
// const values = ["Россия", "Украина", "Белорусь", "Казахстан"]
const phone = ref<any>();

</script>

<template>
  <vue-tel-input
    v-model="phone"
    class="input-phone"
    mode="international"
  />
</template>

<style scoped lang="sass">

</style>