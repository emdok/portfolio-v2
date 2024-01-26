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
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    margin: 0 5%;

    &--title {
      margin-block-end: 100px;
    }

    @include mq(l) {
      flex-direction: row;
      &--title {
      width: 100%;
      margin-block-end: unset;
    }
    }
  }
</style>
