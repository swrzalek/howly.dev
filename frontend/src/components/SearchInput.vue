<template>
  <div class="input_background" ref="search_input_background">
    <div class="input_container">
      <svg :class="['input_icon', searchMode && 'hover']" viewBox="0 0 20 20">
        <path
          d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"
        ></path>
      </svg>
      <input
        class="input_field"
        type="text"
        placeholder="Search"
        @focus="searchMode = true"
        @blur="searchMode = false"
        v-model="searchPhrase"
        @input="handleInput(searchPhrase)"
      />
    </div>
    <transition
      @enter="enterElement"
      @leave="leaveElement"
      v-bind:css="false"
      mode="out-in"
    >
      <div class="input_search_results" v-if="searchMode">
        <div class="title">Categories</div>
        <ul v-for="category in categories">
          <li
            :key="`search-option-${category.name}`"
            @click="handleCategorySelect(category)"
          >
            {{ category.name }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "SearchInput",
  data() {
    return {
      searchMode: false,
      searchPhrase: "",
    };
  },
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleInput(text) {
      this.$emit("input", text);
    },
    handleCategorySelect(category) {
      this.searchPhrase = category.name;
      this.$emit("input", category.name);
    },
    enterElement(el, done) {
      anime({
        targets: el,
        opacity: [0, 1],
        easing: "easeInOutSine",
        complete: done,
      });
    },
    leaveElement(el, done) {
      anime({
        targets: el,
        opacity: [1, 0],
        easing: "easeInOutSine",
        complete: done,
      });
    },
  },
  watch: {
    searchMode(newVal) {
      if (newVal) {
        anime({
          targets: this.$refs.search_input_background,
          easing: "easeInOutSine",
          height: "400px",
          boxShadow: "0 7px 30px -10px rgba(150, 170, 180, 0.5)",
        });
      } else {
        anime({
          targets: this.$refs.search_input_background,
          easing: "easeInOutSine",
          height: "75px",
          boxShadow: "none",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.input_background {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 35%;
  background: #f6f6f6;
  min-height: 75px;
  border-radius: 10px;
  @include sm {
    width: 100%;
  }
}
.input {
  &_search_results {
    padding: 10px;
    /*flex-grow: 1;*/
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    .title {
      font-weight: 600;
      font-size: 18px;
      padding: 10px;
    }
    ul {
      list-style: none outside none;
      margin: 0;
      padding: 0 20px;
    }
    li {
      margin-bottom: 10px;
      font-size: 16px;
      color: #bebebe;
      cursor: pointer;
      &:hover {
        color: #aaaaaa;
      }
    }
  }
  &_container {
    display: -ms-flexbox;
    display: flex;
    min-height: 75px;
    width: 100%;
    border-radius: 10px;
    background: #fefefe;
    box-shadow: 0 2px 30px -10px rgba(150, 170, 180, 0.5);
  }
  &_icon {
    padding: 20px;
    min-width: 60px;
    text-align: center;
    fill: #9ca5bb;
    &.hover {
      fill: #282828;
    }
  }
  &_field {
    width: 100%;
    padding: 20px;
    border: none;
    outline: none;
    color: #9ca5bb;
    margin-right: 10px;
    line-height: 24px;
    &::placeholder {
      color: #9ca5bb;
    }
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
