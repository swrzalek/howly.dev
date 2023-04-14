<template>
  <div>
    <h3>Howly.dev</h3>
    <p>TAX ID 5882470761</p>
    <p>REGON 389389551</p>
    <div class="links">
      <a v-for="{ name, url } in links" :href="url">{{ name }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
const links = [ 
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/sebastian-wrzalek/"
  },
  {
    name: "Github",
    url: "https://github.com/swrzalek"
  }
]
</script>
<style lang="scss" scoped>
h3 {
  margin: var(--margin-lg) 0;
}
p {
  margin: 0 0;
}
.links {
  margin-top: var(--margin-xl);
  a {
    display: block;
    margin: var(--margin-md) 0;
  }
}
</style>