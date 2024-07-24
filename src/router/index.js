import { createRouter, createWebHistory } from 'vue-router'
import AdoptPetPage from '../views/AdoptPetPage.vue';
import PetPage from '../views/PetPage.vue';
import HomePage from '../views/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/pet/:id',
      name: 'pet',
      component: PetPage
    },
    {
      path: '/adopt',
      name: 'adopt',
      component: AdoptPetPage
    },
  ]
})

export default router
