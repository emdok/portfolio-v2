<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  image: String
})

</script>

<template>
  <div class="work-detail-card">
    <img :src="image" />
  </div>
</template>

<style lang="scss">
  .work-detail-card {
    img {
      border-radius: 45px;
      height: auto;
      max-width: 400px;
      object-fit: contain;
      box-shadow: -3px 3px $color-dark-gray;
      overflow: hidden;
    }
  }
</style>