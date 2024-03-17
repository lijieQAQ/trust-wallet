<template>
  <div className="app" id="app">
   <div class="content">
    <router-view />
   </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// get static files by chrome.runtime.getURL

export default defineComponent({
  name: "App",
  data: function () {
    return {
      show: false,
      password: "",
    };
  },
  computed: {
  },
  created() {
    if (window.location.href.includes("fullscreen")) {
      document.getElementsByTagName("body")[0].style.height = "100vh";
      document.getElementById("root").style.height = "100vh";
      document.getElementById("app").style.height = "100vh";
    }
    // if (window.document.body.clientWidth < 50) {
    //   chrome.tabs.create({
    //     url: "pages/popup.html",
    //   });
    // }
    // console.log(window.document.body.clientWidth)
    if (localStorage.getItem("wallet")) {
      // sessionStorage.setItem("password", "123456");
      this.$router.push("enter-input");
      // this.$router.push("home");
    } else {
      this.$router.push("create-wallet");
    }
  },
  mounted() {
    if (window.location.href.includes("fullscreen")) {
      document.getElementById("app").style.height = "100vh";
    }
  },
  methods: {
    goToOptions() {
      // go to options page
      chrome.runtime.openOptionsPage();
    },
  },
});
</script>

<style lang="less" scoped>
@import "../style/popup.less";
.content {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.back {
  padding: 12px;
  background-color: #3675bc;
  text-align: left;
  img {
    width: 16px;
    cursor: pointer;
  }
}
</style>import { getElementTop } from "vant/lib/utils";

