<template>
  <section class="about">
    <h2>About Me</h2>
<p>
  Malina Shakya is an Information Management graduate from Shanker Dev Campus
  with a strong interest in software development, particularly backend
  development using Java. She has practical experience with technologies such
  as Quarkus, the Spring Framework, Hibernate, and JavaServer Faces (JSF), as
  well as frontend frameworks including Vue.js, Nuxt.js, and React.js. She
  enjoys building reliable, efficient, and user-friendly applications that
  address real-world business needs.
</p>

<p>
  Malina has been actively working on an inventory management system with
  integrated restaurant management features, using Quarkus for backend
  development and Vue.js for the frontend. The system includes dynamic QR code
  functionality, financial reports, stock reports, and other reporting
  features to support business operations. Her responsibilities include
  developing new features, enhancing existing functionality, writing and
  maintaining test cases, optimizing code quality and performance, and
  identifying and fixing bugs to improve application reliability and
  maintainability.
</p>

<p>
  Committed to continuous learning, Malina has strengthened her programming
  knowledge through online courses and certifications in Java, data
  structures, backend development, and web technologies. She has also explored
  PHP, JavaScript, HTML, and CSS through platforms such as Coursera, SoloLearn,
  and OpenWeaver. Her technical skills are complemented by knowledge of SQL
  database management, Git, and GitHub for version control and collaboration.
</p>

<p>
  Beyond development, Malina has knowledge of SEO and content writing, along
  with experience in SQL, Git, and GitHub. Passionate about learning new
  technologies and solving real-world problems, she strives to build efficient
  software solutions and grow professionally as a developer.
</p>


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

/* Adjustments for screens up to 1024px wide (e.g., laptops and smaller desktops) */
@media (max-width: 1024px) {
  .about {
    padding: 2rem 4rem;
    overflow-y: auto;
    height: 100vh;
  }

  .about h2 {
    font-size: 2rem;
  }

  .about p {
    font-size: 1.1rem;
  }
}

/* Adjustments for screens up to 768px wide (e.g., tablets and smaller devices) */
@media (max-width: 768px) {
  .about {
    padding: 1.5rem;
    height: auto;
  }

  .about h2 {
    font-size: 1.75rem;
  }

  .about p {
    font-size: 1.05rem;
  }
}

/* Adjustments for screens up to 576px wide (e.g., mobile devices) */
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

/* Adjustments for very large screens, e.g., 2560px and above (e.g., ultra-large monitors) */
@media (min-width: 2560px) {
  .about {
    padding: 2rem 8rem;
    height: 100vh;
  }

  .about h2 {
    font-size: 5rem;
  }

  .about p {
    font-size: 4rem;
  }
}

/* Adjustments for screens around 1440px wide with a height close to 734px */
@media (min-width: 1440px) and (max-height: 734px) {
  .about {
    height: 100vh;
  }
}

/* Adjustments for screens 1080px wide and above */
@media (min-width: 1080px) {
  .about {
    height: 100vh;
  }

  .about h2 {
    font-size: 2.5rem;
  }

  .about p {
    font-size: 1.2rem;
  }
}

/* Further adjustments for screens 1440px wide and above */
@media (min-width: 1440px) {
  .about h2 {
    font-size: 3rem;
  }

  .about p {
    font-size: 2rem;
  }
}
</style>

<script lang="ts" setup></script>
