<template>
  <div class="menu">
    <g-link to="/snippets" class="menu_item menu_item__snippets text-smooth"
      >Snippets</g-link
    >
    <g-link to="/about" class="menu_item menu_item__about text-smooth">About</g-link>
    <g-link to="/what" class="menu_item menu_item__what text-smooth">What?</g-link>
  </div>
</template>
<style lang="scss">
.menu {
  padding: 3em;
  position: absolute;
  z-index: 10;
  &_item {
    display: block;
    color: #333333;
    font-weight: 500;
    font-size: 1.3em;
    text-transform: uppercase;
    font-family: "Roboto", sans-serif;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
    &__snippets {
      letter-spacing: 20px;
      margin-bottom: 0.5em;
    }
    &__what {
      letter-spacing: 41px;
    }
    &__about {
      letter-spacing: 42px;
      margin-bottom: 0.5em;
      &:hover {
        color: #333333;
      }
    }
    &:hover {
      color: #333333;
      letter-spacing: 3px;
    }
  }
}
</style>
<script></script>
<static-query>
query {
  strapi {
    categories {
      id
      name
      slug
    }
    global {
      siteName
    }
  }
}
</static-query>
