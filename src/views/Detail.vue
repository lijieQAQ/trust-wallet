<template>
  <div class="w-full detail px-[12px] md:max-w-[375px]">
    <div
      class="flex py-[16px] items-center w-full self-center space-x-4 md:max-w-[375px]"
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
          {{ language.transferdetail }}
        </h3>
      </div>
      <div class="w-7"></div>
    </div>
    <div class="pb-[12px] text-center">
      <div class="text-sm">{{ language.amountLang }}</div>
      <div class="text-base font-bold text-white mt-2">{{ amount }} SOL</div>
      <div v-bind:class="{ green: type === 1 }" class="text-base mt-2">
        {{ language.status }}
      </div>
    </div>
    <div class="border-t-[1px] border-[#eee] pt-[24px]">
      <div class="flex items-center mb-[24px] justify-between">
        <div class="text-sm">{{ language.transactionblock }}</div>
        <div class="text-sm">{{ blockNumber }}</div>
      </div>
      <div class="flex items-center mb-[24px] justify-between">
        <div class="text-sm">{{ language.addressLang }}</div>
        <div
          class="text-sm break-all justify-end flex w-[200px] items-center gap-[12px]"
        >
          {{ address }}
          <div
            :data-clipboard-text="address"
            @click="copyAddress"
            class="copy-address cursor-pointer shrink-0"
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
        </div>
      </div>
      <div class="flex items-center mb-[24px] justify-between">
        <div class="text-sm">{{ language.transactionhash }}</div>
        <div
          class="text-sm break-all justify-end flex w-[200px] items-center gap-[12px]"
        >
          {{ hash }}

          <div
            :data-clipboard-text="hash"
            @click="copy"
            class="copy cursor-pointer shrink-0"
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
        </div>
      </div>
      <div class="flex items-center mb-[24px] justify-between">
        <div class="text-sm">{{ language.networkfee }}</div>
        <div class="text-sm">{{ fee }} SOL</div>
      </div>
      <div class="flex items-center mb-[24px] justify-between">
        <div class="text-sm">{{ language.date }}</div>
        <div class="text-sm">{{ time }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getMessage } from "@/utils/Utils";
import { defineComponent } from "vue";
import Clipboard from "clipboard";
import dayjs from "dayjs";
import { getTransactionData } from "@/utils/SolanaTx";
import BigNumber from "bignumber.js";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export default defineComponent({
  name: "Detail",
  data: () => {
    return {
      address: "",
      amount: "",
      hash: "",
      blockNumber: "",
      fee: "",
      time: "",
      type: 0,
      language: {
        transferdetail: getMessage("transferdetail"),
        amountLang: getMessage("amount"),
        status: getMessage("tobeconfirmed"),
        transactionblock: getMessage("transactionblock"),
        addressLang: getMessage("address"),
        transactionhash: getMessage("transactionhash"),
        networkfee: getMessage("networkfee"),
        date: getMessage("date"),
        type: 0,
      },
    };
  },
  created() {
    this.hash = this.$route.query.hash;
    this.amount = this.$route.query.amount;
    this.address = this.$route.query.to;
    this.init();
  },
  methods: {
    async init() {
      const data = await getTransactionData(this.hash);
      if (data) {
        this.type = 1;
        this.language.status = getMessage("confirmed");
        if (
          data.transaction &&
          data.transaction.message &&
          data.transaction.message.accountKeys
        ) {
          this.address = data.transaction.message.accountKeys[1] || "";
        }
        if (data.meta) {
          if (!this.amount) {
            this.amount = new BigNumber(data.meta.preBalances[0])
              .minus(data.meta.postBalances[0])
              .minus(data.meta.fee)
              .div(LAMPORTS_PER_SOL)
              .toString();
          }
          this.fee = new BigNumber(data.meta.fee)
            .div(LAMPORTS_PER_SOL)
            .toString();
        }
        if (data && data.blockTime) {
          this.time = dayjs(data.blockTime * 1000).format(
            "YYYY-MM-DD HH:mm:ss"
          );
        }
        if (data && data.slot) {
          this.blockNumber = data.slot;
        }
      } else {
        setTimeout(() => {
          this.init();
        }, 5000);
      }
    },
    copyAddress() {
      const clipboard = new Clipboard(".copy-address");
      clipboard.on("success", () => {
        this.$toast("Copy successfully");
        clipboard.destroy();
      });
      clipboard.on("error", () => {
        clipboard.destroy();
      });
    },
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
  },
});
</script>
<style scoped lang="less">
.detail {
  .green {
    color: #0ecb81;
  }
}
</style>
