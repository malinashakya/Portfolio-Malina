<template>
  <div class="skills">
    <!-- Skill icons with labels -->
    <div class="skill-icon">
      <font-awesome-icon :icon="['fab', 'html5']" />
      <span>HTML</span>
    </div>
    <div class="skill-icon">
      <font-awesome-icon :icon="['fab', 'css3-alt']" />
      <span>CSS</span>
    </div>
    <div class="skill-icon">
      <font-awesome-icon :icon="['fab', 'square-js']" />
      <span>JS</span>
    </div>
    <div class="skill-icon">
      <font-awesome-icon :icon="['fab', 'react']" />
      <span>React</span>
    </div>
    <div class="skill-icon">
      <font-awesome-icon :icon="['fab', 'java']" />
      <span>Java</span>
    </div>
    <div class="skill-icon">
      <font-awesome-icon icon="database" />
      <span>SQL</span>
    </div>
    <div class="skill-icon">
      <font-awesome-icon icon="search" />
      <span>SEO</span>
    </div>
    <div class="skill-icon">
      <font-awesome-icon :icon="['fas', 'leaf']" />
      <span>Spring</span>
    </div>
  </div>
</template>

<style scoped>
.skills {
  margin-top: 3rem; /* Space above the skills section */
  display: flex;
  flex-wrap: wrap; /* Wraps items onto multiple lines */
  gap: 1rem; /* Space between skill icons */
  font-size: 2rem; /* Font size for the skill labels */
  overflow: hidden; /* Hide overflowing content */
  position: relative;
  width: 100%; /* Full width of the container */
}

.skill-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: moveRightToLeft 10s linear infinite; /* Animation for scrolling effect */
}

.skill-icon span {
  margin-top: 0.5rem; /* Space between icon and label */
  font-size: 0.9rem; /* Font size for the labels */
}

.skill-icon .fa-icon {
  font-size: 18rem; /* Font size for the icons */
}

@keyframes moveRightToLeft {
  0% {
    transform: translateX(100%); /* Start position of the animation */
  }
  100% {
    transform: translateX(-100%); /* End position of the animation */
  }
}

/* Responsive styles for medium screens and above */
@media (min-width: 768px) {
  .skills {
    margin-top: 100px;
    gap: 5rem;
    font-size: 5rem;
  }

  .skill-icon {
    animation: moveRightToLeft 30s linear infinite; /* Slower animation for larger screens */
  }

  .skill-icon span {
    font-size: 1rem;
  }

  .skill-icon .fa-icon {
    font-size: 20rem;
  }
}

/* Responsive styles for tablets and small screens */
@media (min-width: 768px) {
  .skills {
    margin-top: 4rem;
    gap: 2rem;
    font-size: 2rem;
  }

  .skill-icon {
    animation: moveRightToLeft 20s linear infinite; /* Adjusted animation duration */
  }

  .skill-icon span {
    font-size: 1rem;
  }

  .skill-icon .fa-icon {
    font-size: 10rem;
  }
}

/* Responsive styles for large screens and desktops */
@media (min-width: 1440px) {
  .skills {
    margin-top: 5rem;
    gap: 5rem;
    font-size: 4rem;
  }

  .skill-icon {
    animation: moveRightToLeft 25s linear infinite; /* Adjusted animation duration */
  }
}

/* Responsive styles for very large screens */
@media (min-width: 2560px) {
  .skills {
    margin-top: 6rem;
    gap: 4rem;
    font-size: 5rem;
  }

  .skill-icon {
    animation: moveRightToLeft 30s linear infinite; /* Adjusted animation duration */
  }

  .skill-icon span {
    font-size: 1.5rem;
  }

  .skill-icon .fa-icon {
    font-size: 20rem;
  }
}

/* Styles for very small screens */
@media (max-width: 375px) {
  .skill-icon .fa-icon {
    font-size: 1px; /* Minimized icon size for very small screens */
  }

  .skill-icon span {
    font-size: 0.5rem; /* Adjusted label size to fit the small icon size */
  }
}
</style>
