import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/HowWeDo',
    name: 'HowWeDo',
    component: () => import('../views/HowWeDo.vue')
  },
  {
    path: '/ForWho',
    name: 'ForWho',
    component: () => import('../views/ForWho.vue')
  },
  {
    path: '/Crew',
    name: 'Crew',
    component: () => import('../views/Crew.vue')
  },
  {
    path: '/SMMcases',
    name: 'SMMcases',
    component: () => import('../pages/SMMcases.vue')
  },
  {
    path: '/PerfomanceCases',
    name: 'PerfomanceCases',
    component: () => import('../pages/PerfomanceCases.vue')
  },
  {
    path: '/WebAppCases',
    name: 'WebAppCases',
    component: () => import('../pages/WEBAppCases.vue')
  },
  {
    path: '/BrandingCases',
    name: 'BrandingCases',
    component: () => import('../pages/BrandingCases.vue')
  },
  {
    path: '/Vacancy/:id',
    name: 'Vacancy',
    component: () => import('../pages/Vacancy.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


const DEFAULT_TITLE = 'Creatum';
router.afterEach((to, from) => {
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default router
