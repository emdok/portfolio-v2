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
  column-gap: 30px;
  display: grid;
  grid-template-columns: repeat(1, minmax(300px, 1fr));
  place-items: center;
  row-gap: 30px;
  
  @include mq(m) {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }
}
</style>
