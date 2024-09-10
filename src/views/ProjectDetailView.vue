<template>
  <div v-if="project" class="project-detail">
    <h1>{{ project.title }}</h1>
    <img :alt="project.title" :src="project.image" />
    <p>{{ project.description }}</p>
    <a :href="project.link" class="view-project-link" target="_blank">View Project</a>
  </div>
  <div v-else>
    <p>Project not found.</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// Import images
import LMSImg from '../assets/LMS.webp'
import BMSImg from '../assets/BMS.webp'
import LibraryImg from '../assets/Library.webp'
import BlackJackImg from '../assets/blackjack.webp'
import EcommerceImg from '../assets/ecommerce.webp'
import WeatherImg from '../assets/weather.webp'

export default {
  setup() {
    const route = useRoute()
    const projectId = parseInt(route.params.id, 10)
    // string to decimal i.e. base 10

    const projects = [
      {
        id: 1,
        title: 'Leave Management System',
        description: `
                    The Leave Management System (LMS) is a smart tool designed to make handling employee leave requests easy and efficient. With this system, employees can apply for up to 15 days of sick leave, and they need to submit their requests at least one day ahead of time. This helps keep everything organized and avoids last-minute disruptions.
                    The LMS simplifies the leave process by automating approvals and tracking requests. This means less paperwork and fewer mistakes for HR staff, making their job easier. Managers can quickly review and approve leave requests, while employees can see the status of their requests in real time.
                    One of the biggest benefits of the LMS is its ability to help with planning. By requiring advance notice and providing detailed reports, the system helps organizations manage their staff levels better. This ensures that operations continue smoothly even when employees are away.
                    Overall, the Leave Management System streamlines the leave process, making it more efficient for everyone involved. It’s a win-win for both organizations and employees, improving the way leave is managed and enhancing overall workplace satisfaction.
    `,
        link: 'https://github.com/malinashakya/LMS-frontend',
        image: LMSImg
      },
      {
        id: 2,
        title: 'Bank Management System',
        description: `The Bank Management System is a user-friendly tool designed to make banking transactions easy for everyone. For admins, it handles all the important tasks like managing deposits, withdrawals, and transfers. They can keep track of all account activities with ease.
                      Customers benefit from the system too. They can easily transfer money between their savings accounts, making it convenient to manage their finances. Whether you have a fixed account or a savings account, this system supports both types, so you can use it for all your banking needs.
                      Overall, the Bank Management System simplifies everyday banking tasks for both admins and customers. It ensures smooth and efficient handling of transactions, helping everyone manage their money with confidence and ease.`,
        link: 'https://github.com/malinashakya/Banking-Management-System',
        image: BMSImg
      },
      {
        id: 3,
        title: 'Library Management System',
        description: `The Library Management System is an easy-to-use tool for librarians to manage book transactions. This console-based system keeps track of books that are borrowed and returned, ensuring everything is organized. Librarians can also add new books to the system effortlessly.
                  Designed specifically for admins, this system streamlines library operations by automating these tasks. It helps maintain accurate records and makes managing the library's collection much simpler. With this system, librarians can ensure that the library runs smoothly and efficiently.`,
        link: 'https://github.com/malinashakya/Library-Management-System',
        image: LibraryImg
      },
      {
        id: 4,
        title: 'Black Jack Multiplayer Game',
        description: `The Black Jack Multiplayer Game is a fun, console-based game where players compete against each other, each starting with 100 points. The goal is to get a card total of less than 21 to win. It’s a game of chance, offering excitement and strategic play as players try to beat their opponents and keep their points high.`,
        link: 'https://github.com/malinashakya/BlackJackResumeMultiplayerGame',
        image: BlackJackImg
      },
      {
        id: 5,
        title: 'E-commerce',
        description: `The e-commerce platform is a user-friendly online clothing store designed for men, women, and children. It boasts a wide variety of fashion items, from trendy outfits to everyday essentials. Customers can easily browse through categories, filter by size or style, and find the perfect clothes for every member of the family. With its easy-to-navigate interface and secure shopping features, this platform makes finding and purchasing the latest fashion both simple and enjoyable. Whether you're shopping for yourself or loved ones, this store offers everything you need to stay stylish and comfortable.`,
        link: 'https://malinashakya.github.io/',
        image: EcommerceImg
      },
      {
        id: 6,
        title: 'Weather App',
        description: `The Weather App is a comprehensive website that provides users with up-to-date weather information for various locations. With this app, users can easily check current weather conditions, including temperature, humidity, and wind speed, for any city or region. It also offers detailed forecasts for the coming days, allowing users to plan their activities with confidence. Whether you're planning a trip, deciding what to wear, or simply curious about the weather, the Weather App delivers accurate and timely updates to help you stay informed and make better decisions based on the latest weather data. Its intuitive design ensures that weather information is accessible and easy to understand for everyone.`,
        link: 'https://malinashakya.github.io/weather-app/',
        image: WeatherImg
      }
    ]

    const project = ref(null)
    //reactive reference that starts with a value of null
    onMounted(() => {
      //onMounted=first mounted (i.e., added to the DOM).
      project.value = projects.find((p) => p.id === projectId)
      //searches through the projects array to find the project with the ID that matches projectId
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
