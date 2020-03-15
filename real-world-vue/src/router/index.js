import Vue from "vue";
import VueRouter from "vue-router"; // include the vue router library
// import Home from "../views/Home.vue";
// import Contact from "../views/Contact.vue";
import EventCreate from "../views/EventCreate.vue";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";

Vue.use(VueRouter); // use the router

const routes = [
  // {
  //   path: "/", // the URL
  //   name: "Home", // name of the route
  //   component: Home // which component to render 
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () =>
  //     import( /* webpackChunkName: "about" */ "../views/About.vue")
  // },
  // {
  //   path: "/contact-us",
  //   name: "contact",
  //   component: Contact,
  //   alias: "/contact"
  // },
  {
    path: "/event-create",
    name: "event-create",
    component: EventCreate,
  },
  {
    path: "/",
    name: "event-list",
    component: EventList,
  },
  {
    path: "/event",
    name: "event-show",
    component: EventShow,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;