<template>
  <div class="receive">
    <div class="address">
      <div class="qrcode" ref="qrCodeUrl"></div>
      <div class="value">{{ address }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import QRCode from "qrcodejs2";
export default defineComponent({
  name: "Receive",
  data() {
    return {
      address: "",
    };
  },
  mounted() {
    if (this.$route.params) {
      this.address = this.$route.params.address;
    }
    this.$nextTick(() => {
      this.creatQrCode();
    });
  },
  methods: {
    creatQrCode() {
      new QRCode(this.$refs.qrCodeUrl, {
        text: this.address, // 需要转换为二维码的内容
        width: 160,
        height: 160,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    },
  },
});
</script>

<style scoped lang="less">
.receive {
  padding-top: 32px;
  .address {
    width: 200px;
    border-radius: 4px;
    box-shadow: 2px 2px 2px 2px #888888;
    margin: 0 auto;
    padding: 20px 20px;
    text-align: center;
    box-sizing: border-box;
    .value {
      margin-top: 12px;
      word-break: break-all;
    }
  }
}
</style>
