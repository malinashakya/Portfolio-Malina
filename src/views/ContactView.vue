<!-- src/views/ContactView.vue -->
<template>
  <section class="contact">
    <div class="greet">
      <h2>Contact Me</h2>
      <h3>Let's Greet and Meet.</h3>
    </div>

    <!-- Contact Form Section -->
    <form class="contact-form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="formData.name" placeholder="Your Name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="formData.email" placeholder="Your Email" required />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          id="message"
          v-model="formData.message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>

    <!--    Social Media Links-->
    <ul>
      <li>
        <a href="https://github.com/malinashakya" aria-label="Github">
          <font-awesome-icon :icon="['fab', 'github']" size="3x" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/malina-shakya-9a0ba823b" aria-label="Linkedin">
          <font-awesome-icon :icon="['fab', 'linkedin']" size="3x" />
        </a>
      </li>
      <li>
        <a href="mailto:malinashakya59@gmail.com" aria-label="Email">
          <font-awesome-icon icon="envelope" size="3x" />
        </a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.contact {
  padding: 2rem;
  background: #405690;
  color: white;
  text-align: center;
}

.contact h2 {
  margin-top: 0;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.contact ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 5rem;
  justify-content: center;
}

.contact a {
  text-decoration: none;
  color: #ecf0f1;
  font-size: 1.2rem;
  font-weight: bold;
}

.contact a:hover {
  color: #1abc9c;
}

.greet {
  margin-bottom: 20px;
  line-height: 1.5;
}

/* Contact Form Styles */
.contact-form {
  max-width: 500px;
  margin: 2rem auto 2rem;
  padding: 1.5rem;
  background: #031b34;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.form-group {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #ecf0f1;
}

.form-group input,
.form-group textarea {
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: 2px solid #1abc9c;
}

button {
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: #1abc9c;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #16a085;
}
</style>
<script setup lang="ts">
import { reactive, toRaw } from 'vue'

// Create a reactive object to hold the form data
const formData = reactive({
  name: '',
  email: '',
  message: ''
})

// Handle form submission
const handleSubmit = () => {
  console.log('Form Data:', toRaw(formData))
  alert(`Thank you, ${formData.name}! Your message has been sent.`)

  // Reset form fields after submission
  formData.name = ''
  formData.email = ''
  formData.message = ''
}
</script>
