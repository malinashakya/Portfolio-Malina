import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import ProjectView from '@/views/ProjectView.vue'
import ExperienceView from '@/views/ExperienceView.vue'

const routes=[
  {
    path:'/', component:HomeView
  },
  {
    path:'/about',component: AboutView
  },
{
  path:'/contact', component: ContactView
},
  {
    path:'/projects', component: ProjectView
  },
  {
    path:'/experience', component:ExperienceView
  }
];
const router=createRouter({
  history:createWebHistory(),
    routes,
});

export default router;