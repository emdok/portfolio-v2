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
    width: 300px;
    height: 275px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    margin-block-end: 20px;
    
    @include mq(m) {
    width: 400px;
    height: 320px;
  }
  }

</style>
