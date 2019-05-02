import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import TitlesIndex from "./views/TitlesIndex.vue";
import TitlesShow from "./views/TitlesShow.vue";
import ListsShow from "./views/ListsShow.vue";
import PersonShow from "./views/PersonShow.vue";



Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/lists/:id',
      name: 'lists-show',
      component: ListsShow
    },
    {
      path: '/titles-search/:searchInput',
      name: 'titles',
      component: TitlesIndex
    },
    {
      path: '/titles/:id',
      name: 'titles-show',
      component: TitlesShow
    },
    {
      path: '/person/:id',
      name: 'person-show',
      component: PersonShow
    },

    {
      path: '/login/',
      name: 'login',
      component: Login
    },

    {
      path: '/logout/',
      name: 'logout',
      component: Logout
    },

    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
