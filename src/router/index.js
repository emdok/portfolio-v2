import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import WorkView from '@/views/WorkView.vue'
import TechView from '@/views/TechView.vue'
import ContactView from '../views/ContactView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView
    },
    {
      path: '/tech',
      name: 'tech',
      component: TechView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // if the route has a hash, scroll to it
    if (to.hash) {
      return new Promise((resolve) => {
        // wait for the out transition to complete (if necessary)
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth',
          });
        }, 300); // adjust the timeout to match your transition duration
      });
    } else if (savedPosition) {
      // if saved position is available, scroll to it
      return savedPosition;
    } else {
      // otherwise, scroll to the top
      return { left: 0, top: 0, behavior: 'smooth' };
    }
  }
})

export default router
