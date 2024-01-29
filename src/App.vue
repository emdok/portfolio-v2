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
  <div class="site-wrapper">
    <header>
      <Hero v-if="preventHeroDisplay" />
      <div class="nav">
        <nav>
          <RouterLink v-if="!preventHeroDisplay" to="/"
            ><img class="home" src="/home.svg" alt="home"
          /></RouterLink>
          <RouterLink to="/#work-section">Work</RouterLink>
          <RouterLink to="/#tech-section">Technology</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </nav>
      </div>
    </header>
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
.site-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

header {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient($color-light-orange 75%, rgba(0, 0, 0, 0));
  padding-top: calc(env(safe-area-inset-top) + 20px); /* Adjust top padding */
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
  gap: 10px;
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

/* Additional styles for iOS to ensure full coverage */
@supports (padding-top: constant(safe-area-inset-top)) {
  header {
    padding-top: calc(constant(safe-area-inset-top) + 20px);
  }
}
</style>
