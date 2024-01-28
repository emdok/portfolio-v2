<script setup>
import ContactForm from '../components/ContactForm.vue'
</script>

<template>
  <div class="contact-view">
    <div class="contact-view--title">
      <h1 class="page-title">
        <span>C</span>
        <span>O</span>
        <span>N</span>
        <span>T</span>
        <span>A</span>
        <span>C</span>
        <span>T</span>
      </h1>
    </div>
    <ContactForm />
  </div>
</template>

<style lang="scss">
.contact-view {
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  margin-block-end: 100px;
  margin-block-start: 40px;
  margin: 5%;

  .page-title {
    font-size: 60px;
    text-shadow:
      -2px -2px 0 #fff,
      2px -2px 0 #fff,
      -2px 2px 0 #fff,
      2px 2px 0 #fff,
      -4px 6px 0px #d0ffd5;
  }

  @include mq(l) {
    flex-direction: column;
    margin-block-start: 100px;
    &--title {
      flex: 1;
      width: 100%;
    }

    .page-title {
      flex-direction: row;
      font-size: 96px;
      text-shadow:
        -2px -2px 0 #fff,
        2px -2px 0 #fff,
        -2px 2px 0 #fff,
        2px 2px 0 #fff,
        -6px 10px 0px #d0ffd5;
    }
  }
}
</style>
