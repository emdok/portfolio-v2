<script setup>
import TechCard from '@/components/TechCard.vue'
import TechData from '@/assets/data/tech-data.json'
import { ref } from 'vue';

const items = ref(TechData.items);
</script>

<template>
  <div class="tech-grid">
    <TechCard v-for="(item) in items" :key="item.id" :tech-item="item" />
  </div>
</template>

<style lang="scss">
.tech-grid {
  display: flex;
  flex: 3;
  flex-direction: column;
  align-items: baseline;
  width: 100%;
  .tech-card:nth-child(2) {
    align-self: end;
  }
} 
</style>
