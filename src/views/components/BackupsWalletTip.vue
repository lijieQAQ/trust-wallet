<template>
  <div class="backups-wallet-tip">
    <div class="flex-1">
      <img src="../../../assets/logo.png" class="img_show" alt="" />
      <div class="title">{{ language.backuptips }}</div>
      <!-- 请马上备份您的钱包！ -->
      <div class="sub-title">{{ language.mnemonicphrasedescription }}</div>
      <div class="sub-title">{{ language.mnemonicphrasedescription_1 }}</div>
      <div class="sub-title">{{ language.mnemonicphrasedescription_2 }}</div>
    </div>
    <!-- 在下一步中，您将看到12个允许您恢复钱包的单词。 -->
    <div class="flex w-full items-center justify-between mt-6 space-x-4">
      <div
        class="flex w-full"
        data-tooltip-id="button-tooltip-2"
        data-tooltip-place="top-end"
      >
        <button
          type="button"
          @click="handle(0)"
          class="outline-none bg-transparent text-backgroundPrimary default-button p-0 w-full"
        >
          <p class="title-text text-primary font-medium text-unset">
            {{ language.backnow }}
          </p>
        </button>
      </div>
      <div
        class="flex w-full"
        data-tooltip-id="button-tooltip-3"
        data-tooltip-place="top-end"
      >
        <button
          @click="handle(1)"
          class="outline-none bg-primary text-backgroundPrimary hover:bg-primaryHover active:bg-primaryPressed disabled:bg-primaryPressed default-button w-full"
        >
          {{ language.backlater }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BackupsWalletTip",
  data: () => {
    return {
      language: {
        backuptips: "",
        mnemonicphrasedescription: "",
        mnemonicphrasedescription_1: "",
        mnemonicphrasedescription_2: "",
        backnow: "",
        backlater: "",
      },
    };
  },
  created() {
    this.language.backuptips = chrome.i18n.getMessage("backuptips");
    this.language.mnemonicphrasedescription = chrome.i18n.getMessage(
      "mnemonicphrasedescription"
    );
    this.language.mnemonicphrasedescription_2 = chrome.i18n.getMessage(
      "mnemonicphrasedescription_1"
    );
    this.language.mnemonicphrasedescription_2 = chrome.i18n.getMessage(
      "mnemonicphrasedescription_2"
    );
    this.language.backnow = chrome.i18n.getMessage("backnow");
    this.language.backlater = chrome.i18n.getMessage("backlater");
  },
  components: {},
  methods: {
    handle(type: number) {
      this.$emit("next", type);
    },
  },
});
</script>

<style lang="less" scoped>
@import "../../style/popup.less";

.backups-wallet-tip {
  text-align: center;
  position: relative;
  overflow: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .title {
    font-size: 16px;
    margin-top: 24px;
    margin-bottom: 10px;
    font-weight: bold;
    color: #fff;
  }
  .sub-title {
    font-size: 12px;
    color: #999;
    line-height: 1.6;
    margin: 0 8%;
  }
  .img_show {
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -61px 0 0 -60px;
    width: 123px;
    height: 120px;
  }
  .footer {
    position: absolute;
    width: calc(100vw - 8%);
    bottom: 20px;
    text-align: left;
    button {
      margin-top: 10px;
      background-color: #3675bc;
      font-size: 12px;
      border-radius: 5px;
      color: #fff;
    }
  }
}
:deep(.van-checkbox__icon) {
  height: 0.9em;
  line-height: 0.9em;
}
:deep(.van-checkbox__icon) {
  display: flex;
  border: 1px solid #3675bc;
  height: 0.7em;
  width: 0.7em;
  line-height: 1;
}
:deep(.van-icon-success:before) {
  position: absolute;
  left: -2px;
}
:deep(.van-checkbox__icon .van-icon) {
  line-height: 0.9em;
  width: 0.9em;
  height: 0.9em;
}
:deep(.van-checkbox__label) {
  line-height: 16px;
  font-size: 12px;
  color: #999;
}

// /deep/ .van-checkbox__ico{
// 	height: 0.9em;
// 	line-height: 0.9em;
// }
// /deep/ .van-checkbox__icon .van-icon{
// 	display: flex;
// 	border:1px solid #3675bc;
// 	height: 0.9em;
// 	width: 0.9em;
// 	line-height: 0.8;
// }
// /deep/ .van-icon-success:before{
// 	position: absolute;
// 	left: -2px;
// }
// /deep/ .van-checkbox__label{
// 	line-height: 16px;
// 	font-size: 12px;
// 	color: #999;
// }
</style>
