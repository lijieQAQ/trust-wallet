<template>
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
            <img src="../../assets/logo.png" alt="" class="w-[62px] mx-auto" />

            <div class="pt-4 pb-6 text-center">
              <p class="title-text text-textPrimary font-medium text-unset">
                {{ language.slogan_1 }}
              </p>
            </div>
            <div class="flex flex-col w-full">
              <div class="flex flex-col space-y-2">
                <div class="text-start">
                  <p class="body-text text-textPrimary font-medium text-unset">
                    {{ language.password }}
                  </p>
                  <div class="input-field space-x-1 h-12">
                    <input
                      data-testid="password-field"
                      class="ph-no-capture w-full block flex-1 outline-none bg-transparent title-text font-medium text-left"
                      :type="showPassword ? 'text' : 'password'"
                      spellcheck="false"
                      v-model="password"
                    />
                    <div class="flex space-x-2">
                      <div
                        class="flex w-full"
                        data-tooltip-id="button-tooltip-1"
                        data-tooltip-place="top-end"
                      >
                        <button
                          type="button"
                          @click="showPassword = !showPassword"
                          class="outline-none bg-transparent text-backgroundPrimary default-button p-0 w-full"
                        >
                          <svg
                            v-if="!showPassword"
                            class="text-iconNormal"
                            fill="none"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.93933 5.06077L18.9393 21.0608L21.0606 18.9395L18.6138 16.4926L23 12L17.4447 6.30998C14.7539 3.55392 10.5671 3.26407 7.56164 5.44044L5.06065 2.93945L2.93933 5.06077ZM9.68714 7.56594C10.3788 7.20443 11.1655 7 12 7C14.7614 7 17 9.23858 17 12C17 12.8345 16.7956 13.6212 16.4341 14.3129L9.68714 7.56594Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M1 12L3.29029 9.65416L13.4882 19.8521C11.0565 20.3404 8.43922 19.6197 6.55528 17.69L1 12Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <svg
                            v-if="showPassword"
                            class="text-iconNormal"
                            fill="none"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z"
                              fill="currentColor"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.55528 6.30998L1 12L6.55528 17.69C9.56231 20.77 14.4377 20.77 17.4447 17.69L23 12L17.4447 6.30998C14.4377 3.23001 9.56232 3.23 6.55528 6.30998ZM17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <p
                    class="subtitle-text text-textThird font-normal text-unset"
                  ></p>
                </div>
              </div>
              <div class="tip" v-if="tip">Wrong password, please re-enter</div>
              <div class="pt-6 pb-4 w-full">
                <div
                  class="flex w-full"
                  data-tooltip-id="button-tooltip-2"
                  data-tooltip-place="top-end"
                >
                  <button
                    @click="submit"
                    :disabled="password === ''"
                    class="outline-none bg-primary text-backgroundPrimary hover:bg-primaryHover active:bg-primaryPressed disabled:bg-primaryPressed default-button w-full"
                  >
                    {{ language.unlock }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col items-center justify-end text-center w-full border-t-line border-t pt-4"
        >
          <div class="w-10/12">
            <p class="body-text text-textSecondary font-normal text-unset">
              {{language.cannotlogin}}
            </p>
          </div>
          <div
            class="flex w-full"
            data-tooltip-id="button-tooltip-3"
            data-tooltip-place="top-end"
          >
            <button
              type="button"
              class="outline-none bg-transparent text-backgroundPrimary default-button w-full"
            >
              <p
                class="body-text text-primary font-medium text-unset"
                @click="reset"
              >
                {{ language.resetwallet }}
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue";
import { LocalWalletModel } from "@/Data/Wallet";
import { decryptByDES } from "@/utils/Des";
export default defineComponent({
  name: "EnterInput",
  data() {
    return {
      password: "",
      tip: false,
      showPassword: false,
      app: null,
      language: {
        slogan_1: "",
        password: "",
        unlock: "",
        resetwallet: "",
        cannotlogin: "",
      },
    };
  },
  created() {
    this.language.slogan_1 = chrome.i18n.getMessage("slogan_1");
    this.language.password = chrome.i18n.getMessage("password");
    this.language.unlock = chrome.i18n.getMessage("unlock");
    this.language.cannotlogin = chrome.i18n.getMessage("cannotlogin");
    this.language.resetwallet = chrome.i18n.getMessage("resetwallet");
    this.app = getCurrentInstance();
  },
  methods: {
    reset() {
      localStorage.removeItem("wallet");
      this.$router.push("create-wallet");
    },
    submit() {
      const walletStr = localStorage.getItem("wallet");
      if (walletStr) {
        const walletArr: Array<LocalWalletModel> = JSON.parse(walletStr);
        const wallet = walletArr.find((el) => el.isDefault === 1);
        if (wallet) {
          const walletDes = decryptByDES(wallet.wallet, this.password);
          if (Object.prototype.toString.call(walletDes) === "[object String]") {
            this.app.appContext.config.globalProperties.password =
              this.password;
            this.$router.push("home");
          } else {
            this.tip = true;
          }
        }
      }
    },
  },
});
</script>
<style scoped lang="less">
@import "../style/popup.less";
.tip {
  color: #bd0000;
  margin: 0 auto;
  font-size: 12px;
  margin-top: 8px;
}
.enter-input {
  position: relative;
  overflow: hidden;
  height: 100vh;
  // .title {
  //   margin: 30px 0 0 0;
  //   font-size: 14px;
  //   text-align: center;
  //   margin-bottom: 12px;
  //   color: #444;
  // }
  // .van-field {
  //   margin-top: 100px;
  // }
  // .van-button {
  //   position: absolute;
  //   width: calc(100vw - 8%);
  //   left: 4%;
  //   background-color: #3675bc;
  //   color: #fff;
  //   border: none;
  //   font-size: 12px;
  //   bottom: 20px;
  //   border-radius: 5px;
  // }
  // .tip {
  //   width: calc(100vw - 8%);
  //   color: #bd0000;
  //   margin: 0 auto;
  //   font-size: 12px;
  //   margin-top: 8px;
  // }
}
</style>
