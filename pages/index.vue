<template>
  <div class="container">
    <div class="heading">
      <h1>howly</h1>
      <img src="/img/logo.png" alt="Howly Logo" class="logo">
    </div>
    <div class="links">
      <a href="https://dev.to/swrzalek">blog</a>
      <a href="/contact">contact</a>
    </div>
  </div>
</template>
<script>
useHead({
  title: 'Howdy',
  meta: [
    {
      name: 'description',
      content: "Howly Dev: Unleash your online presence with " +
          "professional web application development. " +
          "Boost your business with stunning " +
          "and functional web apps. Stand out " +
          "in the digital landscape."
    }
  ],
})
</script>
<style lang="scss">
.heading {
  display: flex;

  img {
    margin-left: var(--margin-md);
    align-self: center;
    height: 3em;
    @include sm {
      margin-left: var(--margin-xl);
      height: 100%
    }
  }
}

.links {
  a {
    margin-right: var(--margin-xxl);
    text-decoration: none;
    color: $secondary
  }
}
</style>
