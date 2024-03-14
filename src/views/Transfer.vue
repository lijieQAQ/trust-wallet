<template>
  <div
    class="relative flex flex-col flex-1 w-full h-full self-center md:max-w-[438px] p-2"
  >
    <div
      class="flex items-center w-full self-center space-x-4 pb-2 md:max-w-[438px]"
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
          发送SOL
        </h3>
      </div>
      <div class="w-7"></div>
    </div>
    <div
      class="relative flex flex-col flex-grow w-full h-full self-center pt-2 md:max-w-[438px]"
    >
      <div class="relative flex flex-1 w-full">
        <div
          class="absolute flex flex-1 flex-col w-full h-full top-0 left-0 items-stretch justify-stretch tw-scrollbar"
        >
          <div class="flex flex-col space-y-1 text-center pb-4">
            <div class="flex justify-center">
              <div class="relative min-w-min">
                <div
                  class="flex items-center justify-center w-full h-full flex-1 flex-row"
                >
                  <div class="rounded-full overflow-hidden">
                    <div class="w-10 h-10 flex items-center">
                      <img
                        alt="Solana"
                        src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/solana/info/logo.png"
                        class="w-full rounded-full border-1"
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="absolute -bottom-px -right-0.75"
                  data-tooltip-id="token-network-tooltip-345"
                  data-tooltip-content="Solana上的Solana"
                >
                  <div
                    class="flex items-center justify-center w-full h-full flex-1 flex-row"
                  >
                    <div
                      class="rounded-full overflow-hidden border-2 border-backgroundPrimary bg-backgroundPrimary"
                    >
                      <div class="w-3.75 h-3.75 flex items-center">
                        <img
                          alt="Solana"
                          src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/solana/info/logo.png"
                          class="w-full rounded-full border-1"
                          width="100%"
                          height="100%"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="subtitle-text text-textSecondary font-normal text-unset">
              在Solana网络上
            </p>
          </div>
          <div class="pb-4">
            <div class="text-start">
              <p class="body-text text-textPrimary font-medium text-unset">
                收款地址
              </p>
              <div class="input-field space-x-1 h-12">
                <input
                  data-testid="input-recipient"
                  class="ph-no-capture w-full block flex-1 outline-none bg-transparent title-text font-medium text-left"
                  type="text"
                  placeholder="输入或粘贴有效地址"
                  spellcheck="false"
                  v-model="address"
                />
              </div>
              <p
                class="subtitle-text text-textThird font-normal text-unset"
              ></p>
            </div>
          </div>
          <div class="pb-4">
            <div class="text-start">
              <p class="body-text text-textPrimary font-medium text-unset">
                MEMO（选填）
              </p>
              <div class="input-field space-x-1 h-12">
                <input
                  data-testid="input-memo-tag"
                  class="ph-no-capture w-full block flex-1 outline-none bg-transparent title-text font-medium text-left"
                  type="text"
                  placeholder="输入或粘贴MEMO"
                  spellcheck="false"
                  value=""
                />
              </div>
              <p
                class="subtitle-text text-textThird font-normal text-unset"
              ></p>
            </div>
          </div>
          <div class="pb-4">
            <div class="text-start">
              <p class="body-text text-textPrimary font-medium text-unset">
                金额
              </p>
              <div class="input-field space-x-1 h-12">
                <input
                  data-testid="input-amount"
                  class="ph-no-capture w-full block flex-1 outline-none bg-transparent title-text font-medium text-left"
                  type="text"
                  placeholder="输入或粘贴有效金额"
                  spellcheck="false"
                  @input="
                    (event) => {
                      if (event.target.value > balance) {
                        event.target.value = balance;
                      } else {
                        event.target.value = event.target.value;
                      }
                    }
                  "
                  @change="
                    (event) => {
                      if (event.target.value > balance) {
                        event.target.value = balance;
                      } else {
                        event.target.value = event.target.value;
                      }
                    }
                  "
                  v-model="amount"
                />
              </div>
              <p
                class="subtitle-text text-textThird font-normal text-unset"
              ></p>
            </div>
            <div class="flex space-x-1">
              <p
                class="subtitle-text text-textSecondary font-normal text-unset"
              >
                余额
              </p>
              <p
                data-testid="account-balance"
                class="subtitle-text text-textSecondary font-normal text-unset"
              >
                {{ balance }} SOL
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex w-full"
        data-tooltip-id="button-tooltip-178"
        data-tooltip-place="top-end"
      >
        <button
          data-testid="button-prepare-send-tx"
          type="button"
          :disabled="address === '' || balance === 0 || !amount"
          @click="onSubmit"
          class="outline-none bg-primary text-backgroundPrimary hover:bg-primaryHover active:bg-primaryPressed disabled:bg-primaryPressed default-button w-full"
        >
          提交
        </button>
      </div>
    </div>
    <van-dialog
      v-model:show="show"
      @close="close"
      class="!bg-[#000] receive-dialog"
      :show-cancel-button="false"
    >
      <div class="flex space-x-1 bg-line py-2 px-4 rounded items-center">
        <div>
          <div>
            <div
              class="flex w-full"
              data-tooltip-id="button-tooltip-379"
              data-tooltip-place="top-end"
            >
              <button
                data-testid="button-address-copy"
                type="button"
                class="outline-none bg-transparent text-backgroundPrimary default-button p-0 w-full"
              >
                <div
                  :data-clipboard-text="hash"
                  @click="copy"
                  class="copy"
                  data-tooltip-id="copy-tooltip-213"
                  data-tooltip-content="复制"
                  data-tooltip-place="top-end"
                >
                  <svg
                    class="text-iconNormal"
                    fill="none"
                    width="16"
                    height="16"
                    viewBox="0 0 25 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.45557 3.89441H20.4556V16.8944H17.4556V6.89441H9.45557V3.89441ZM4.45557 8.89441V21.8944H15.4556V8.91477L4.45557 8.89441Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div class="w-full pr-5 break-words">
          <p
            data-testid="account-address"
            class="body-text break-all text-textPrimary font-medium text-unset"
          >
            {{ hash }}
          </p>
        </div>
      </div>
    </van-dialog>
  </div>

  <!-- <div class="transfer">
    <van-form @submit="onSubmit">
	  <input type="text" v-model="address" placeholder="recipient address" >
	  <input type="text" v-model="amount" placeholder="quantity">
        <van-button round block native-type="submit">send</van-button>
    </van-form>
  </div> -->
</template>

<script lang="ts">
import Clipboard from "clipboard";
import { defineComponent } from "vue";
import { transfer } from "@/utils/Transfer";
import "vant/lib/index.css";

export default defineComponent({
  name: "Transfer",
  data() {
    return {
      address: "",
      amount: "",
      currency: "",
      balance: "0",
      show: false,
      hash: "",
    };
  },
  created() {
    if (this.$route.query) {
      this.balance = this.$route.query.balance;
    }
  },
  methods: {
    close() {
      this.show = false;
      this.hash = "";
      this.address = "";
      this.balance = this.balance - this.amount;
      this.amount = "";
      this.currency = "";
    },
    copy() {
      const clipboard = new Clipboard(".copy");
      clipboard.on("success", () => {
        clipboard.destroy();
      });
      clipboard.on("error", () => {
        clipboard.destroy();
      });
    },
    async onSubmit() {
      const result = await transfer(this.address, this.amount);

      if (result) {
        this.show = true;
        this.hash = result;
      }
    },
  },
});
</script>

<style scoped lang="less">
@import "../style/popup.less";
:deep(.receive-dialog) {
  color: #fff;
  .van-dialog__footer {
    background: rgb(72, 255, 145) !important;
    color: #000 !important;
  }
  .bg-line {
    background-color: rgb(71, 77, 87);
  }
}
</style>
