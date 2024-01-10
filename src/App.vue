<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Work</RouterLink>
        <RouterLink to="/">Technology</RouterLink>
        <RouterLink to="/about">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss" >

</style>
