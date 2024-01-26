<script setup>
import WorkDetailCard from '@/components/WorkDetailCard.vue'
import WorkData from '../assets/data/work-data.json'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const workDetail = ref(null)

console.log(WorkData)

const workId = route.params.id
workDetail.value = WorkData.items.find((item) => item.id === workId)
</script>

<template>
  <div class="work-detail">
    <h1 class="work-detail__heading">{{ workDetail.title }}</h1>
    <div class="work-detail__intro">
      <video v-if="workDetail.video" autoplay muted loop playsinline controls>
        <source :src="workDetail.video" type="video/mp4" />
      </video>
      <WorkDetailCard v-else :image="workDetail.images[0]" />
      <div class="work-detail__intro__content">
        <p class="work-detail__intro__tech">
          <span>Tech:</span><br />
          {{ workDetail.tech }}
        </p>
        <p v-if="workDetail.repo" class="work-detail__intro__repo">
          <a
            :href="workDetail.repo"
            target="_blank"
            >Repository</a
          >
        </p>
        <p v-if="workDetail.live" class="work-detail__intro__live">
          <a
            :href="workDetail.live"
            target="_blank"
            >Live</a
          >
        </p>
        <p class="work-detail__intro__text">
          {{ workDetail.description }}
        </p>
      </div>
    </div>
    <div class="work-detail__delimeter"></div>
    <div class="work-detail__additional-content__top">
      <p class="work-detail__additional-content__top__text">
        {{ workDetail.additionalDesc1 }}
      </p>
      <WorkDetailCard :image="workDetail.images[1]" />
    </div>
    <div class="work-detail__additional-content__bottom">
      <WorkDetailCard :image="workDetail.images[2]" />
      <p class="work-detail__additional-content__bottom__text">
        {{ workDetail.additionalDesc2 }}
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
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    margin-block-start: 140px;

    video {
      border-radius: 20px;
      box-shadow: -3px 3px $color-dark-gray;
      max-width: 400px;
      height: auto;
    }

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

  a {
    color: $color-burnt-orange;
    &:hover {
      font-weight: 600;
    }
  }
}
</style>
