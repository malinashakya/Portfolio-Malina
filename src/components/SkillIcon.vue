
<template>
  <div class="skills">
    <div class="skill-icon">
      <font-awesome-icon :icon="['fab', 'html5']"  />
      <span>HTML</span>
    </div>
    <div class="skill-icon">
      <font-awesome-icon :icon="['fab', 'css3-alt']"  />
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
      <font-awesome-icon :icon="['fas', 'leaf']"  />
      <span>Spring</span>
    </div>
  </div>
</template>

<style scoped>
.skills{
  margin-top:3rem;
  display:flex;
  flex-wrap:wrap;
  gap:1rem;
  font-size: 2rem;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.skill-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: moveRightToLeft 10s linear infinite;

}

.skill-icon span {
  margin-top: 0.5rem;
  font-size: 0.9rem;
}

.skill-icon .fa-icon {
  font-size: 18rem;
}
@keyframes moveRightToLeft {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
@media(min-width: 768px)
{
  .skills{
    margin-top:100px;
    display:flex;
    flex-wrap:wrap;
    gap:5rem;
    overflow: hidden;
    position: relative;
    font-size: 5rem;
  }
  .skill-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    animation: moveRightToLeft 30s linear infinite;
  }

  .skill-icon span {
    margin-top: 0.5rem;
    font-size: 1rem;
  }
  .skill-icon .fa-icon {
    font-size: 20rem;
  }
}
/* For tablets and small screens */
@media (min-width: 768px) {
  .skills {
    margin-top: 4rem;
    gap: 2rem;
    font-size: 2rem;
  }

  .skill-icon {
    animation: moveRightToLeft 20s linear infinite;
  }

  .skill-icon span {
    font-size: 1rem;
  }

  .skill-icon .fa-icon {
    font-size: 10rem;
  }
}

/* For large screens and desktops */
@media (min-width: 1440px) {
  .skills {
    margin-top: 5rem;
    gap: 5rem;
    font-size: 4rem;
  }

  .skill-icon {
    animation: moveRightToLeft 25s linear infinite;
  }
}

/* For very large screens */
@media (min-width: 2560px) {
  .skills {
    margin-top: 6rem;
    gap: 4rem;
    font-size: 5rem;
  }

  .skill-icon {
    animation: moveRightToLeft 30s linear infinite;
  }

  .skill-icon span {
    font-size: 1.5rem;
  }

  .skill-icon .fa-icon {
    font-size: 20rem;
  }
}
@media (max-width: 375px) {
  .skill-icon .fa-icon {
    font-size: 1px;
     }
  .skill-icon span {
    font-size: 0.5rem; /* Adjust this if necessary to fit with the very small icon size */
  }
}
</style>
