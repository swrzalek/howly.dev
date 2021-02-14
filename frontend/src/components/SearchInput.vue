<template>
  <input class="search_input" type="text" placeholder="Search" />
</template>

<script>
export default {
  name: "SearchInput",
};
</script>

<style lang="scss" scoped>
.search_input {
  width: 100%;
  border: 2px solid;
  border-radius: 10px;
  padding: 12px 20px;
  &:hover {
    outline: none;
  }
  &:focus-within {
    outline: none;
  }
}
</style>
