import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LayoutFull from "../layouts/LayoutFull.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "",
      component: LayoutFull,
      children: [

    {
      path: "",
      name: "home",
      component: HomeView,
    },
    {
      path: "/categorias",
      name: "categorias",
      component:() => import("../views/CategoriaView.vue"),
    },
    {
      path: "/acessorios",
      name: "acessorios",
      component: () => import("../views/AcessorioView.vue"),
    },
    {
      path: "/cores",
      name: "cores",
      component: () => import("../views/CorView.vue"),
    },
    {
      path: "/marcas",
      name: "marcas",
      component: () => import("../views/MarcaView.vue"),
    },
    {
      path: "/modelos",
      name: "modelos",
      component: () => import("../views/ModeloView.vue"),
    },
    {
      path: "/veiculos",
      name: "veiculos",
      component: () => import("../views/VeiculoView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/logout",
      name: "logout",
      component: () => import("../views/LogoutView.vue"),
    }
  ],
},
],

});

export default router;
