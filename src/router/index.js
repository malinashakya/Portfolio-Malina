import { createRouter, createWebHistory } from 'vue-router';

// Dynamic import of views
const HomeView = () => import('@/views/HomeView.vue');
const AboutView = () => import('@/views/AboutView.vue');
const ProjectView = () => import('@/views/ProjectView.vue');
const ExperienceView = () => import('@/views/ExperienceView.vue');
const ContactView = () => import('@/views/ContactView.vue');
const ProjectDetails = () => import('@/views/ProjectDetailView.vue');


const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/projects', component: ProjectView },
  { path: '/experience', component: ExperienceView },
  { path: '/contact', component: ContactView },
  { path: '/project/:id',component: ProjectDetails, props: true}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
