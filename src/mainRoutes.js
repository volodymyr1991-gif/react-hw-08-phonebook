import { lazy } from "react";

const routes = [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() => import("./views/home/HomeView")),
    privat: false,
    restricted: false,
  },
  {
    path: "/contacts",
    label: "Contacts",
    exact: true,
    component: lazy(() => import("./views/phonebook/Phonebook")),
    privat: true,
    restricted: true,
  },
];

export default routes;
