<script setup></script>

<template>
  <footer>
    <ul class="footer-links">
      <li>
        <a href="https://github.com/emdok" target="_blank"><img src="/github_link.svg" alt="Github" /></a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/emdok/" target="_blank"><img src="/linkedIn_icon.svg" alt="LinkedIn" /></a>
      </li>
      <li>
        <a href="https://stackexchange.com/users/22932012/nokkemded" target="_blank"><img src="/stack_overflow_icon.svg" alt="Stack Overflow" /></a>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss">
footer {
  position: fixed;
  bottom: 0;
  height: 75px;
  width: 100%;
  background-color: $color-light-orange;
  z-index: 1000;
}

.footer-links {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  li {
    list-style-type: none;
    padding: 20px;
    img {
        max-width: 75%;
      }
    @include mq(l) {
      img {
        max-width: 100%;
      }
    }
  }
}

ul.footer-links {
  padding: unset;
}
</style>
