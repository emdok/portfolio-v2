<script setup>
import HeroImage from '@/components/HeroImage.vue'
import AboutView from '@/views/AboutView.vue'
import WorkView from '@/views/WorkView.vue'
import TechView from '@/views/TechView.vue'
</script>

<template>
  <main class="landing">
    <HeroImage />
    <section>
      <AboutView />
    </section>
    <section id="work-section">
      <WorkView />
    </section>
    <section id="tech-section">
      <TechView />
    </section>
  </main>
</template>

<style lang="scss">

</style>
