import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/comic/kiryuu/manga/:slug/",
      name: "MangaDetail",
      component: () => import("@/views/MangaDetail.vue"),
    },
    {
      path: "/comic/kiryuu/chapter/:slug/",
      name: "chapter",
      component: () => import("../views/ReadView.vue"),
    },
    {
      path: "/mangapopuler",
      name: "manga",
      component: () => import("../views/MangaPopuler.vue"),
    },
    {
      path: "/manhwapopuler",
      name: "manhwa",
      component: () => import("../views/ManhwaPopuler.vue"),
    },
  ],
});

export default router;
