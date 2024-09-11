import { createRouter, createWebHistory } from 'vue-router';

// Dynamic import of views for lazy loading
const HomeView = () => import('@/views/HomeView.vue');
const AboutView = () => import('@/views/AboutView.vue');
const ProjectView = () => import('@/views/ProjectView.vue');
const ExperienceView = () => import('@/views/ExperienceView.vue');
const ContactView = () => import('@/views/ContactView.vue');
const ProjectDetails = () => import('@/views/ProjectDetailView.vue');

// Define the routes
const routes = [
  { path: '/', component: HomeView }, // Route for HomeView
  { path: '/about', component: AboutView }, // Route for AboutView
  { path: '/projects', component: ProjectView }, // Route for ProjectView
  { path: '/experience', component: ExperienceView }, // Route for ExperienceView
  { path: '/contact', component: ContactView }, // Route for ContactView
  { path: '/project/:id', component: ProjectDetails, props: true } // Route for ProjectDetails with dynamic segment
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode for cleaner URLs
  routes, // Array of route definitions
});

export default router;
