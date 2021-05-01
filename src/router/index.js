import Vue from "vue";
import VueRouter from "vue-router";

import {
  MockupDemo,
  TableDemo,
  PopUpDemo,
  TextSearchDemo,
  TabbedContentDemo,
  ImageRotatorDemo,
} from "../views";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: { name: "TableDemo" },
  },
  {
    path: "/mockup-demo",
    name: "MockupDemo",
    component: MockupDemo,
  },
  {
    path: "/table-demo",
    name: "TableDemo",
    component: TableDemo,
  },
  {
    path: "/popup-demo",
    name: "PopUpDemo",
    component: PopUpDemo,
  },
  {
    path: "/textsearch-demo",
    name: "TextSearch",
    component: TextSearchDemo,
  },
  {
    path: "/tabbed-content-demo",
    name: "TabbedContent",
    component: TabbedContentDemo,
  },
  {
    path: "/image-rotator-demo",
    name: "ImageRotator",
    component: ImageRotatorDemo,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
