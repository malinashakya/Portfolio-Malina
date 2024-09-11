<template>
  <section class="home">
    <!-- Social media links section -->
    <aside class="social-links">
      <!-- Email link with FontAwesome icon -->
      <a aria-label="Email" href="mailto:malinashakya59@gmail.com">
        <font-awesome-icon icon="envelope" />
      </a>
      <!-- LinkedIn link with FontAwesome icon -->
      <a aria-label="Linkedin" href="https://www.linkedin.com/in/malina-shakya-9a0ba823b">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
      <!-- GitHub link with FontAwesome icon -->
      <a aria-label="Github" href="https://github.com/malinashakya">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
    </aside>

    <!-- Introduction section -->
    <div class="intro">
      <h4>Who is she?</h4>
      <h1>Malina Shakya</h1>
      <p>
        "A student with experience. Currently, a last year student of Bachelor of Information
        Management of Tribhuvan University. And has experience in HTML, CSS, Javascript, Java, React
        JS and Content writing. Perfect balance between technical & managerial skills stands her
        apart from the crowd."
      </p>
    </div>

    <!-- Avatar section -->
    <figure class="avatar">
      <img src="../assets/my-avatar.jpeg" />
    </figure>
  </section>

  <!-- Importing additional view components -->
  <AboutView />
  <ProjectView />
  <ExperienceView />
  <ContactView />
</template>

<style scoped>
/* Base styling for the home section */
.home {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  color: #ffffff;
  background-color: #022954;
  height: auto;
  flex-direction: column;
  text-align: center;
}

/* Styling for social media links */
.social-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: fixed;
  left: 2rem;
  top: 40%;
}

/* Social media link styles */
.social-links a {
  color: #ecf0f1;
  font-size: 3rem;
  transition: color 0.3s;
}

/* Hover effect for social media links */
.social-links a:hover {
  color: #1abc9c;
}

/* Styling for the introduction section */
.intro {
  max-width: 90%;
  margin: 0 auto;
}

.intro h4 {
  font-size: 1.2rem;
  color: #9a9b9d;
  margin-bottom: 0.5rem;
}

.intro h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.intro p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #dcdde1;
}

/* Styling for the avatar section */
.avatar {
  max-width: 80%;
  margin-top: 2rem;
}

.avatar img {
  max-width: 80%;
  border-radius: 10px;
}

/* Media queries for responsive design */

/* Screen width 768px and above (tablet and small desktop) */
@media (min-width: 768px) {
  .home {
    flex-direction: row;
    text-align: left;
    height: 100vh;
  }

  .intro {
    max-width: 50%;
    margin-left: 60px;
  }

  .intro h1 {
    font-size: 4rem;
  }

  .intro p {
    font-size: 1.1rem;
  }

  .avatar {
    max-width: 30%;
  }
}

/* Screen width 1440px and above (large desktop) */
@media (min-width: 1440px) {
  .intro p {
    font-size: 2rem;
  }

  .intro h4 {
    font-size: 2.5rem;
  }
}

/* Screen width 2560px and above (ultra-large screens) */
@media (min-width: 2560px) {
  .intro h1 {
    font-size: 6rem;
  }

  .avatar {
    width: 1000px;
  }

  .intro h2 {
    font-size: 5rem;
  }

  .intro p {
    font-size: 2.5rem;
  }

  .intro h4 {
    font-size: 3rem;
  }
}
</style>

<script lang="ts" setup>
import AboutView from '@/views/AboutView.vue'
import ProjectView from '@/views/ProjectView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import ContactView from '@/views/ContactView.vue'
</script>
