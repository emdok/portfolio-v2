<script setup>

const props = defineProps({
  image: String
})

</script>

<template>
  <div class="work-detail-card">
    <img :src="props.image" />
  </div>
</template>

<style lang="scss">
  .work-detail-card {
    img {
      border-radius: 25px;
      height: auto;
      max-width: 220px;
      object-fit: contain;
      box-shadow: -3px 3px $color-dark-gray;
      overflow: hidden;

      @include mq(m) {
        border-radius: 45px;
        max-width: 400px;
      }
    }
  }
</style>