import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/kinopoisk-widget/",
    name: "Home",
    component: Home,
    meta: {
      layout: '',
      title: ''
    }
  },
  {
    path: "/",
    name: "main",
    redirect: { name: 'registration' }
  },
  {
    path: '/registration',
    name: 'registration',
    component: () =>
      import(/* webpackChunkName: "registration" */ "@/views/Registration.vue"),
    meta: {
      layout: 'welcome',
      title: 'Вход',
    }
  },
  {
    path: "/kinopoisk-widget/poster/:id",
    name: "Poster",
    component: () =>
      import(/* webpackChunkName: "poster" */ "@/views/Poster.vue"),
    meta: {
      layout: '',
      title: ''
    }
  },
  {
    path: "/kinopoisk-widget/actor/:id",
    name: "Actor",
    component: () =>
        import(/* webpackChunkName: "actor" */ "@/views/Actor.vue"),
    meta: {
      layout: '',
      title: ''
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const registration = localStorage.getItem('regist');
//   // console.log(to.name)
//   if (!registration) {
//     // next({name: 'registration'})
//   } else {
//     next()
//   }
// })

export default router;
