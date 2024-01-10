<script setup>
  import WorkGrid from '@/components/WorkGrid.vue';
</script>
<template>
  <div class="work-view">
    <div class="work-view--title">
      <h1 class="page-title">
        <span>W</span>
        <span>O</span>
        <span>R</span>
        <span>K</span>
      </h1>
    </div>
    
    <WorkGrid />
  </div>
</template>

<style lang="scss">
  .work-view {
    display: flex;
    justify-content: center;
    flex: 1;
    &--title {
      width: 100%;
    }
  }
</style>
