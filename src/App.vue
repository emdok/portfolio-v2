<script setup>
import { watch, ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Hero from './components/Hero.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
const preventHeroDisplay = ref(route.path !== '/contact' && !route.path.startsWith('/work-detail'))

watch(route, (newRoute) => {
  preventHeroDisplay.value =
    newRoute.path !== '/contact' && !newRoute.path.startsWith('/work-detail')
})
</script>

<template>
  <header>
    <div class="wrapper">
      <Hero v-if="preventHeroDisplay" />
      <div class="nav">
        <nav>
          <RouterLink v-if="!preventHeroDisplay" to="/"><img class="home" src="/home.svg" alt="home"></RouterLink>
          <RouterLink to="/#work-section">Work</RouterLink>
          <RouterLink to="/#tech-section">Technology</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </nav>
      </div>
    </div>
  </header>
  <main>
    <RouterView />
  </main>

  <Footer />
</template>

<style lang="scss">
header {
  background: linear-gradient($color-light-orange 75%, rgba(0, 0, 0, 0));
}
.wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.nav {
  margin: 25px auto;
  @include mq(l) {
    width: 30%;
    width: 55vw;
  }
}

nav {
  align-items: center;
  display: flex;
  font-size: $nav-font-size-sm;
  font-weight: 500;
  justify-content: space-between;
  text-transform: uppercase;
  width: 100%;
  a {
    color: $color-dark-gray;
    padding: 0 6px;
    &:hover {
      text-shadow: -2px 3px 0px $color-light-green;
    }
  }
  @include mq(l) {
    font-size: $nav-font-size-lg;
  }
}

section {
  padding: 5% 0;
  margin-block-end: 100px;
}
</style>
