<template>
  <div class="app">
    <Navbar />
    <slot />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>

a {
  text-decoration: none !important;
}

h1 {
  font-family: Staatliches !important;
  font-size: 120px !important;
}

#title {
  letter-spacing: 0.4px !important;
  font-size: 22px !important;
  font-size: 1.375rem !important;
  line-height: 1.13636 !important;
}

#banner {
  margin: 20px !important;
  height: 800px !important;
}

#editor {
  font-size: 16px !important;
  font-size: 1rem !important;
  line-height: 1.75 !important;
}

.uk-navbar-container {
  font-family: Staatliches !important;
}

img:hover {
  opacity: 1 !important;
  transition: opacity 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) !important;
}

.avatar {
  position: static;
  border-radius: 50%;
  width: 30px;
  height: 30px;
}
</style>
