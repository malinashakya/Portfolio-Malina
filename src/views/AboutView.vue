<template>
  <section class="about">
    <h2>About Me</h2>
    <p>
      Malina is a skilled web developer with a robust foundation in HTML, CSS, and JavaScript.
      Proficient in building dynamic and responsive websites, Malina also has experience with Java
      and Spring, showcasing a keen interest in backend development. With a solid grasp of React for
      frontend development, Malina is adept at creating seamless user experiences.
    </p>
    <p>
      In addition to technical skills, Malina is experienced in content writing and has a strong
      understanding of SQL for database management. Knowledgeable in SEO best practices, Malina
      ensures that websites are optimized for search engines and user visibility. Familiar with
      version control through GitHub, Malina is well-equipped to manage and collaborate on projects
      effectively.
    </p>
    <p>
      Passionate about learning and contributing to the Java ecosystem, Malina is enthusiastic about
      exploring new technologies and continuously enhancing their skill set.
    </p>
    <!-- Include the SkillIcon component here -->
    <SkillIcon />
  </section>
</template>

<style scoped>
/* Base styles for standard screens, e.g., 1336x768 */
.about {

  padding: 2rem 6rem;
  background-color: #123c69;
  line-height: 1.5;
  color: white;
}
.about h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.about p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

/* Adjust for smaller screens */
@media (max-width: 1024px) {
  .about {
    padding: 2rem 4rem;
    overflow-y: auto;

  }

  .about h2 {
    font-size: 2rem;
  }

  .about p {
    font-size: 1.1rem;
  }
}

/* Adjust for tablets and smaller screens */
@media (max-width: 768px) {
  .about {
    padding: 1.5rem;

  }

  .about h2 {
    font-size: 1.75rem;
  }

  .about p {
    font-size: 1.05rem;
  }
}

/* Adjust for mobile screens */
@media (max-width: 576px) {
  .about {
    padding: 1rem;

  }

  .about h2 {
    font-size: 1.5rem;
  }

  .about p {
    font-size: 1rem;
  }
}

/* Adjust for very large screens, e.g., 2560px and above */
@media (min-width: 2560px) {
  .about {
    padding: 2rem 8rem;
    height:100vh;

  }

  .about h2 {
    font-size: 5rem;
  }

  .about p {
    font-size: 2.5rem;
  }
}

/* Target screens around 1440px wide with a height close to 734px */
@media (min-width: 1440px) and (max-height: 734px) {
  .about {
    height: 100vh;
  }
}

@media (min-width: 1080px) {
  .about{
    height:100vh;

  }
}

</style>

<script setup lang="ts">
import SkillIcon from '@/components/SkillIcon.vue'
</script>
