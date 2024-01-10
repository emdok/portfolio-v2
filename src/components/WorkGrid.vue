<script setup>
import WorkCard from './WorkCard.vue'
import WorkData from '../assets/data/work-data.json'
</script>

<template>
  <div class="work-grid">
    <WorkCard 
      v-for="(item, index) in WorkData.items" 
      :item="item" 
      :index="index" 
      :key="item.id" />
  </div>
</template>

<style lang="scss">
.work-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(275px, 1fr));
  row-gap: 30px;
  column-gap: 40px;
  width: 100%;
}
</style>
