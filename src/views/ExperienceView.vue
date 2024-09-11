<template>
  <section class="experience">
    <!-- Section heading for work experience -->
    <h2>Work Experience</h2>
    <div class="experience-container">
      <!-- Loop through experiences and render each one as a Card component -->
      <Card v-for="item in experiences" :key="item.organisation" class="experience-card">
        <!-- Company logo -->
        <img :src="item.imageSrc" alt="Company Logo" class="company-logo" />
        <div class="experience-details">
          <!-- Role and organization details -->
          <h3>{{ item.role }}</h3>
          <h4>{{ item.organisation }}</h4>
          <p>{{ item.startDate }} - {{ item.endDate }}</p>
          <!-- List of experiences -->
          <ul>
            <li v-for="exp in item.experiences" :key="exp">{{ exp }}</li>
          </ul>
        </div>
      </Card>
    </div>
  </section>
</template>

<script lang="js" setup>
import synergyImg from '@/assets/synergy.png'
import webpalImg from '@/assets/webpal.jpeg'
import dansonImg from '@/assets/danson.jpeg'
import infinityImg from '@/assets/infinity.png'

// Array of experience objects
const experiences = [
  {
    role: 'Java Intern',
    organisation: 'Synergy Tech Software',
    startDate: 'July, 2023',
    endDate: 'Current',
    experiences: [
      'Developed and maintained Java applications for internal use.',
      'Collaborated with senior developers to troubleshoot and optimize code.'
    ],
    imageSrc: synergyImg
  },
  {
    role: 'Web Intern',
    organisation: 'Webpal Business Ltd.',
    startDate: 'Oct, 2023',
    endDate: 'Jun, 2024',
    experiences: ['Worked on React projects.', 'Helped create UI components and React framework.'],
    imageSrc: webpalImg
  },
  {
    role: 'Prompt Engineering Intern',
    organisation: 'Danson Solutions',
    startDate: 'June, 2023',
    endDate: 'August, 2023',
    experiences: [
      'Researched various AI tools and platforms for creating interactive games.',
      'Designed prompts for image, sound effects, and YouTube videos.'
    ],
    imageSrc: dansonImg
  },
  {
    role: 'E-commerce Intern',
    organisation: 'Infinity Infosys',
    startDate: 'Feb, 2023',
    endDate: 'Apr, 2023',
    experiences: [
      'Explored e-commerce sites like Daraz, Gyapu, Bizbazar, etc.',
      'Worked as an e-commerce account handler.'
    ],
    imageSrc: infinityImg
  }
]
</script>

<style scoped>
.experience {
  padding: 2rem;
  background: #5192c3; /* Background color for the experience section */
  color: #333; /* Text color */
}

.experience h2 {
  font-size: 2.5rem; /* Font size for the section heading */
  margin-bottom: 1rem;
}

.experience-container {
  display: flex; /* Flexbox layout for the container */
  flex-wrap: wrap; /* Allow items to wrap to the next line */
  gap: 2rem; /* Space between items */
}

.experience-card {
  background: #fff; /* Background color for each card */
  border-radius: 8px; /* Rounded corners for the card */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow effect */
  padding: 1.5rem; /* Padding inside the card */
  flex: 1 1 calc(50% - 2rem); /* Flex properties to adjust the card size */
  display: flex; /* Flexbox layout inside the card */
  align-items: center; /* Center items vertically */
}

.company-logo {
  width: 100px; /* Width of the company logo */
  height: auto; /* Maintain aspect ratio */
  margin-right: 1.5rem; /* Space between the logo and details */
}

.experience-details {
  flex: 1; /* Flex property to allow details to take remaining space */
}

.experience-details h3 {
  margin: 0;
  font-size: 1.5rem; /* Font size for the role */
}

.experience-details h4 {
  margin: 0.5rem 0; /* Margin for the organization */
  font-size: 1.2rem; /* Font size for the organization */
}

.experience-details p {
  margin: 0.5rem 0; /* Margin for the date range */
}

.experience-details ul {
  padding: 0;
  list-style: none; /* Remove default list styling */
}

.experience-details li {
  margin: 0.5rem 0; /* Margin for each list item */
}

/* Responsive styles for specific screen sizes */
@media (min-width: 2560px) and (max-width: 3840px) {
  /* For large screens (4K+) */
  .experience {
    height: 100vh; /* Full viewport height */
    padding: 2rem 8rem; /* Increased padding */
  }

  .experience-details h3 {
    font-size: 2.5rem; /* Larger font size for role */
  }

  .experience-details h4 {
    font-size: 2.2rem; /* Larger font size for organization */
  }

  .experience-details p {
    font-size: 2rem; /* Larger font size for date range */
  }

  .experience-details ul {
    font-size: 1.9rem; /* Larger font size for list items */
  }

  .company-logo {
    width: auto; /* Adjust logo width */
    height: auto; /* Adjust logo height */
  }
}

@media (min-width: 1440px) and (max-width: 2560px) {
  /* For large desktops */
  .experience {
    height: 100vh; /* Full viewport height */
    padding: 2rem 6rem; /* Padding adjustment */
  }

  .experience-details h3 {
    font-size: 2rem; /* Font size for role */
  }

  .experience-details h4 {
    font-size: 1.5rem; /* Font size for organization */
  }

  .experience-details p {
    font-size: 1.2rem; /* Font size for date range */
  }

  .experience-details ul {
    font-size: 1.1em; /* Font size for list items */
  }

  .company-logo {
    width: 100px; /* Logo width for large desktops */
  }
}

@media (max-width: 768px) {
  /* For tablets and mobile devices */
  .experience {
    padding: 1.5rem; /* Padding adjustment */
  }

  .experience h2 {
    font-size: 2rem; /* Font size for section heading */
  }

  .experience-container {
    flex-direction: column; /* Stack cards vertically */
  }

  .experience-card {
    padding: 1rem; /* Padding inside the card */
    margin-bottom: 1rem; /* Space below each card */
  }

  .company-logo {
    width: 60px; /* Smaller logo width */
  }

  .experience-details h3 {
    font-size: 1.125rem; /* Font size for role */
  }

  .experience-details h4 {
    font-size: 1.1rem; /* Font size for organization */
  }

  .experience-details p {
    font-size: 1rem; /* Font size for date range */
  }

  .experience-details li {
    font-size: 0.9rem; /* Font size for list items */
  }
}

@media (min-width: 2560px) {
  /* Additional styles for very large screens */
  .experience h2 {
    font-size: 4.5rem; /* Font size for section heading */
  }

  .company-logo {
    width: 400px; /* Large logo width */
  }

  .experience-details h3 {
    font-size: 3rem; /* Larger font size for role */
  }

  .experience-details h4 {
    font-size: 2.5rem; /* Larger font size for organization */
  }

  .experience-details p {
    font-size: 2.2rem; /* Larger font size for date range */
  }

  .experience-details li {
    font-size: 2rem; /* Larger font size for list items */
  }
}

@media (min-width: 1024px) {
  /* For desktops and larger screens */
  .experience {
    height: 100vh; /* Full viewport height */
  }
}

@media (min-width: 1080px) {
  /* For desktops and larger screens */
  .experience {
    height: auto; /* Height adjustment */
  }
}

@media (min-width: 1440px) {
  /* For larger desktops */
  .experience-details h3 {
    font-size: 2.1rem; /* Font size for role */
  }

  .experience-details h4 {
    font-size: 2rem; /* Font size for organization */
  }

  .experience-details p {
    font-size: 1.8rem; /* Font size for date range */
  }

  .experience-details li {
    font-size: 1.7rem; /* Font size for list items */
  }

  .company-logo {
    width: 150px; /* Logo width for larger desktops */
  }
}
</style>
