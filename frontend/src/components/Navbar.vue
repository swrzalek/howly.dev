<template>
  <div class="menu">
    <span class="menu_item text-smooth bold noselect">Sebastian Wrzalek</span>
    <g-link to="/" class="menu_item text-smooth">Snippets</g-link>
    <g-link to="/" class="menu_item text-smooth">About</g-link>
  </div>
</template>
<style lang="scss">
.menu {
  padding: 1em;
  position: absolute;
  z-index: 10;
  &_item {
    display: block;
    color: #333333;
    font-weight: 500;
    font-size: 1.3em;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: "Roboto", sans-serif;
    &:hover {
      color: #333333;
      letter-spacing: 20px;
    }
  }
}
</style>

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
