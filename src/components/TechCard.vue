<script setup>
import { computed } from 'vue'

const props = defineProps({
  techItem: {
    type: Object,
    required: true
  }
})

const cardStyle = computed(() => {
  return {
    backgroundImage: `url(${props.techItem.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
})
</script>

<template>
  <div class="tech-card" :style="cardStyle">
    <ul>
      <li class="p3" v-for="tech in techItem.technologies" :key="tech">{{ tech }}</li>
    </ul>
  </div>
</template>

<style lang="scss">
  .tech-card {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    li {
      font-size: 30px;
    }

  }
</style>
