<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  item: Object
})

const router = useRouter()

const navigateToWorkDetail = (id) => {
  router.push({ name: 'work-detail', params: { id: id } })
}
</script>

<template>
  <div class="work-card" @click="navigateToWorkDetail(item.id)">
    <img v-if="item.images && item.images.length > 0" :src="item.images[0]" />
  </div>
</template>

<style lang="scss">
.work-card {
  background: $color-light-gray;
  border: 2px solid $color-dark-gray;
  border-radius: 10px;
  box-shadow: -3px 3px $color-dark-gray;
  width: 275px;
  height: 300px;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>
