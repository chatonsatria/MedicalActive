import { createRouter, createWebHistory } from "vue-router";

// import component or layout for the vue-router
// Landing
import Home from "../views/Home/Home.vue";
import About from "../views/Home/About.vue";
import Explore from "../views/Home/Explore.vue";
// auth
import Login from "../views/Auth/Login.vue";
import Register from "../views/Auth/Register.vue";
// dashboard
import Dashboard_index from "../views/Dashboard/Index.vue";
import Dashboard_profile from "../views/Dashboard/Profile.vue";
import Dashboard_service from "../views/Dashboard/Service.vue";
import Dashboard_orders from "../views/Dashboard/Orders.vue";
// layouts
import DashboardLayout from "../components/DashboardLayouts/DashboardLayout.vue";
import MainLayout from "../components/LandingLayouts/MainLayout.vue";
import AuthLayout from "../components/AuthLayouts/AuthLayout.vue";
// store
import store from "../store";

// defines all the route for the vue-router
const routes = [
  // no auth route
  {
    path: "/",
    // make redirect for including other layout from components folder in this case DefaultLayout
    redirect: "/home",
    // define component on redirect
    component: MainLayout,
    // make child on redirect route for including any component that gonna have DefaultLayout as
    // a parent layout
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home,
      },
      {
        path: "/explore",
        name: "Explore",
        component: Explore,
      },
      {
        path: "/about",
        name: "About",
        component: About,
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/login",
    name: "Auth",
    component: AuthLayout,
    children: [
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
      {
        path: "/register",
        name: "Register",
        component: Register,
      },
    ],
  },
  {
    path: "/dashboard",
    redirect: "/dashboard_index",
    name: "Dashboard",
    component: DashboardLayout,
    // require auth meta for perventing unauthorized user using the view
    meta: { requireAuth: true },
    children: [
      {
        path: "/dashboard_index",
        name: "Dashboard_index",
        component: Dashboard_index,
      },
      {
        path: "/dashboard_profile",
        name: "Dashboard_profile",
        component: Dashboard_profile,
      },
      {
        path: "/dashboard_service",
        name: "Dashboard_service",
        component: Dashboard_service,
      },
      {
        path: "/dashboard_orders",
        name: "Dashboard_orders",
        component: Dashboard_orders,
      },
    ],
  },
  //   {
  //     path: "/dashboard",
  //     redirect: "/dashmain",
  //     name: "Dashboard",
  //     component: DashboardLayout,
  //     children: [
  //       {
  //         path: "/dashmain",
  //         name: "Dashboard-main",
  //         component: Dashboard_main,
  //       },
  //       {
  //         path: "/dashservice",
  //         name: "Dashboard_service",
  //         component: Dashboard_service,
  //       },
  //       {
  //         path: "/dashorders",
  //         name: "Dashboard_orders",
  //         component: Dashboard_orders,
  //       },
  //       {
  //         path: "/dashprofile",
  //         name: "Dashboard_profile",
  //         component: Dashboard_profile,
  //       },
  //     ],
  //   },
];

// define router and what inside of the router (vue latest)
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// auth require validation
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !store.state.user.token){
    next({ name: "Login" });
  } else if (store.state.user.token && (to.name === "Login" || to.name === "Register")){
    next({ name: "Dashboard" });
  } else{
    next();
  }
});

// export the router
export default router;
