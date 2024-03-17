<template>
  <div class="swiper-banner">
    <div class="swiper-wrapper">
      <div class="swiper-item">
        <img src="../../../assets/logo.png" alt="" class="logo" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SwiperBanner",
  components: {},
  data: () => {
    return {
      a: chrome.i18n.getMessage("extensionName"),
    };
  },
  created() {
    console.log(chrome.i18n.getMessage("title"));
    console.log(chrome.i18n.getMessage("content"));
  },
  methods: {},
});
</script>

<style lang="less" scoped>
.swiper-banner {
  .logo {
    width: 62px;
    height: 62px;
    margin-top: 2.75rem;
    margin-bottom: 2.75rem;
  }
  overflow: hidden;
  .swiper-wrapper {
    .swiper-item {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      h3 {
        text-align: center;
        font-size: 16px;
        margin: 0 0 10px 0;
        padding: 0;
        color: #404040;
      }
      p {
        text-align: center;
        margin: 0;
        padding: 0;
        color: #666;
      }
    }
  }
}
</style>
