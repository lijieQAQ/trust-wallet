<template>
  <div class="enter-input">
    <div
      class="relative flex flex-col flex-1 w-full h-full self-center md:max-w-[375px] p-2"
    >
      <div
        class="relative flex flex-col flex-grow w-full h-full self-center pt-2 md:max-w-[375px]"
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
          class="flex flex-col items-center justify-end text-center w-full pt-4"
        >
          <div class="w-10/12">
            <p class="body-text text-textSecondary font-normal text-unset">
              {{ language.cannotlogin }}
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
                @click="open = true"
              >
                {{ language.resetwallet }}
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="open"
      class="relative z-10"
      id="headlessui-dialog-1"
      role="dialog"
      aria-modal="true"
      data-headlessui-state="open"
    >
      <div class="tw-overlay opacity-100"></div>
      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <div
            class="bg-backgroundPrimary rounded-lg w-[375px] transform overflow-hidden py-5 px-4 text-left align-middle shadow-xl transition-all opacity-100 scale-100"
            id="headlessui-dialog-panel-2"
            data-headlessui-state="open"
          >
            <div class="flex items-center space-x-2">
              <div class="flex-grow">
                <h3
                  class="header-text text-textPrimary font-semibold text-unset"
                >
                  {{ language.resetwallet }}
                </h3>
              </div>
              <div>
                <div
                  class="flex w-full"
                  data-tooltip-id="button-tooltip-4"
                  data-tooltip-place="top-end"
                >
                  <button
                    data-testid="close-modal-button"
                    type="button"
                    class="outline-none bg-transparent text-backgroundPrimary default-button p-0 w-full"
                  >
                    <svg
                      class="text-iconNormal"
                      fill="none"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.69611 5.07538L4.57479 7.1967L9.87809 12.5L4.57479 17.8033L6.69611 19.9246L11.9994 14.6213L17.3027 19.9246L19.424 17.8033L14.1207 12.5L19.424 7.1967L17.3027 5.07538L11.9994 10.3787L6.69611 5.07538Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="mt-5">
              <div
                class="flex items-center justify-center w-full h-full flex-1 flex-col"
              >
                <div>
                  <svg
                    fill="none"
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_25_28577)">
                      <path
                        d="M16.0399 80.1788C4.34599 67.2232 9.95844 43.0981 28.5757 26.2938C47.193 9.48946 71.7651 6.36946 83.459 19.325C95.153 32.2806 89.5405 56.4058 70.9233 73.2101C52.306 90.0144 27.7339 93.1344 16.0399 80.1788Z"
                        fill="#1B1B1C"
                      ></path>
                      <path
                        d="M25.2956 86.3699C26.3393 85.2916 27.4314 84.2272 28.5718 83.1973C43.142 70.0441 61.3615 65.275 74.1968 70.0372"
                        stroke="#2ECCFF"
                        stroke-width="0.24875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M86.3994 51.6091C85.5838 50.1438 84.6023 48.7683 83.4619 47.5034C71.7671 34.5507 47.1956 37.6679 28.582 54.4706C21.4145 60.94 16.1753 68.4947 13.1134 76.0769"
                        stroke="#2ECCFF"
                        stroke-width="0.24875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M86.6597 23.9004V50.9671"
                        stroke="#2ECCFF"
                        stroke-width="0.24875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M80.3018 16.4355V62.6964"
                        stroke="#2ECCFF"
                        stroke-width="0.24875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M13.4941 76.7521V46.9414"
                        stroke="#2ECCFF"
                        stroke-width="0.24875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M22.522 85.146V32.5332"
                        stroke="#2ECCFF"
                        stroke-width="0.24875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M64.0923 11.3359V78.6018"
                        stroke="#2ECCFF"
                        stroke-width="0.24875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M39.2998 18.4414V88.0296"
                        stroke="#2ECCFF"
                        stroke-width="0.24875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M16.0399 80.1788C4.34599 67.2232 9.95844 43.0981 28.5757 26.2938C47.193 9.48946 71.7651 6.36946 83.459 19.325C95.153 32.2806 89.5405 56.4058 70.9233 73.2101C52.306 90.0144 27.7339 93.1344 16.0399 80.1788Z"
                        stroke="#2ECCFF"
                        stroke-width="0.24875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <mask
                        id="mask0_25_28577"
                        maskUnits="userSpaceOnUse"
                        x="5"
                        y="0"
                        width="85"
                        height="89"
                        style="mask-type: luminance"
                      >
                        <path
                          d="M83.4343 19.3238C95.1291 32.2765 89.5167 56.4057 70.9031 73.2083C52.2896 90.011 27.7181 93.1282 16.0233 80.1755C4.32846 67.2227 -0.710251 30.1753 17.9102 13.3727C36.5237 -3.42994 74.8531 -6.08116 83.4412 19.3238H83.4343Z"
                          fill="white"
                        ></path>
                      </mask>
                      <g mask="url(#mask0_25_28577)">
                        <path
                          d="M52.5323 2.53847L58.8195 62.4213L45.2442 62.8689L38.9566 2.99388L52.5323 2.53847Z"
                          fill="#FFF465"
                          stroke="#0500FF"
                          stroke-width="0.240128"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M58.8199 62.4207L52.0291 66.4959L38.4538 66.9435L45.2446 62.8683L58.8199 62.4207Z"
                          fill="#0500FF"
                          stroke="#0500FF"
                          stroke-width="0.240128"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M45.2456 62.8686L38.4548 66.9438L32.1672 7.06878L38.958 2.99359L45.2456 62.8686Z"
                          fill="#FFF465"
                          stroke="#0500FF"
                          stroke-width="0.240128"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M59.6671 68.8959L61.1626 83.1296L47.5869 83.585L46.0914 69.3513L59.6671 68.8959Z"
                          fill="#FFF465"
                          stroke="#0500FF"
                          stroke-width="0.240128"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M61.1647 83.1317L54.3738 87.2069L40.7981 87.6623L47.5889 83.5871L61.1647 83.1317Z"
                          fill="#0500FF"
                          stroke="#0500FF"
                          stroke-width="0.240128"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M47.5863 83.5847L40.7955 87.6599L39.3 73.4262L46.0908 69.351L47.5863 83.5847Z"
                          fill="#FFF465"
                          stroke="#0500FF"
                          stroke-width="0.240128"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M33.8898 23.8616L39.9668 11.9774L40.2169 15.0028L34.1254 26.5456L33.8898 23.8616Z"
                          fill="#0500FF"
                        ></path>
                        <path
                          d="M34.5296 30.261L40.6066 18.3768L41.7534 30.385L35.6619 41.9277L34.5296 30.261Z"
                          fill="#0500FF"
                        ></path>
                      </g>
                      <path
                        d="M83.4426 19.3242C95.1374 32.277 89.525 56.4061 70.9114 73.2088C52.2979 90.0114 27.7264 93.1286 16.0316 80.1759"
                        stroke="#2ECCFF"
                        stroke-width="0.24875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M60.3417 22.1142L60.6553 20.5664L59.4191 21.5501L59.1055 23.0979L60.3417 22.1142Z"
                        fill="#FFF465"
                        stroke="#0500FF"
                        stroke-width="0.24875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M55.6313 20.9677L55.947 19.4199L59.4194 21.5481L59.1057 23.0959L55.6313 20.9677Z"
                        fill="#0500FF"
                        stroke="#0500FF"
                        stroke-width="0.24875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M57.1825 18.4375L55.9463 19.4212L59.4187 21.5494L60.6549 20.5657L57.1825 18.4375Z"
                        fill="#FFF465"
                        stroke="#0500FF"
                        stroke-width="0.24875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M20.1504 68.2344L23.8101 71.6599L24.8956 69.3708L20.1504 68.2344Z"
                        fill="#FFF465"
                        stroke="#0500FF"
                        stroke-width="0.24875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M20.1504 68.2344L23.8101 71.6599L21.5088 72.7148L20.1504 68.2344Z"
                        fill="#FFAEFE"
                        stroke="#0500FF"
                        stroke-width="0.24875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M22.5948 70.4281L21.5093 72.7152L23.8106 71.6602L24.8961 69.3711L22.5948 70.4281Z"
                        fill="#0500FF"
                        stroke="#0500FF"
                        stroke-width="0.24875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M84.4153 9.69141L81.8838 9.76065L83.8674 11.3349L86.3989 11.2657L84.4153 9.69141Z"
                        fill="#48FF91"
                        stroke="#0500FF"
                        stroke-width="0.24875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M85.4257 6.41797L83.8677 11.3343L86.3991 11.265L85.4257 6.41797Z"
                        fill="#FFF465"
                        stroke="#0500FF"
                        stroke-width="0.24875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M85.4254 6.41797L83.8674 11.3343L81.8838 9.75999L85.4254 6.41797Z"
                        fill="#FFCE22"
                        stroke="#0500FF"
                        stroke-width="0.24875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_25_28577">
                        <rect width="99.5" height="99.5" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div class="py-2">
                  <h3
                    class="header-text text-textPrimary font-semibold text-unset"
                  >
                    {{ language.resetwallet1 }}
                  </h3>
                </div>
                <div>
                  <div class="pb-2">
                    <p
                      class="body-text text-textSecondary font-normal text-unset"
                    >
                    {{ language.resetwallettip1 }}<strong
                        class="font-medium"
                        >{{ language.resetwallettip2 }}</strong
                      >{{ language.resetwallettip3 }}
                    </p>
                  </div>
                  <div class="pb-2">
                    <p
                      class="body-text text-textSecondary font-normal text-unset"
                    >
                    {{ language.resetwallettip4 }}<strong class="font-medium"
                        >{{ language.resetwallettip5 }}</strong
                      >{{ language.resetwallettip6 }}
                    </p>
                  </div>
                </div>
                <div class="pt-3 pb-5 w-full">
                  <div
                    class="flex w-full"
                    data-tooltip-id="button-tooltip-5"
                    data-tooltip-place="top-end"
                  >
                    <button
                      @click="reset"
                      type="button"
                      class="outline-none bg-error text-white default-button w-full"
                    >
                    {{ language.resetwallettip7 }}
                    </button>
                  </div>
                </div>
                <div class="w-full">
                  <div
                    class="flex w-full"
                    data-tooltip-id="button-tooltip-6"
                    data-tooltip-place="top-end"
                  >
                    <button
                      type="button"
                      @click="open = false"
                      class="outline-none bg-transparent text-backgroundPrimary default-button w-full"
                    >
                      <p class="title-text text-primary font-medium text-unset">
                        {{ language.cancel }}
                      </p>
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
import { defineComponent, getCurrentInstance } from "vue";
import { LocalWalletModel } from "@/Data/Wallet";
import { decryptByDES } from "@/utils/Des";
import { getMessage } from "@/utils/Utils";
export default defineComponent({
  name: "EnterInput",
  data() {
    return {
      password: "",
      tip: false,
      open: false,
      showPassword: false,
      app: null,
      language: {
        slogan_1: "",
        password: "",
        unlock: "",
        resetwallet: "",
        cannotlogin: "",
        resetwallet1: getMessage("resetwallet1"),
        resetwallettip1: getMessage("resetwallettip1"),
        resetwallettip2: getMessage("resetwallettip2"),
        resetwallettip3: getMessage("resetwallettip3"),
        resetwallettip4: getMessage("resetwallettip4"),
        resetwallettip5: getMessage("resetwallettip5"),
        resetwallettip6: getMessage("resetwallettip6"),
        resetwallettip7: getMessage("resetwallettip7"),
        cancel: getMessage("cancel"),
      },
    };
  },
  created() {
    this.language.slogan_1 = getMessage("slogan_1");
    this.language.password = getMessage("password");
    this.language.unlock = getMessage("unlock");
    this.language.cannotlogin = getMessage("cannotlogin");
    this.language.resetwallet = getMessage("resetwallet");
    this.app = getCurrentInstance();
    // this.password = 'Hibernatespring1.';
    // this.submit();
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
.tw-overlay {
  background-color: rgba(94, 102, 115, 0.25);
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
.bg-error {
  background-color: rgb(227, 59, 84);
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
