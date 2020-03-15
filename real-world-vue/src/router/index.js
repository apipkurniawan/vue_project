import Vue from "vue";
import VueRouter from "vue-router"; // include the vue router library
// import Home from "../views/Home.vue";
// import Contact from "../views/Contact.vue";
import NotFoundComponent from "../views/NotFoundComponent.vue";
import EventCreate from "../views/EventCreate.vue";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import User from "../views/User.vue";

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
    path: "/event/create",
    name: "event-create",
    component: EventCreate,
  },
  {
    path: "/",
    name: "event-list",
    component: EventList,
  },
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
  },
  {
    path: "/user/:username",
    name: "user",
    component: User,
    props: true
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