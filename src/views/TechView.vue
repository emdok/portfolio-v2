<script setup>
import TechGrid from '@/components/TechGrid.vue';
</script>

<template>
  <div class="tech-view">
    <div class="tech-view--title">
      <h1 class="page-title">
        <span>T</span>
        <span>E</span>
        <span>C</span>
        <span>H</span>
      </h1>
    </div>
    <TechGrid />
  </div>
</template>

<style lang="scss">
  .tech-view {
    display: flex;

    &--title {
      flex: 5;
      width: 100%;
    }
  }
</style>
