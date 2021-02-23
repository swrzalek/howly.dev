<template>
  <div class="about_container">
    <div class="about_title">Sebastian Wrzałek</div>
    <div class="about_media">
      <g-image src="~/assets/icons/github.svg" @click="newTab(urls.github)" />
      <g-image src="~/assets/icons/linkedin.svg" @click="newTab(urls.linkedin)" />
      <g-image src="~/assets/icons/send.svg" @click="newTab(urls.send)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      urls: {
        github: "https://github.com/swrzalek",
        linkedin: "https://github.com/swrzalek",
        send: "https://mail.google.com/mail/?view=cm&fs=1&to=s.wrzalek@gmail.com&su=Hello&body=Do+you+want+to+work+for+us?",
      },
    };
  },
  methods: {
    newTab(link) {
      let win = window.open(link, "_blank");
      win.focus();
    },
  },
};
</script>

<style scoped lang="scss">
.about {
  &_container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  &_title {
    color: #000000;
    font-size: 22px;
    font-weight: 300;
  }
  &_media {
    img {
      margin: 0 10px;
      cursor: pointer;
    }
  }
}
</style>
