<script setup></script>

<template>
  <footer>
    <ul class="footer-links">
      <li>
        <a href="https://github.com/emdok" target="_blank"
          ><img src="/github_icon.png" alt="Github"
        /></a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/emdok/" target="_blank"
          ><img src="/linkedIn_icon.png" alt="LinkedIn"
        /></a>
      </li>
      <li>
        <a href="https://stackexchange.com/users/22932012/nokkemded" target="_blank"
          ><img src="/stack_overflow_icon.png" alt="Stack Overflow"
        /></a>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss">
footer {
  background-color: $color-light-orange;
  padding: 20px;
  width: 100%;
}

.footer-links {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 20px;

  @include mq(m) {
    gap: 60px;
  }

  li {
    list-style-type: none;
    img {
      width: 25px;
      @include mq(m) {
        width: 30px;
      }
    }
  }
}

ul.footer-links {
  padding: unset;
}
</style>
