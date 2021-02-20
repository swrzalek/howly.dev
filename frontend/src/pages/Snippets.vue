<template>
  <div :style="{ padding: '1.5em' }">
    <div class="container justify-content-center">
      <SearchInput
        class="my-2"
        :categories="$page.strapi.categories"
        @input="(searchPhrase) => handleInput(searchPhrase)"
      />
    </div>
    <Articles :style="{ marginTop: '170px' }" :articles="searchResults" />
  </div>
</template>

<script>
import Articles from "~/components/Articles";
import SearchInput from "~/components/SearchInput";
export default {
  name: "Snippets.vue",
  data() {
    return {
      searchPhrase: "",
    };
  },
  components: {
    Articles,
    SearchInput,
  },
  methods: {
    handleInput(serachPhrase) {
      this.searchPhrase = serachPhrase;
    },
  },
  computed: {
    searchResults() {
      if (!this.searchPhrase) return this.$page.strapi.articles;
      return this.$page.strapi.articles.filter((article) => {
        const searchByTitle = article.title
          .toLowerCase()
          .includes(this.searchPhrase);
        const searchByCategory = article.category.name
          .toLowerCase()
          .includes(this.searchPhrase);
        return searchByCategory || searchByTitle;
      });
    },
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
    categories {
      name
    }
  }
}
</page-query>
<style scoped></style>
