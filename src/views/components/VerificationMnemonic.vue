<template>
  <div class="verification-mnemonic">
    <div class="enter-input">
      <div
        class="relative flex flex-col flex-1 w-full h-full self-center md:max-w-[438px] p-2"
      >
        <div
          class="relative flex flex-col flex-grow w-full h-full self-center pt-2 md:max-w-[438px]"
        >
          <div
            class="flex items-center justify-center w-full h-full flex-1 flex-col"
          >
            <div class="max-w-xs flex items-center flex-col">
              <img
                src="../../../assets/logo.png"
                alt=""
                class="w-[62px] mx-auto"
              />

              <div class="pt-4 pb-6 text-center">
                <p class="title-text text-textPrimary font-medium text-unset">
                  {{ language.slogan_1 }}
                </p>
              </div>
              <div class="flex flex-col w-full">
                <div class="flex flex-col space-y-2">
                  <div class="mnemonic-content">
                    <div class="mnemonic-content-cord">
                      <span
                        class="item"
                        @click="clearInput(item)"
                        v-for="(item, index) in inputMnemonic"
                        :key="item"
                        ><span class="item_num">{{ index + 1 }}</span>
                        {{ item }}</span
                      >
                    </div>
                    <div class="tip" v-if="!isMatch">
                      wrong order, please try again
                    </div>
                    <!-- 顺序不对，请重试 -->
                    <!-- <div class="tip_finish" v-else>干的漂亮！</div> -->
                  </div>
                  <div class="mnemonic">
                    <template v-for="item in mnemonic.split(' ').sort()">
                      <span
                        :key="item"
                        class="item"
                        @click="inputHandle(item)"
                        v-if="inputMnemonic.indexOf(item) === -1"
                        >{{ item }}</span
                      >
                    </template>
                  </div>
                </div>
                <div class="pt-6 pb-4 w-full">
                  <div
                    class="flex w-full"
                    data-tooltip-id="button-tooltip-2"
                    data-tooltip-place="top-end"
                  >
                    <button
                      :disabled="inputMnemonic.join(' ') !== mnemonic"
                      @click="handle"
                      class="outline-none bg-primary text-backgroundPrimary hover:bg-primaryHover active:bg-primaryPressed disabled:bg-primaryPressed default-button w-full"
                    >
                      {{ language.continue }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Clipboard from "clipboard";
export default defineComponent({
  name: "VerificationMnemonic",
  data: () => {
    return {
      inputMnemonic: [],
      language: {
        slogan_1: "",
        continue: "",
      },
    };
  },
  props: {
    mnemonic: {
      default: "",
      type: String,
    },
  },
  mounted() {
    this.language.slogan_1 = chrome.i18n.getMessage("slogan_1");
    this.language.continue = chrome.i18n.getMessage("continue");
  },
  computed: {
    isMatch() {
      const mnemonic = this.mnemonic.split(" ");
      for (let i = 0, length = this.inputMnemonic.length; i < length; i++) {
        if (this.inputMnemonic[i] !== mnemonic[i]) {
          return false;
        }
      }
      return true;
    },
  },
  components: {},
  methods: {
    copy() {
      const clipboard = new Clipboard(".copy");
      clipboard.on("success", () => {
        this.$toast("Copy successfully");
        clipboard.destroy();
      });
      clipboard.on("error", () => {
        clipboard.destroy();
      });
    },
    clearInput(str: string) {
      if (str !== "") {
        const index = this.inputMnemonic.indexOf(str);
        this.inputMnemonic.splice(index, 1);
      }
    },
    inputHandle(str: string) {
      this.inputMnemonic.push(str);
    },
    handle() {
      this.$emit("next");
    },
  },
});
</script>

<style lang="less" scoped>
@import "../../style/popup.less";

.verification-mnemonic {
  text-align: center;
  position: relative;
  overflow: hidden;
  height: 100vh;
  .title {
    font-size: 16px;
    margin-top: 24px;
    margin-bottom: 10px;
    font-weight: bold;
    color: #444;
  }
  .sub-title {
    font-size: 12px;
    color: #999;
    line-height: 1.6;
    margin: 0 8%;
  }
  .mnemonic-content {
    margin: 10px 0 30px;
    display: block;
    background: #fff;
    border-radius: 4px;
    min-height: 50px;
    padding: 6px 0 34px;
    color: #000;
    position: relative;
    .tip {
      color: rgba(200, 43, 43, 0.99);
    }
    .item_finish {
      color: #4dcb9a;
    }
    .tip,
    .item_finish {
      position: absolute;
      left: 0;
      bottom: 10px;
      width: 100%;
      text-align: center;
      overflow: hidden;
      display: block;
      font-size: 12px;
    }
  }
  .mnemonic {
    margin-top: 26px;
  }
  .mnemonic,
  .mnemonic-content-cord {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .item {
      margin: 3px;
      padding: 4px 8px;
      border: 1px solid #e9e9e9;
      border-radius: 4px;
      background: #fff;
      font-size: 12px;
      color: #000;
      cursor: pointer;
      .item_num {
        color: #000;
      }
    }
  }
  .copy {
    margin: 24px 0;
    text-align: center;
    color: #03a9f4;
    cursor: pointer;
  }
  .footer {
    position: absolute;
    width: calc(100vw - 24px);
    bottom: 20px;
    .tip {
      border-radius: 4px;
      padding: 2px 12px;
      background: rgba(220, 20, 20, 0.2);
      font-size: 14px;
      color: rgba(220, 20, 20, 0.99);
    }
    button {
      background-color: #3675bc;
      font-size: 12px;
      border-radius: 5px;
      color: #fff;
    }
  }
}
</style>
