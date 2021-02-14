<template>
  <g-link
    :to="{ path: '/article/' + article.slug }"
    class="uk-link-reset"
    :key="article.id"
  >
    <div class="card">
      <div class="card-media-top">
        <g-image :src="getStrapiMedia(article.image.url)" height="50" />
      </div>
      <div class="card-body">
        <p v-if="article.category" class="text-muted small">
          {{ article.category.name }}
        </p>
        <p>{{ article.title }}</p>
        <hr class="uk-divider-small" />
        <div class="uk-grid-small uk-flex-left" data-uk-grid="true">
          <div>
            <g-image
              class="avatar"
              :src="getStrapiMedia(article.author.picture.url)"
              style="position: static; border-radius: '50%'"
              :alt="article.title"
            />
          </div>
          <div class="uk-width-expand">
            <p class="uk-margin-remove-bottom">{{ article.author.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </g-link>
</template>

<script>
import { getStrapiMedia } from "~/utils/medias";

export default {
  props: {
    article: Object,
  },
  methods: {
    getStrapiMedia,
  },
};
</script>
<style scooped lang="scss">
.card {
  border-radius: 10px;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  &-media-top {
    .g-image {
      border-radius: 10px 10px 0 0;
    }
  }
  &-body {
    padding: 1em;
  }
}
</style>
