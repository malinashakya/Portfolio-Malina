<template>
  <section class="projects">
    <h2>My Projects</h2>
    <div class="project-container">
      <Card
        v-for="(project, index) in projects"
        :key="index"
        style="width: 25rem; overflow: hidden"
        class="project-card"
        @click="navigateToProject(project.id)"
      >
        <template #header>
          <img :src="project.image" :alt="project.title" />
        </template>
        <template #title>
          <h3 style="text-align: center">{{ project.title }}</h3>
        </template>
        <template #content>
          <p class="m-0" style="text-align: center">{{ project.description }}</p>
        </template>
        <template #footer>
          <a :href="project.link" target="_blank" class="view-project-link">
            <p style="text-align: center">View Project</p>
          </a>
        </template>
      </Card>
    </div>
    <SkillIcon />
  </section>
</template>

<script>
import SkillIcon from '@/components/SkillIcon.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Card from 'primevue/card';

import LMSImg from '../assets/LMS.webp';
import BMSImg from '../assets/BMS.webp';
import LibraryImg from '../assets/Library.webp';
import BlackJackImg from '../assets/blackjack.webp';
import EcommerceImg from '../assets/ecommerce.webp';
import WeatherImg from '../assets/weather.webp';

export default {
  components: {
    SkillIcon,
    Card
  },
  setup() {
    const router = useRouter();

    const navigateToProject = (id) => {
      router.push({ path: `/project/${id}` });
      // redirects you to the detailed view of that project by updating the URL and loading the corresponding component.
    };

    const projects = ref([
      {
        id: 1,
        title: 'Leave Management System',
        description: 'The Leave Management System (backend) efficiently handles and tracks employee leave requests. Employees can apply for up to 15 days of sick leave, with requests required to be submitted at least one day in advance. This system streamlines the leave process management.',
        link: 'https://github.com/malinashakya/LMS-frontend',
        image: LMSImg
      },
      {
        id: 2,
        title: 'Bank Management System',
        description: 'The Bank Management System facilitates transactions for both admins and customers. Admins can handle deposits, withdrawals, and transfers, while customers can transfer funds between savings accounts. It supports fixed and savings account types.',
        link: 'https://github.com/malinashakya/Banking-Management-System',
        image: BMSImg
      },
      {
        id: 3,
        title: 'Library Management System',
        description: 'The Library Management System is a console-based tool that allows librarians to manage book transactions. It records borrowed and returned books and supports adding new books to the system. It is admin-based system.',
        link: 'https://github.com/malinashakya/Library-Management-System',
        image: LibraryImg
      },
      {
        id: 4,
        title: 'Black Jack Multiplayer Game',
        description: 'The Black Jack Multiplayer Game is a console-based game where multiple players compete with each starting with 100 points. It’s a game of chance where players aim to get a card sum of less than 21 to win.',
        link: 'https://github.com/malinashakya/BlackJackResumeMultiplayerGame',
        image: BlackJackImg
      },
      {
        id: 5,
        title: 'E-commerce',
          description: 'The e-commerce platform is a web-based clothing store catering to men, women, and children. It offers a wide range of apparel, making it easy for customers to shop for fashion items across all age groups.',
        link: 'https://malinashakya.github.io/',
        image: EcommerceImg
      },
      {
        id: 6,
        title: 'Weather App',
        description: 'The Weather App is a web-based system that allows users to check weather conditions for various locations. It provides current weather updates and forecasts, helping users plan their activities based on real-time.',
        link: 'https://malinashakya.github.io/weather-app/',
        image: WeatherImg
      }
    ]);
    return { projects, navigateToProject };
  }
};
</script>
<style scoped>
.projects{
  padding: 2rem;
  background: #4276ae;
  color:white;

}
.projects h2{
  font-size:2.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.project-container{
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  cursor:pointer;
}

.project-card{
  background: #1a2a42;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgb(0,0,0,0.2);
  color: #ecf0f1;
  transition: transform 0.3s;

 }

.project-card:hover{
  transform:translateY(-10px);
}

.view-project-link{
  color:#1abc9c;
  text-decoration: none !important;
  font-weight:bold;
}

.view-project-link:hover{
  color:#16a085;
}
.project-card img{
  width:100%;
  height:200px;
  object-fit: cover;
}

/* Responsive Styles */

/* For 4K and large screens */
@media (min-width: 2560px) {

  .projects h2 {
    font-size: 3rem;
  }

  .project-card {
    flex: 1 1 calc(25% - 2rem);
  }

  .project-card img {
    height: 250px;
  }
}

/* For desktop and large laptops */
@media (min-width: 1440px) {

  .project-card {
    flex: 1 1 calc(33.333% - 2rem);
  }

  .project-card img {
    height: 220px;
  }
}

/* For tablets and small laptops */
@media (min-width: 768px) {

  .project-card {
    flex: 1 1 calc(33.3333% - 2rem);
  }

  .project-card img {
    height: 200px;
  }
}

/* For mobile and smaller screens */
@media (max-width: 768px) {
  .projects {
    padding: 1rem;
  }

  .projects h2 {
    font-size: 2rem;
  }

  .project-card {
    flex: 1 1 100%;
    max-width: 500px;
  }

  .project-card img {
    height: 200px;
  }
}
@media (min-width: 2560px) {
  .projects h2 {
    font-size: 5rem;
  }

  .project-card {
    flex: 1 1 calc(33.3333% - 2rem);
  }

  .project-card img {
    height: 250px;
  }

  .project-card h3 {
    font-size: 2.5rem;
  }

  .project-card p {
    font-size: 2rem;
  }
}

@media(min-width: 1440px) {
  .project-card h2 {
    font-size: 2.5rem;
  }
  .project-card h3 {
    font-size: 2.1rem;
  }

  .project-card p {
    font-size: 1.8rem;
  }
}
</style>