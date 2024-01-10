<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Hero from './components/Hero.vue'
import HeroImage from './components/HeroImage.vue'
import AboutView from './views/AboutView.vue'
import WorkView from './views/WorkView.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Hero />
      <div class="nav">
        <nav>
          <RouterLink to="/">Work</RouterLink>
          <RouterLink to="/">Technology</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </nav>
      </div>
      <HeroImage />
    </div>
  </header>
  <RouterView />
  <section>
    <AboutView />
  </section>
  <section>
    <WorkView />
  </section>
</template>

<style lang="scss">
.wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.nav {
  width: 30%;
  margin: 25px auto;
}

nav {
  display: flex;
  font-size: $nav-font-size-lg;
  font-weight: 500;
  justify-content: space-between;
  text-transform: uppercase;
  width: 100%;
  a {
    color: $color-dark-gray;
    &:hover {
      text-shadow: -2px 3px 0px $color-light-green;
    }
  }
}

section {
  padding: 5% 0;
}
</style>
