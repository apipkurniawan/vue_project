import Vue from "vue";
import VueRouter from "vue-router"; // include the vue router library
import NotFoundComponent from "../views/NotFoundComponent.vue";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";

Vue.use(VueRouter); // use the router

const routes = [{
    path: "/event/create", // the URL
    name: "event-create", // name of the route
    component: () => // which component to render
      import( /* webpackChunkName: "about" */ "../views/EventCreate.vue")
  },
  {
    path: "/",
    name: "event-list",
    component: EventList,
    alias: "/home"
  },
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true // untuk mengirim dan menerima param di url
  },
  {
    path: '*',
    component: NotFoundComponent
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;