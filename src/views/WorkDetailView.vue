<script setup>
import WorkDetailCard from '@/components/WorkDetailCard.vue'
import WorkData from '../assets/data/work-data.json'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const workDetail = ref(null)

const workId = route.params.id
workDetail.value = WorkData.items.find((item) => item.id === workId)
</script>

<template>
  <div class="work-detail">
    <h1 class="work-detail__heading">{{ workDetail.title }}</h1>
    <div class="work-detail__intro">
      <WorkDetailCard />
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
    <div class="work-detail__additional-content__top">
      <p class="work-detail__additional-content__top__text">
        Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna
        a orci. Maecenas malesuada. Cras dapibus. Vestibulum facilisis, purus nec pulvinar iaculis,
        ligula mi congue nunc, vitae euismod ligula urna in dolor. Vivamus elementum semper nisi.
      </p>
      <WorkDetailCard />
    </div>
    <div class="work-detail__additional-content__bottom">
      <WorkDetailCard />
      <p class="work-detail__additional-content__bottom__text">
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
    text-align: center;
  }

  &__intro {
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    margin-block-start: 140px;
    .work-card,
    &__content {
      align-self: center;
    }

    @include mq(xl) {
      flex-direction: row;
      .work-card,
      &__content {
        align-self: unset;
      }
    }

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
    &__top {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 50px;
      justify-content: center;
      margin-block-start: 100px;
      &__text {
        order: 1;
      }
      @include mq(xl) {
        flex-direction: row;
        &__text {
          order: unset;
        }
      }
    }

    &__bottom {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 50px;
      justify-content: center;
      margin-block-start: 100px;
      margin-block-end: 270px;
      @include mq(xl) {
        flex-direction: row;
      }
    }

    &__top__text,
    &__bottom__text {
      max-width: 600px;
    }
  }

  &__delimeter {
    width: 100%;
    border-bottom: 4px dashed $color-dark-gray;
    margin-block-start: 100px;
  }
}
</style>
