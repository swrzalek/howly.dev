<template></template>

<script>
import * as d3 from "d3";
export default {
  name: "What",
  data() {
    return {
      loadData: {},
    };
  },
  mounted() {
    console.log("App loaded");
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let url =
        "https://raw.githubusercontent.com/emeeks/d3_in_action_2/master/data/tweets.json";
      const tweets = await (await fetch(url)).json();
      console.log(tweets);
      this.loadData = tweets;
    },
  },
};
</script>

<style scoped lang="scss"></style>
