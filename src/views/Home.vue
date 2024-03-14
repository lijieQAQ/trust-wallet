<template>
  <div class="home">
    <div
      class="relative flex flex-col flex-1 w-full h-full self-center md:max-w-[480px] px-2 pt-2"
    >
      <div class="flex justify-between">
        <van-popover
          theme="dark"
          v-model:show="showPopover"
          class="wallet-popover"
        >
          <div class="p-2 w-[240px]">
            <div
              @click="$router.push('create-wallet')"
              class="flex w-auto"
              data-tooltip-id="button-tooltip-76"
              data-tooltip-place="top-end"
            >
              <button
                data-testid="wallet-select-popup-add-wallet-button"
                type="button"
                class="outline-none flex text-textPrimary hover:bg-backgroundSecondary active:bg-backgroundTertiary badge-button w-auto"
              >
                <span class="pr-1"
                  ><svg
                    class="text-textPrimary"
                    fill="none"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 3H10.5V10.5L3 10.5V13.5H10.5V21H13.5V13.5H21V10.5L13.5 10.5V3Z"
                      fill="currentColor"
                    ></path></svg></span>
                <p class="body-text text-textPrimary font-medium text-unset">
                  添加新钱包
                </p>
              </button>
            </div>
            <div
              @click="$router.push('account')"
              class="flex w-auto mt-[12px]"
              data-tooltip-id="button-tooltip-77"
              data-tooltip-place="top-end"
            >
              <button
                data-testid="wallet-select-popup-manage-wallets-button"
                type="button"
                class="outline-none flex text-textPrimary hover:bg-backgroundSecondary active:bg-backgroundTertiary badge-button w-auto"
              >
                <span class="pr-1"
                  ><svg
                    class="text-textPrimary"
                    fill="none"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.6666 2.66675C4.00975 2.66675 2.6666 4.00989 2.6666 5.66675L2.66656 8.65552H4.22578V10.2148H2.66654L2.6665 11.7741H4.22575L4.22578 10.2148L5.78502 10.2148V11.7741L4.22575 11.7741L4.22578 13.3334L13.3333 13.3334V2.66675H5.6666ZM11.3333 4.66675H5.6666C5.11431 4.66675 4.6666 5.11446 4.6666 5.66675C4.6666 6.21903 5.11431 6.66675 5.6666 6.66675H11.3333V4.66675ZM11.3333 8.66675H8.6666V11.3334H11.3333V8.66675Z"
                      fill="currentColor"
                    ></path></svg></span>
                <p class="body-text text-textPrimary font-medium text-unset">
                  管理钱包
                </p>
              </button>
            </div>
          </div>
          <template #reference>
            <div class="flex cursor-pointe items-center gap-[6px]">
              <svg
                class="text-primary"
                fill="none"
                width="16"
                height="19"
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
              <span>{{ name }}</span>
              <svg
                class="text-iconNormal transition-transform rotate-0"
                fill="none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.49023V10.7402L12 15.5102L7.5 10.7402V8.49023H16.5Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </template>
        </van-popover>

        <div
          class="rounded bg-bg3 p-1 copy cursor-pointer"
          :data-clipboard-text="wallet.address"
          @click="copy"
        >
          <svg
            class="text-iconNormal"
            fill="none"
            width="20"
            height="20"
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
      </div>
      <div class="flex flex-col mt-[24px] space-y-4 pb-3">
        <div class="flex items-center space-x-3">
          <div>
            <h2
              class="massive-text text-textPrimary font-semibold transition-all ease-in-out duration-300"
            >
              $0.00
            </h2>
          </div>
          <div>
            <div
              data-tooltip-id="refresh-balance-tooltip-4"
              data-tooltip-content="刷新"
            >
              <div
                class="flex w-full"
                data-tooltip-id="button-tooltip-5"
                data-tooltip-place="top-end"
              >
                <button
                  data-testid="refresh-wallet-button"
                  type="button"
                  class="outline-none bg-transparent text-backgroundPrimary circle-button p-0 w-full"
                >
                  <svg
                    class="text-iconNormal -scale-100"
                    fill="none"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.6631 10.1751C16.6646 10.1169 16.6654 10.0585 16.6654 9.99992C16.6654 9.94134 16.6646 9.88294 16.6631 9.82472V10.1751ZM12.944 12.9475L10.7705 10.774H16.6631V16.6666L14.7116 14.7151C13.5053 15.9209 11.8391 16.6666 9.9987 16.6666C6.89226 16.6666 4.28207 14.5419 3.54203 11.6665H6.1791C6.82204 13.1381 8.29047 14.1666 9.9991 14.1666C11.149 14.1666 12.1901 13.7008 12.944 12.9475ZM16.4553 8.33325C15.7153 5.45787 13.1051 3.33325 9.9987 3.33325C8.15802 3.33325 6.49156 4.07923 5.28518 5.28535L3.33308 3.33325V9.22581H9.22564L7.05315 7.05332C7.80714 6.29949 8.84867 5.83325 9.9991 5.83325C11.7077 5.83325 13.1761 6.86166 13.8191 8.33325H16.4553ZM3.33203 9.99992C3.33203 9.95686 3.33244 9.91391 3.33325 9.87105V10.1288C3.33244 10.0859 3.33203 10.043 3.33203 9.99992Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="max-h-[500px] opacity-100">
          <div class="flex items-center justify-between px-5">
            <div class="flex flex-col space-y-2 items-center" @click="transfer">
              <div
                data-tooltip-id="circle-action-tooltip-175"
                data-tooltip-place="top"
              >
                <div
                  class="flex w-full"
                  data-tooltip-id="button-tooltip-176"
                  data-tooltip-place="top-end"
                >
                  <button
                    data-testid="wallet-board-send-button"
                    type="button"
                    class="outline-none bg-bg3 text-textPrimary hover:bg-backgroundSecondary active:bg-backgroundTertiary circle-button w-full"
                  >
                    <svg
                      class="text-textPrimary"
                      fill="none"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.002 2.49903L15.8945 8.39158L14.4214 9.86472L11.0426 6.48597L11.0426 17.4998L8.95931 17.4998L8.95931 6.48697L5.58156 9.86472L4.10842 8.39158L10.001 2.49903L10.0015 2.49953L10.002 2.49903Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <p class="body-text text-textPrimary font-medium text-unset">
                  汇款
                </p>
              </div>
            </div>
            <div
              class="flex flex-col space-y-2 items-center"
              @click="show = true"
            >
              <div
                data-tooltip-id="circle-action-tooltip-177"
                data-tooltip-place="top"
              >
                <div
                  class="flex w-full"
                  data-tooltip-id="button-tooltip-178"
                  data-tooltip-place="top-end"
                >
                  <button
                    data-testid="wallet-board-receive-button"
                    type="button"
                    class="outline-none bg-bg3 text-textPrimary hover:bg-backgroundSecondary active:bg-backgroundTertiary circle-button w-full"
                  >
                    <svg
                      class="text-textPrimary"
                      fill="none"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.99803 17.4993L4.10547 11.6067L5.57861 10.1336L8.95736 13.5123L8.95736 2.49845L11.0407 2.49845L11.0407 13.5113L14.4184 10.1336L15.8916 11.6067L9.99902 17.4993L9.99852 17.4988L9.99803 17.4993Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <p class="body-text text-textPrimary font-medium text-unset">
                  收款
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-[1px] bg-[#474d57]"></div>
      <div
        data-testid="asset-row"
        role="button"
        class="outline-0 mt-[24px]"
        tabindex="0"
      >
        <div
          @click="goDetail('sol', balance, wallet.address)"
          class="flex justify-between space-x-2 mb-5 cursor-pointer items-center"
        >
          <div>
            <div class="relative min-w-min">
              <div
                class="flex items-center justify-center w-full h-full flex-1 flex-row"
              >
                <div class="rounded-full overflow-hidden">
                  <div class="w-8 h-8 flex items-center">
                    <img
                      alt="Algorand"
                      src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/solana/info/logo.png"
                      class="w-full rounded-full border-1"
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>
              </div>
              <div
                class="absolute -bottom-0.5 -right-0.5"
                data-tooltip-id="token-network-tooltip-2"
                data-tooltip-content="Algorand上的Algorand"
              >
                <div
                  class="flex items-center justify-center w-full h-full flex-1 flex-row"
                >
                  <div
                    class="rounded-full overflow-hidden border border-backgroundPrimary bg-backgroundPrimary"
                  >
                    <div class="w-4 h-4 flex items-center">
                      <img
                        alt="Algorand"
                        src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/algorand/info/logo.png"
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
          <div class="flex-grow">
            <div class="flex flex-row space-x-1 items-center">
              <div>
                <p
                  data-testid="asset-symbol"
                  class="title-text text-[#fff] font-medium text-unset"
                >
                  SOL
                </p>
              </div>
              <div></div>
            </div>
            <div class="flex flex-row space-x-1 items-center">
              <div>
                <small
                  data-testid="asset-fiat-price"
                  class="caption-text text-textSecondary font-normal text-unset"
                  >$0.28</small
                >
              </div>
              <div>
                <small
                  data-testid="asset-fiat-percentage-change"
                  class="caption-text text-error font-normal text-unset"
                  >-1.72%</small
                >
              </div>
            </div>
          </div>
          <div class="text-right">
            <div>
              <p
                data-testid="asset-balance"
                class="title-text text-textPrimary font-medium text-unset"
              >
                {{ balance }}
              </p>
            </div>
            <div>
              <small
                data-testid="asset-fiat-balance"
                class="caption-text text-textSecondary font-normal text-unset"
                >$0.00</small
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-dialog
      :footer="null"
      class="!bg-[#000] receive-dialog"
      v-model:show="show"
    >
      <div
        class="w-full bg-backgroundPrimary rounded-lg max-w-md transform overflow-hidden py-5 px-4 text-left align-middle shadow-xl transition-all opacity-100 scale-100"
        id="headlessui-dialog-panel-15"
        data-headlessui-state="open"
      >
        <div class="flex items-center space-x-2">
          <div class="flex-grow">
            <h3 class="header-text text-textPrimary font-semibold text-unset">
              收到SOL
            </h3>
          </div>
          <div>
            <div
              class="flex w-full"
              data-tooltip-id="button-tooltip-378"
              data-tooltip-place="top-end"
            >
              <button
                data-testid="close-modal-button"
                type="button"
                @click="show = false"
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
          <div>
            <div class="warning-alert space-x-2 items-center">
              <svg
                class="text-iconWarning"
                fill="none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM10.75 15.5V18H13.25V15.5H10.75ZM10.75 6V13H13.25V6H10.75Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div class="text-textBrand subtitle-text flex-1 text-start">
                仅支持发送Solana
                (SOL)到此地址。发送其他任何代币都可能会导致永久丢失。
              </div>
            </div>
          </div>
          <div class="py-5">
            <div
              class="flex items-center justify-center w-full h-full flex-1 flex-row"
            >
              <div>
                <div class="qrcode" ref="qrCodeUrl"></div>
              </div>
            </div>
          </div>
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
                      :data-clipboard-text="wallet.address"
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
                {{ wallet.address }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </van-dialog>
    <!-- <div class="add-menu">
      <img :src="menuIcon" alt="" @click="show = true" />
      <img :src="addIcon" alt="" @click="$router.push('account')" />
    </div>
    <div
      class="item"
      @click="goDetail('sol', balance, wallet.address)"
      v-if="currency === 'sol'"
    >
      <img src="../../assets/icon_btc.png" alt="" />
      <span class="label">sol</span>
      <span class="value">{{ balance }}</span>
    </div>
    <van-popup v-model:show="show" position="bottom" :style="{ height: '80%' }">
      <wallet-manage :wallet="wallet" @close="changeCurrency"></wallet-manage>
    </van-popup> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { decryptByDES } from "@/utils/Des";
import { getBalance } from "@/utils/SolanaTx";
import { LocalWalletModel } from "@/Data/Wallet";
import Clipboard from "clipboard";
import QRCode from "qrcodejs2";
import "vant/lib/index.css";

// import WalletManage from "./components/WalletManage.vue";
const addIcon = chrome.runtime.getURL("assets/add.svg");
const menuIcon = chrome.runtime.getURL("assets/menu.svg");
export default defineComponent({
  // components: { WalletManage },
  name: "Home",
  data: () => {
    return {
      addIcon: addIcon,
      menuIcon: menuIcon,
      show: false,
      showPopover: false,
      wallet: null,
      name: "",
      currency: "sol",
      balance: 0,
    };
  },
  created() {
    const walletStr = localStorage.getItem("wallet");
    if (walletStr) {
      const walletArr: Array<LocalWalletModel> = JSON.parse(walletStr);
      const wallet = walletArr.find((el) => el.isDefault === 1);
      if (wallet) {
        const walletDes = decryptByDES(
          wallet.wallet,
          sessionStorage.getItem("password")
        );
        if (walletDes) {
          this.wallet = JSON.parse(walletDes);
          this.getAllBalance();
        }
        this.name = wallet.name;
        this.$nextTick(() => {
          this.createQrCode();
        });
      }
    }
  },
  methods: {
    createQrCode() {
      new QRCode(this.$refs.qrCodeUrl, {
        text: this.wallet.address, // 需要转换为二维码的内容
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
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
    // 切换币种
    changeCurrency(type: string) {
      this.currency = type;
      this.show = false;
    },
    // 转账
    transfer() {
      this.$router.push({
        name: "Transfer",
        query: {
          balance: this.balance,
        },
      });
    },
    // 跳转详情
    goDetail(currency: string, balance: string, address: string) {
      this.$router.push({
        name: "CurrencyDetail",
        query: {
          currency: currency,
          balance: balance,
          address: address,
        },
      });
    },
    // 获取余额
    async getAllBalance() {
      if (this.wallet) {
        // 余额
        this.balance = await getBalance(this.wallet.address);
      }
    },
  },
});
</script>
<style scoped lang="less">
@import "../style/popup.less";
:deep(.wallet-popover) {
  background: rgb(27, 27, 28);
}
:deep(.receive-dialog) {
  color: #fff;
  width: 28rem;
  .van-dialog__footer {
    display: none;
  }
  .warning-alert {
    display: flex;
    width: 100%;
    border-radius: 4px;
    padding: 0.75rem;
    font-weight: 400;
    align-items: center;
    background-color: rgba(216, 159, 0, 0.06);
  }
  .bg-line {
    background-color: rgb(71, 77, 87);
  }
}
.home {
  padding-top: 24px;
  .add-menu {
    padding: 12px;
    background-color: #3675bc;
    text-align: right;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }
  .item {
    cursor: pointer;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 26px;
      height: 26px;
    }
    .label {
      align-items: left;
      flex: 1;
      margin-left: 10px;
      font-size: 12px;
      color: #444;
    }
    .value {
      color: #3675bc;
      font-size: 14px;
    }
  }
}
</style>
