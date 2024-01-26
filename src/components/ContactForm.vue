<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

async function submitForm() {
  try {
    const response = await fetch('http://localhost:3000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    })
    if (response.ok) {
      console.log('Email sent successfully')
    } else {
      console.error('Failed to send email')
    }
  } catch (error) {
    console.error('Error: ', error)
  }
}
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
  align-self: center;
  flex: 1;
  max-width: 600px;
  padding: 1em;
  width: 100%;

  .form-group {
    margin-bottom: 1em;

    label {
      display: block;
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

  @include mq(l) {
    margin: auto;
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
