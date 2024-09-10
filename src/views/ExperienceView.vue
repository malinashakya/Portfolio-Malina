<template>
  <section class="experience">
    <h2>Work Experience</h2>
    <div class="experience-container">
      <div v-for="item in experiences" :key="item" class="experience-card">
        <img :src="item.imageSrc" alt="Company Logo" class="company-logo"/>
        <div class="experience-details">
          <h3>
            {{ item.role}}
          </h3>
          <h4>
            {{ item.organisation}}
          </h4>
          <p>
            {{ item.startDate}} - {{ item.endDate}}
          </p>
          <ul>
            <li v-for="exp in item.experiences" :key="exp">
              {{ exp}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="js">
import synergyImg from '@/assets/synergy.png'
import webpalImg from '@/assets/webpal.jpeg'
import dansonImg from '@/assets/danson.jpeg'
import infinityImg from '@/assets/infinity.png'

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
  background: #77CEFA81;
  color: #333;
}

.experience h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.experience-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.experience-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  flex: 1 1 calc(50% - 2rem);
  display: flex;
  align-items: center;
}

.company-logo {
  width: 100px;
  height: auto;
  margin-right: 1.5rem;
}

.experience-details {
  flex: 1;
}

.experience-details h3 {
  margin: 0;
  font-size: 1.5rem;
}

.experience-details h4 {
  margin: 0.5rem 0;
  font-size: 1.2rem;
}

.experience-details p {
  margin: 0.5rem 0;
}

.experience-details ul {
  padding: 0;
  list-style: none;
}

.experience-details li {
  margin: 0.5rem 0;
}
/* Responsive styles for specific screen sizes */
@media (min-width: 2560px) and (max-width: 3840px) { /* 4k-2560 screens */
  .experience {
    height: 100vh;
    padding: 2rem 8rem;
  }
  .experience-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
  .experience-details h3 {
     font-size: 2.5rem;
  }

  .experience-details h4 {
    font-size: 2.2rem;
  }

  .experience-details p {
    font-size: 2rem;
  }

  .experience-details ul {
    font-size: 1.9rem;
  }
  .company-logo {
    width: auto;
    height: auto;

  }
}

@media (min-width: 1440px) and (max-width: 2560px) { /* Laptops (1440px) */
  .experience {
    height: 100vh;
    padding: 2rem 6rem;
  }
  .experience-details h3 {
    font-size: 2rem;
  }

  .experience-details h4 {
    font-size: 1.5rem;
  }

  .experience-details p {
    font-size: 1.2rem;
  }

  .experience-details ul {
    font-size: 1.1em;
  }
  .company-logo {
    width: 100px;
    height: auto;

  }
}

@media (max-width: 768px) { /* Tablets (768px) */
  .experience {
    padding: 1.5rem;
  }

  .experience h2 {
    font-size: 2rem;
  }

  .experience-container {
    flex-direction: column;
  }

  .experience-card {
    padding: 1rem;
    margin-bottom: 1rem;
  }

  .company-logo {
    width: 60px;
  }

  .experience-details h3 {
    font-size: 1.125rem;
  }

  .experience-details h4 {
    font-size: 1.1rem;
  }

  .experience-details p {
    font-size: 1rem;
  }

  .experience-details li {
    font-size: 0.9rem;
  }
}
@media (min-width: 2560px) {
  .experience h2 {
    font-size: 4.5rem;
  }

  .company-logo {
    width: 400px;
  }

  .experience-details h3 {
    font-size: 3rem;
  }

  .experience-details h4 {
    font-size: 2.5rem;
  }

  .experience-details p {
    font-size: 2.2rem;
  }

  .experience-details li {
    font-size: 2rem;
  }
}
</style>