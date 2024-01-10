<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Hero from './components/Hero.vue'
import HeroImage from './components/HeroImage.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Hero />
      <nav>
        <RouterLink to="/">Work</RouterLink>
        <RouterLink to="/">Technology</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
      <HeroImage />
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss">
  .wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
