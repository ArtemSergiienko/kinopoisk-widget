import { createApp } from "vue";
import { createPinia } from 'pinia';
import VueMultiselect from 'vue-multiselect';
// @ts-ignore
import { firebase } from './firebaseConfig.js';
// @ts-ignore
import VueTelInput from 'vue-tel-input';
import App from "./App.vue";
import router from "./router";
import DefaultLayout from '@/layouts/Default.vue';
import WelcomeLayout from '@/layouts/Welcome.vue';
import "@/styles/index.sass";
import "vue-multiselect/dist/vue-multiselect.css";
import 'vue-tel-input/dist/vue-tel-input.css';

const pinia = createPinia();
const globalOptions = {
  mode: 'auto',
  onlyCountries: ['Ua', 'RU', 'Kz','By']
};

createApp(App)
  .use(router)
  .use(pinia)
  // @ts-ignore
  .use(VueTelInput, globalOptions)
  .component('VueMultiselect', VueMultiselect)
  .component('default', DefaultLayout)
  .component('welcome', WelcomeLayout)
  .component('firebase', firebase)
  .mount("#app")