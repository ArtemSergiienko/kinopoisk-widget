import { createApp } from "vue";
import { createPinia } from 'pinia'
import App from "./App.vue";
import router from "./router";
import "@/styles/index.sass";
import DefaultLayout from '@/layouts/Default.vue'
import WelcomeLayout from '@/layouts/Welcome.vue'

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(pinia)
  .component('default', DefaultLayout)
  .component('welcome', WelcomeLayout)
  .mount("#app")