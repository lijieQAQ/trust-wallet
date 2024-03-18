<template>
  <div class="account h-full">
    <div
      class="relative flex flex-col flex-1 w-full h-full self-center md:max-w-[375px] p-2"
    >
      <div
        class="flex items-center w-full self-center space-x-4 pb-2 md:max-w-[375px]"
      >
        <div class="w-7">
          <svg
            @click="$router.back()"
            class="text-iconNormal cursor-pointer w-[24px] h-[24px]"
            fill="#fff"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.00001 12.2722L10.0711 5.20117L11.8388 6.96894L7.78434 11.0234L21.001 11.0234L21.001 13.5234L7.78554 13.5234L11.8388 17.5767L10.0711 19.3445L3.00001 12.2734L3.00061 12.2728L3.00001 12.2722Z"
              fill="#fff"
            ></path>
          </svg>
        </div>
        <div class="flex-grow text-center overflow-hidden">
          <h3
            class="header-text text-textPrimary font-semibold truncate text-unset"
          >
            {{ language.wallet }}
          </h3>
        </div>
        <div class="w-7"></div>
      </div>
      <div
        class="relative flex flex-col flex-grow w-full h-full self-center pt-2 md:max-w-[375px]"
      >
        <div class="relative flex flex-1 w-full">
          <div
            class="absolute flex flex-1 flex-col w-full h-full top-0 left-0 items-stretch justify-stretch tw-scrollbar"
          >
            <div
              class="flex flex-col rounded-xl cursor-pointer mb-3">
              <div
                class="flex items-center justify-between mt-4 bg-bg3 p-3"
                v-for="(item, index) in wallets"
                @click="handle(index)"
                :key="item.wallet"
              >
                <div class="flex items-center flex-row space-x-4">
                  <div>
                    <div
                      class="bg-backgroundPrimary p-2 rounded-full relative border"
                    >
                      <img
                        alt=""
                        src="../../assets/logo.png"
                        width="16"
                        height="16"
                      />
                      <div
                        v-if="item.isDefault === 1"
                        class="rounded-full p-0.5 bg-primary text-backgroundPrimary absolute -top-1 -right-1"
                      >
                        <svg
                          fill="none"
                          width="10"
                          height="10"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.86414 14.0099L5.8629 14.0111L7.63067 15.7789L7.6319 15.7776L7.63201 15.7777L9.39978 14.01L9.39967 14.0099L17.0588 6.35077L15.291 4.58301L7.6319 12.2421L4.68574 9.29593L2.91797 11.0637L5.86414 14.0099Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p
                      data-testid="wallet-name"
                      class="title-text text-textPrimary font-medium text-unset"
                    >
                      {{ item.name }}
                    </p>
                  </div>
                </div>
                <div>
                  <van-popover
                    trigger="manual"
                    :show="showPopover === item.name"
                    theme="dark"
                    @mouseleave="showPopover = ''"
                    class="w-[130px]"
                    @select="(option) => onSelect(option.text, index)"
                    :actions="actions"
                  >
                    <template #reference>
                      <svg
                        @mouseenter="showPopover = item.name"
                        class="text-iconNormal hover:text-textPrimary transition"
                        fill="none"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10 3H14V7H10V3ZM10 10H14V14H10V10ZM14 17H10V21H14V17Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </template>
                  </van-popover>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex w-full"
          data-tooltip-id="button-tooltip-112"
          data-tooltip-place="top-end"
        >
          <button
            @click="$router.push('create-wallet')"
            data-testid="add-new-wallet-btn"
            type="button"
            class="outline-none bg-primary text-backgroundPrimary hover:bg-primaryHover active:bg-primaryPressed disabled:bg-primaryPressed default-button w-full"
          >
            {{ language.addnewwallet }}
          </button>
        </div>
      </div>
    </div>
    <!-- <div class="item" v-for="(item, index) in wallets" :key="item.wallet">
      <span>{{ item.name ? item.name : `wallet${index + 1}` }}</span
      >
      <div v-if="item.isDefault === 0" class="btn" @click="handle(index)">
        set as Default
      </div>
    </div>
    <van-button type="primary" block @click="$router.push('create-wallet')"
      >new</van-button> --><div v-if="showOpen" class="flex items-center justify-center">
      <div
        id="default-modal"
        aria-hidden="true"
        class="overflow-x-hidden receive-dialog fixed bg-[#5e6673]/[0.25] overflow-y-auto flex top-0 left-0 right-0 md:inset-0 z-50 justify-center items-center"
      >
        <div
          class="w-full bg-backgroundPrimary rounded-lg transform receive-dialog-content overflow-hidden py-5 px-4 text-left align-middle shadow-xl transition-all opacity-100 scale-100"
          id="headlessui-dialog-panel-14"
          data-headlessui-state="open"
        >
          <div class="flex items-center space-x-2">
            <div>
              <div
                class="flex w-full"
                data-tooltip-id="button-tooltip-18"
                data-tooltip-place="top-end"
              >
                <button
                  data-testid="close-modal-button"
                  type="button"
                  @click="showOpen = false"
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
            <div class="text-start">
              <div class="input-field space-x-1 h-12">
                <input
                  data-testid="password-field"
                  class="ph-no-capture w-full block flex-1 outline-none bg-transparent title-text font-medium text-left"
                  type="text"
                  spellcheck="false"
                  v-model="name"
                />
              </div>
              <p
                class="subtitle-text text-textThird font-normal text-unset"
              ></p>
            </div>
            <div class="pt-4">
              <div
                class="flex w-full"
                @click="submit"
                :disabled="name === ''"
                data-tooltip-id="button-tooltip-20"
                data-tooltip-place="top-end"
              >
                <button
                  type="button"
                  class="outline-none bg-primary text-backgroundPrimary hover:bg-primaryHover active:bg-primaryPressed disabled:bg-primaryPressed default-button w-full"
                >
                  {{ language.submit }}
                </button>
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
import "vant/lib/index.css";

export default defineComponent({
  name: "Account",
  data() {
    return {
      wallets: [],
      showPopover: "",
      name: "",
      editIndex: 0,
      showOpen: false,
      language: {
        addnewwallet: "",
        wallet: "",
        submit: chrome.i18n.getMessage("submit")
      },
      actions: [
        { text: chrome.i18n.getMessage("defaultwallet") },
        { text: chrome.i18n.getMessage("removewallet") },
        { text: chrome.i18n.getMessage("updatewalletname") },
      ],
    };
  },
  created() {
    this.language.addnewwallet = chrome.i18n.getMessage("addnewwallet");
    this.language.wallet = chrome.i18n.getMessage("wallet");
    const walletStr = localStorage.getItem("wallet");
    if (walletStr) {
      this.wallets = JSON.parse(walletStr);
    }
  },
  methods: {
    onSelect(type, index) {
      if (type === chrome.i18n.getMessage("defaultwallet")) {
        this.handle(index);
      } else if (type === chrome.i18n.getMessage("removewallet")) {
        if (this.wallets.length === 1) {
          localStorage.removeItem("wallet");
          this.$router.push("create-wallet");
        } else {
          if (this.wallet[index].isDefault === 0) {
            this.wallets = this.wallets.filter((_, _index) => _index !== index);
            localStorage.setItem("wallet", JSON.stringify(this.wallets));
          } else {
            const _wallets = this.wallets.filter(
              (_, _index) => _index !== index
            );
            _wallets[0].isDefault === 1;
            this.wallets = _wallets;
            localStorage.setItem("wallet", JSON.stringify(_wallets));
          }
        }
      } else if (type === chrome.i18n.getMessage("updatewalletname")) {
        this.name = this.wallets[index].name;
        this.showOpen = true;
        this.editIndex = index;
      }
    },
    handle(index) {
      this.wallets.forEach((el, i) => {
        el.isDefault = i === index ? 1 : 0;
      });
      localStorage.setItem("wallet", JSON.stringify(this.wallets));
      this.$router.push("home");
    },
    submit() {
      this.wallets.forEach((el, i) => {
        el.name = i === this.editIndex ? this.name : el.name;
      });
      localStorage.setItem("wallet", JSON.stringify(this.wallets));
      this.showOpen = false;
    }
  },
});
</script>

<style scoped lang="less">
@import "../style/popup.less";
.receive-dialog {
  width: 100vw;
  height: 100vh;
  .receive-dialog-content {
    width: 350px;
  }
}
.account {
  padding: 12px;
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    border-bottom: 1px solid #eee;
    .btn {
      padding: 3px 8px;
      background: #3675bc;
      color: #fff;
      font-size: 12px;
      border-radius: 2px;
    }
  }
  .van-button {
    background-color: #3675bc;
    color: #fff;
    border: none;
    font-size: 12px;
    border-radius: 5px;
    margin-top: 22px;
  }
}
</style>
