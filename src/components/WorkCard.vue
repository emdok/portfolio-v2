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
  <div class="work-card" @click="navigateToWorkDetail(props.item.id)">
    <img v-if="props.item.images && props.item.images.length > 0" :src="props.item.images[0]" />
  </div>
</template>

<style lang="scss">
.work-card {
  aspect-ratio: 4 / 5;
  background: $color-light-gray;
  border: 2px solid $color-dark-gray;
  border-radius: 10px;
  box-shadow: -3px 3px $color-dark-gray;
  width: 300px;
  height: auto;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &:hover {
    cursor: pointer;
    border-color: $color-burnt-orange;
    box-shadow: -3px 3px $color-burnt-orange;
  }

  &:active {
    box-shadow: unset;
    transform: translateX(-3px) translateY(3px);
  }
}
</style>
