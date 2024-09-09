<template>
  <section class="home">
    <aside class="social-links">
      <a href="mailto:malinashakya59@gmail.com" aria-label="Email">
        <font-awesome-icon icon="envelope" />
      </a>
      <a href="https://www.linkedin.com/in/malina-shakya-9a0ba823b" aria-label="Linkedin">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
      <a href="https://github.com/malinashakya" aria-label="Github">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
    </aside>

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

    <figure class="avatar">
      <img src="../assets/my-avatar.jpeg" />
    </figure>
  </section>
  <AboutView />
  <ProjectView />
  <ExperienceView />
  <ContactView />
</template>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: #ffffff;
  background-color: #022954;
  text-align: center;
}

.social-links {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 2rem;
}

.social-links a {
  color: #ecf0f1;
  font-size: 1.5rem;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #1abc9c;
}

.intro {
  max-width: 90%;
  margin: 0 auto;
  padding: 1rem;
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

.avatar {
  max-width: 80%;
  margin-top: 2rem;
}

.avatar img {
  width: 100%;
  border-radius: 10px;
}

@media (min-width: 576px) {
  .social-links {
    flex-direction: column;
    position: fixed;
    left: 1rem;
    top: 40%;
  }
}

@media (min-width: 768px) {
  .home {
    flex-direction: row;
    text-align: left;
    height: 100vh;
  }

  .intro {
    max-width: 50%;
    margin-left: 60px;
    padding: 0;
  }

  .intro h1 {
    font-size: 3rem;
  }

  .intro p {
    font-size: 1.1rem;
  }

  .avatar {
    max-width: 30%;
    margin: 0;
  }
}

@media (min-width: 1024px) {
  .intro h1 {
    font-size: 4rem;
  }

  .intro p {
    font-size: 1.2rem;
  }
}
</style>
<script setup lang="ts">
import AboutView from '@/views/AboutView.vue'
import ProjectView from '@/views/ProjectView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import ContactView from '@/views/ContactView.vue'
</script>
