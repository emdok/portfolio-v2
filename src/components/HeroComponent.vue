<script setup></script>

<template>
  <div class="title">
    <a href="/"><h1>Emily Dokken</h1></a>
  </div>
</template>

<style lang="scss">
.title {
  font-size: 5vw;
  text-wrap: nowrap;
  text-shadow:
    -2px -2px 0 #fff,
    2px -2px 0 #fff,
    -2px 2px 0 #fff,
    2px 2px 0 #fff,
    -3px 5px 0px #d0ffd5;

    a {
      color: unset;
    }
  @include mq(l) {
    text-shadow:
    -2px -2px 0 #fff,
    2px -2px 0 #fff,
    -2px 2px 0 #fff,
    2px 2px 0 #fff,
    -6px 10px 0px #d0ffd5;
  }
}
</style>
