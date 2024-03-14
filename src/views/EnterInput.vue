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
            <svg
              fill="none"
              width="62"
              height="87"
              viewBox="0 0 62 87"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_26161_83707)">
                <path
                  d="M-0.00195312 26.9479L30.5756 16.9648V86.0759C8.73428 76.8606 -0.00195312 59.1989 -0.00195312 49.2159V26.9465V26.9479Z"
                  fill="#48FF91"
                ></path>
                <path
                  d="M61.1556 26.9479L30.5781 16.9648V86.0759C52.4194 76.8606 61.1556 59.1989 61.1556 49.2172V26.9479Z"
                  fill="url(#paint0_linear_26161_83707)"
                ></path>
                <path
                  d="M12.0561 0.34082H16.3227V2.73096C17.7214 0.582458 19.33 0.34082 21.6857 0.34082V4.56603H20.6128C17.7905 4.56603 16.4387 5.89434 16.4387 8.52474V13.0151H12.0547V0.34082H12.0561Z"
                  fill="#48FF91"
                ></path>
                <path
                  d="M35.9252 13.0137H31.5413V11.8055C30.5844 12.917 29.2795 13.3989 27.6709 13.3989C24.6166 13.3989 22.8906 11.5887 22.8906 8.25687V0.34082H27.2746V7.2696C27.2746 8.83818 28.0437 9.75502 29.3486 9.75502C30.6534 9.75502 31.5413 8.86165 31.5413 7.34141V0.34082H35.9252V13.0151V13.0137Z"
                  fill="#48FF91"
                ></path>
                <path
                  d="M36.9961 9.10059H41.1012C41.289 10.0174 41.9172 10.4027 43.4319 10.4027C44.6677 10.4027 45.3913 10.1141 45.3913 9.58249C45.3913 9.17101 45.0406 8.9059 44.0395 8.68912L40.7284 7.94073C38.5136 7.43536 37.3938 6.15538 37.3938 4.10215C37.3938 1.39719 39.3752 -0.00292969 43.2221 -0.00292969C47.0689 -0.00292969 48.9578 1.36129 49.2851 4.28303H45.2049C45.1358 3.51117 44.3419 3.03894 43.037 3.03894C41.989 3.03894 41.3124 3.37585 41.3124 3.88398C41.3124 4.31755 41.7543 4.65584 42.6421 4.87539L46.1162 5.72043C48.4 6.27412 49.4977 7.43398 49.4977 9.31738C49.4977 11.9257 47.236 13.4708 43.3905 13.4708C39.545 13.4708 37.0016 11.8056 37.0016 9.10059H36.9975H36.9961Z"
                  fill="#48FF91"
                ></path>
                <path
                  d="M61.17 4.28158V0.34082H50.3516V4.28435H53.5798V13.0137H57.9404V4.28158H61.17Z"
                  fill="#48FF91"
                ></path>
                <path
                  d="M10.8366 4.28158V0.34082H0.0195312V4.28435H3.24781V13.0137H7.60833V4.28158H10.8366Z"
                  fill="#48FF91"
                ></path>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_26161_83707"
                  x1="29.1518"
                  y1="94.7238"
                  x2="54.3898"
                  y2="3.84876"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.26" stop-color="#48FF91"></stop>
                  <stop offset="0.66" stop-color="#0094FF"></stop>
                  <stop offset="0.8" stop-color="#0038FF"></stop>
                  <stop offset="0.89" stop-color="#0500FF"></stop>
                </linearGradient>
                <clipPath id="clip0_26161_83707">
                  <rect width="61.1691" height="86.0768" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <div class="pt-4 pb-6 text-center">
              <p class="title-text text-textPrimary font-medium text-unset">
                安全可靠的多链加密货币钱包
              </p>
            </div>
            <form class="flex flex-col w-full">
              <div class="flex flex-col space-y-2">
                <div class="text-start">
                  <p class="body-text text-textPrimary font-medium text-unset">
                    密码
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
                    type="submit"
                    @click="submit"
                    :disabled="password === ''"
                    class="outline-none bg-primary text-backgroundPrimary hover:bg-primaryHover active:bg-primaryPressed disabled:bg-primaryPressed default-button w-full"
                  >
                    解锁
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          class="flex flex-col items-center justify-end text-center w-full border-t-line border-t pt-4"
        >
          <div class="w-10/12">
            <p class="body-text text-textSecondary font-normal text-unset">
              无法登录？您可删除现有钱包并设置新钱包
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
                重置钱包
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { LocalWalletModel } from "@/Data/Wallet";
import { decryptByDES } from "@/utils/Des";
export default defineComponent({
  name: "EnterInput",
  data() {
    return {
      password: "",
      tip: false,
      showPassword: false,
    };
  },
  created() {
    this.password = "Hibernatespring1.";
    this.submit();
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
            sessionStorage.setItem("password", this.password);
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
