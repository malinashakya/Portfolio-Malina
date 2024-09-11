<!-- src/views/ContactView.vue -->
<template>
  <section class="contact">
    <!-- Greeting Section -->
    <div class="greet">
      <h2>Contact Me</h2>
      <h3>Let's Greet and Meet.</h3>
    </div>

    <!-- Contact Form Section -->
    <form class="contact-form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input id="name" v-model="formData.name" placeholder="Your Name" required type="text" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" v-model="formData.email" placeholder="Your Email" required type="email" />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          id="message"
          v-model="formData.message"
          placeholder="Your Message"
          required
          rows="5"
        ></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>

    <!-- Social Media Links -->
    <ul>
      <li>
        <a aria-label="Github" href="https://github.com/malinashakya">
          <font-awesome-icon :icon="['fab', 'github']" size="3x" />
        </a>
      </li>
      <li>
        <a aria-label="Linkedin" href="https://www.linkedin.com/in/malina-shakya-9a0ba823b">
          <font-awesome-icon :icon="['fab', 'linkedin']" size="3x" />
        </a>
      </li>
      <li>
        <a aria-label="Email" href="mailto:malinashakya59@gmail.com">
          <font-awesome-icon icon="envelope" size="3x" />
        </a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.contact {
  padding: 2rem; /* Padding for the contact section */
  background: #4861a1; /* Background color for the contact section */
  color: white; /* Text color */
  text-align: center; /* Center align text */
}

.contact h2 {
  margin-top: 0;
  font-size: 2.5rem; /* Font size for the main heading */
  margin-bottom: 1rem; /* Margin below the heading */
}

.contact ul {
  list-style: none; /* Remove default list styling */
  padding: 0;
  display: flex; /* Flexbox layout for social media links */
  gap: 5rem; /* Space between social media icons */
  justify-content: center; /* Center align icons */
}

.contact a {
  text-decoration: none; /* Remove underline from links */
  color: #ecf0f1; /* Link color */
  font-size: 1.2rem; /* Font size for links */
  font-weight: bold; /* Bold text */
}

.contact a:hover {
  color: #1abc9c; /* Color change on hover */
}

.greet {
  margin-bottom: 20px; /* Margin below the greeting section */
  line-height: 1.5; /* Line height for better readability */
}

/* Contact Form Styles */
.contact-form {
  max-width: 500px; /* Maximum width of the form */
  margin: 2rem auto; /* Center align the form and add margin */
  padding: 1.5rem; /* Padding inside the form */
  background: #031b34; /* Background color for the form */
  border-radius: 8px; /* Rounded corners for the form */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow effect */
}

.form-group {
  margin-bottom: 1rem; /* Margin below each form group */
  display: flex; /* Flexbox layout for form groups */
  flex-direction: column; /* Stack label and input vertically */
  text-align: left; /* Left align text */
}

.form-group label {
  margin-bottom: 0.5rem; /* Margin below the label */
  font-weight: bold; /* Bold text for labels */
  color: #ecf0f1; /* Label text color */
}

.form-group input,
.form-group textarea {
  padding: 0.5rem; /* Padding inside input and textarea */
  border: none; /* Remove default border */
  border-radius: 4px; /* Rounded corners for input and textarea */
  font-size: 1rem; /* Font size for input and textarea */
  color: #333; /* Text color */
}

.form-group input:focus,
.form-group textarea:focus {
  outline: 2px solid #1abc9c; /* Outline color on focus */
}

button {
  padding: 0.7rem 1.5rem; /* Padding inside the button */
  border: none; /* Remove default border */
  border-radius: 4px; /* Rounded corners for the button */
  background-color: #1abc9c; /* Button background color */
  color: white; /* Button text color */
  font-size: 1rem; /* Font size for button text */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s; /* Smooth background color transition */
}

button:hover {
  background-color: #16a085; /* Button color change on hover */
}

/* Responsive styles for very large screens */
@media (min-width: 2560px) {
  .contact h2 {
    font-size: 4.5rem; /* Larger font size for heading */
  }

  .contact h3 {
    font-size: 3rem; /* Larger font size for subheading */
  }

  .form-group label {
    font-size: 2rem; /* Larger font size for labels */
  }

  .form-group input,
  .form-group textarea {
    font-size: 2rem; /* Larger font size for input and textarea */
    line-height: 2; /* Increase line height */
  }

  .contact-form {
    max-width: 800px; /* Larger max-width for the form */
  }

  button {
    font-size: 30px; /* Larger font size for button text */
  }
}

@media (min-width: 1380px) {
  .contact {
    height: 100vh; /* Full viewport height */
  }
}
</style>

<script lang="ts" setup>
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
