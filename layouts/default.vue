<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
 div {
    background: $primary;
    color: $secondary;
    height: 100vh;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
 }
</style>
