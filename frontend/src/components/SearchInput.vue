<template>
  <div class="input_container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-search input_icon"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
    <input class="input_field" type="text" placeholder="Search" />
  </div>
</template>

<script>
export default {
  name: "SearchInput",
};
</script>

<style lang="scss" scoped>
.input {
  &_container {
    display: -ms-flexbox;
    display: flex;
    width: 35%;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  }
  &_icon {
    padding: 20px;
    min-width: 60px;
    text-align: center;
    color: #9ca5bb;
  }
  &_field {
    width: 100%;
    padding: 20px;
    outline: none;
    color: #9ca5bb;
    margin-right: 10px;
    line-height: 24px;
    &:focus {
      color: #282828;
      &::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #282828;
        opacity: 1; /* Firefox */
      }

      &:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: #282828;
      }

      &::-ms-input-placeholder {
        /* Microsoft Edge */
        color: #282828;
      }
    }
  }
}
</style>
