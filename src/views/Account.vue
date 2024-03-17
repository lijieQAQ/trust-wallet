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
              class="flex flex-col rounded-xl cursor-pointer bg-bg3 mb-3 p-3"
            >
              <div
                class="flex items-center justify-between"
                v-for="(item, index) in wallets"
                :key="item.wallet"
              >
                <div class="flex items-center flex-row space-x-4">
                  <div>
                    <div
                      class="bg-backgroundPrimary p-2 rounded-full relative border"
                    >
                      <svg
                        class="text-primary"
                        fill="none"
                        width="16"
                        height="16"
                        viewBox="0 0 16 19"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 3.09998L7.99993 0.5V18.4998C2.28569 16.0999 0 11.4999 0 8.89993V3.09998ZM16 3.09998L8.00007 0.5V1.992L7.99997 1.99197V17.0379C8 17.0379 8.00004 17.0379 8.00007 17.0379V18.4998C13.7143 16.0999 16 11.4999 16 8.89993V3.09998ZM8.00007 17.0379C12.7765 15.0318 14.6871 11.1867 14.6871 9.01342V4.16528L8.00007 1.992V17.0379Z"
                          fill="currentColor"
                        ></path>
                      </svg>
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
                    v-model:show="showPopover"
                    theme="dark"
                    class="w-[160px]"
                    @select="(option) => onSelect(option.text, index)"
                    :actions="actions"
                  >
                    <template #reference>
                      <svg
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
      >new</van-button> -->
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
      showPopover: false,
      language: {
        addnewwallet: "",
        wallet:'',
      },
      actions: [
        { text: chrome.i18n.getMessage("defaultwallet") },
        { text: chrome.i18n.getMessage("removewallet") },
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
      if (type === "") {
        this.handle(index);
      } else {
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
      }
    },
    handle(index) {
      this.wallets.forEach((el, i) => {
        el.isDefault = i === index ? 1 : 0;
      });
      localStorage.setItem("wallet", JSON.stringify(this.wallets));
    },
  },
});
</script>

<style scoped lang="less">
@import "../style/popup.less";

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
