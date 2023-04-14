<template>
  <div class="container">
    <div class="heading">
      <h1>howly</h1>
      <img src="logo.png" alt="Howly Logo" class="logo">
    </div>
    <div class="links">
      <a href="https://medium.com/@s.wrzalek">blog</a>
      <a href="/contact">contact</a>
    </div>
  </div>
</template>
<style lang="scss">
.heading {
  display: flex;
  img {
    margin-left: var(--margin-xl);
    align-self: center;
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