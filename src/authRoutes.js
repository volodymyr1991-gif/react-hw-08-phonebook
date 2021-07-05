import { lazy } from "react";

const authRoutes = [
  {
    path: "/register",
    label: "Register",
    exact: true,
    component: lazy(() => import("./views/registration/RegistrationView")),
    privat: false,
    restricted: true,
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(() => import("./views/login/LoginView")),
    privat: false,
    restricted: true,
  },
];

export default authRoutes;
