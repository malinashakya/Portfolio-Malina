<template>
  <div v-if="project" class="project-detail">
    <!-- Display project details if the project is found -->
    <h1>{{ project.title }}</h1>
    <img :alt="project.title" :src="project.image" />
    <p>{{ project.description }}</p>
    <a :href="project.link" class="view-project-link" target="_blank">View Project</a>
  </div>
  <div v-else>
    <!-- Display a message if no project is found -->
    <p>Project not found.</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// Import images for the projects
import LMSImg from '../assets/LMS.webp'
import BMSImg from '../assets/BMS.webp'
import LibraryImg from '../assets/Library.webp'
import BlackJackImg from '../assets/blackjack.webp'
import EcommerceImg from '../assets/ecommerce.webp'
import WeatherImg from '../assets/weather.webp'

export default {
  setup() {
    const route = useRoute() // Get the current route object
    const projectId = parseInt(route.params.id, 10) // Get and parse the project ID from the route parameters

    // Define an array of projects with their details
    const projects = [
      {
        id: 1,
        title: 'Leave Management System',
        description: `
                    The Leave Management System (LMS) is a smart tool designed to make handling employee leave requests easy and efficient...
                    Overall, the Leave Management System streamlines the leave process, making it more efficient for everyone involved. It’s a win-win for both organizations and employees, improving the way leave is managed and enhancing overall workplace satisfaction.
    `,
        link: 'https://github.com/malinashakya/LMS-frontend',
        image: LMSImg
      },
      {
        id: 2,
        title: 'Bank Management System',
        description: `The Bank Management System is a user-friendly tool designed to make banking transactions easy for everyone...
                      Overall, the Bank Management System simplifies everyday banking tasks for both admins and customers. It ensures smooth and efficient handling of transactions, helping everyone manage their money with confidence and ease.`,
        link: 'https://github.com/malinashakya/Banking-Management-System',
        image: BMSImg
      },
      {
        id: 3,
        title: 'Library Management System',
        description: `The Library Management System is an easy-to-use tool for librarians to manage book transactions...
                  Designed specifically for admins, this system streamlines library operations by automating these tasks. It helps maintain accurate records and makes managing the library's collection much simpler. With this system, librarians can ensure that the library runs smoothly and efficiently.`,
        link: 'https://github.com/malinashakya/Library-Management-System',
        image: LibraryImg
      },
      {
        id: 4,
        title: 'Black Jack Multiplayer Game',
        description: `The Black Jack Multiplayer Game is a fun, console-based game where players compete against each other...
        It’s a game of chance, offering excitement and strategic play as players try to beat their opponents and keep their points high.`,
        link: 'https://github.com/malinashakya/BlackJackResumeMultiplayerGame',
        image: BlackJackImg
      },
      {
        id: 5,
        title: 'E-commerce',
        description: `The e-commerce platform is a user-friendly online clothing store designed for men, women, and children...
        Whether you're shopping for yourself or loved ones, this store offers everything you need to stay stylish and comfortable.`,
        link: 'https://malinashakya.github.io/',
        image: EcommerceImg
      },
      {
        id: 6,
        title: 'Weather App',
        description: `The Weather App is a comprehensive website that provides users with up-to-date weather information...
        Whether you're planning a trip, deciding what to wear, or simply curious about the weather, the Weather App delivers accurate and timely updates to help you stay informed and make better decisions based on the latest weather data.`,
        link: 'https://malinashakya.github.io/weather-app/',
        image: WeatherImg
      }
    ]

    const project = ref(null) // Reactive reference to hold the current project

    onMounted(() => {
      // Find the project that matches the ID from the route parameters
      const foundProject = projects.find((p) => p.id === projectId)
      if (foundProject) {
        project.value = foundProject // Set the project if found
      } else {
        console.error('Project not found:', projectId) // Log an error if the project is not found
        // Optionally, you can set a flag or redirect if needed
      }
    })

    return {
      project
    }
  }
}
</script>

<style scoped>
.project-detail {
  padding: 1rem;
  background: none;
  color: #333;
  max-width: 100%;
  margin: auto;
}

.project-detail img {
  width: 100%;
  height: auto;
  max-width: 100%;
  border-radius: 8px;
}

.project-detail h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.project-detail p {
  font-size: 1rem;
  line-height: 1.6;
}

.view-project-link {
  display: inline-block;
  margin-top: 1rem;
  color: #1abc9c;
  text-decoration: none;
  font-weight: bold;
}

.view-project-link:hover {
  color: #16a085;
}

/* Responsive styles */
@media (min-width: 600px) {
  .project-detail {
    padding: 2rem;
    max-width: 80%;
  }
}

@media (min-width: 900px) {
  .project-detail {
    max-width: 60%;
  }

  .project-detail h1 {
    font-size: 2.5rem;
  }

  .project-detail p {
    font-size: 1.2rem;
  }
}
</style>
