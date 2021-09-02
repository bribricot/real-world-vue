import { createRouter, createWebHistory } from "vue-router"
import EventList from "@/views/EventList.vue"
import About from "@/views/About.vue"
import EventDetails from "@/views/EventDetails.vue"

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList
  },
  {
    path: "/event/:id",
    name: "EventDetails",
    props: true,
    component: EventDetails
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),// History mode
  routes,
});

export default router;
