<script setup>
import HeroImage from '@/components/HeroImage.vue'
import AboutView from '@/views/AboutView.vue'
import WorkView from '@/views/WorkView.vue'
import TechView from '@/views/TechView.vue'
</script>

<template>
  <div class="landing">
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
  </div>
</template>

<style lang="scss">
  .landing {
    display: flex;
    flex-direction: column;
  }
</style>
