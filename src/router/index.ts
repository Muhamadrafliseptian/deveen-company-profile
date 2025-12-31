import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Services from '@/pages/Services.vue'
import Portfolio from '@/pages/Portfolio.vue'
import Contact from '@/pages/Contact.vue'
import NotFound from '@/pages/NotFound.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/services', component: Services },
    { path: '/portfolio', component: Portfolio },
    { path: '/contact', component: Contact },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ]
})
