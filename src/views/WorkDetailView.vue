<script setup>
import WorkCard from '@/components/WorkCard.vue'
</script>

<template>
  <div class="work-detail">
    <h1 class="work-detail__heading">Salesforce | Quiz & Recap</h1>
    <div class="work-detail__intro">
      <WorkCard />
      <div class="work-detail__intro__content">
        <p class="work-detail__intro__tech">
          <span>Tech:</span><br />
          Next.js | Lottie | Gsap
        </p>
        <p class="work-detail__intro__text">
          Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor
          urna a orci. Maecenas malesuada. Cras dapibus. Vestibulum facilisis, purus nec pulvinar
          iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Vivamus elementum
          semper nisi.
        </p>
      </div>
    </div>
    <div class="work-detail__delimeter"></div>
    <div class="work-detail__additional-content">
      <p class="work-detail__additional-content__text">
        Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna
        a orci. Maecenas malesuada. Cras dapibus. Vestibulum facilisis, purus nec pulvinar iaculis,
        ligula mi congue nunc, vitae euismod ligula urna in dolor. Vivamus elementum semper nisi.
      </p>
      <WorkCard />
      <div class="work-detail__additional-content__break"></div>
      <WorkCard />
      <p class="work-detail__additional-content__text-2">
        Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna
        a orci. Maecenas malesuada. Cras dapibus. Vestibulum facilisis, purus nec pulvinar iaculis,
        ligula mi congue nunc, vitae euismod ligula urna in dolor. Vivamus elementum semper nisi.
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.work-detail {
  margin: 0 100px;

  &__heading {
    @include work-detail-heading;
    display: flex;
    justify-content: center;
    margin-block-start: 62px;
  }

  &__intro {
    display: flex;
    gap: 50px;
    justify-content: center;
    margin-block-start: 140px;

    &__tech {
      span {
        font-weight: 600;
      }
    }

    &__text {
      margin-block-start: 50px;
      max-width: 600px;
    }
  }

  &__additional-content {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    margin-block-start: 100px;
    margin-block-end: 270px;

    &__text,
    &__text-2 {
      max-width: 600px;
    }

    &__break {
      flex-basis: 100%;
      height: 0;
    }
  }

  &__delimeter {
    width: 100%;
    border-bottom: 4px dashed $color-dark-gray;
    margin-block-start: 100px;
  }
}
</style>
