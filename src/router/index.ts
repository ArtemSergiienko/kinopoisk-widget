import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/kinopoisk-widget/",
    name: "Home",
    component: Home,
  },
  {
    path: "/kinopoisk-widget/poster/:id",
    name: "Poster",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Poster.vue"),
  },
  {
    path: "/kinopoisk-widget/actor/:id",
    name: "Actor",
    component: () =>
        import(/* webpackChunkName: "about" */ "@/views/Actor.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
