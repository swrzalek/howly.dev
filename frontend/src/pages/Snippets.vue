<template>
  <div :style="{ padding: '1.5em' }">
    <div class="container justify-content-center">
      <SearchInput class="my-2"/>
    </div>
    <Articles :articles="$page.strapi.articles" />
  </div>
</template>

<script>
import Articles from "~/components/Articles";
import SearchInput from "~/components/SearchInput";
export default {
  name: "Snippets.vue",
  components: {
    Articles,
    SearchInput,
  },
};
</script>
<page-query>
query {
  strapi {
    articles(where: { status: "published" }) {
      slug
      title
      category {
        name
      }
      image {
        url
      }
      author {
        name
        picture {
          url
        }
      }
    }
  }
}
</page-query>
<style scoped></style>
