<script setup></script>

<template>
  <div class="hero-image">
    <img src="/emily_dokken-headshot.png" />
  </div>
</template>

<style lang="scss">
.hero-image {
  align-self: center;
  max-width: 60vw;
  @include mq(l) {
    max-width: 30vw;
  }
}
</style>
