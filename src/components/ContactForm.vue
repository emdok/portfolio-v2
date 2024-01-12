<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

function submitForm() {
  // Handle the form submission
  console.log(form.value) // Replace with actual submission logic
}

// function downloadResume() {
//   // Logic to download the resume
//   console.log('Downloading resume...') // Replace with actual download logic
// }
</script>

<template>
  <div class="contact-form-container">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" />
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message"></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style lang="scss">
.contact-form-container {
  flex: 1;
  max-width: 600px;
  margin: auto;
  padding: 1em;

  .form-group {
    margin-bottom: 1em;

    label {
      display: block;
      font-size: $contact-form-size-lg;
      margin-bottom: 0.5em;
    }

    input[type='text'],
    input[type='email'],
    textarea {
      width: 100%;
      padding: 0.5em;
      border: 2px solid $color-dark-gray;
      border-radius: 10px;
    }

    input[type='text'],
    input[type='email'] {
      height: 50px;
    }

    textarea {
      height: 300px;
    }
  }
}

button {
  padding: 10px 15px;
  background: $color-light-green;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;

  &:hover {
    opacity: 0.8;
  }
}
</style>
