<script setup>
import ContactForm from '@/components/ContactForm.vue'
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
  justify-content: center;
  margin-block-end: 100px;
  margin-block-start: 100px;
  &--title {
    flex: 1;
    width: 100%;
  }
}
</style>
