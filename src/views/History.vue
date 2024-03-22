<template>
  <div class="w-full px-[12px] md:max-w-[375px]">
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
          {{ language.historyrecord }}
        </h3>
      </div>
      <div class="w-7"></div>
    </div>
    <ul
      class="divide-y divide-gray-200 overflow-auto h-[520px] dark:divide-gray-700"
    >
      <li
        class="py-2"
        v-for="item in history"
        :key="item.hash"
        @click="$router.push(`detail?hash=${item.signature}&amount=&to=`)"
      >
        <div
          class="flex items-center cursor-pointer space-x-4 rtl:space-x-reverse"
        >
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium truncate text-white">
              {{ item.signature }}
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
              {{ dateFormat(item.blockTime * 1000) }}
            </p>
          </div>
          <div
            class="inline-flex items-center text-base font-semibold text-white"
          >
            {{ statusFormat(item.confirmationStatus) }}
          </div>
        </div>
      </li>
    </ul>
    <!-- <van-tabbar v-model="active" @change="change">
      <van-tabbar-item icon="home-o">{{ language.home }}</van-tabbar-item>
      <van-tabbar-item icon="todo-list-o">{{
        language.history
      }}</van-tabbar-item>
      <van-tabbar-item icon="setting-o">{{ language.setting }}</van-tabbar-item>
    </van-tabbar> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue";
import "vant/lib/index.css";
import { LocalWalletModel } from "@/Data/Wallet";
import { decryptByDES } from "@/utils/Des";
import { getMessage } from "@/utils/Utils";
import dayjs from "dayjs";
import { getAddressTransactions } from "@/utils/SolanaTx";
import { Toast } from "vant";

export default defineComponent({
  name: "History",
  data() {
    return {
      history: [],
      active: 1,
      language: {
        historyrecord: "",
        home: "",
        history: "",
        setting: "",
      },
    };
  },
  created() {
    this.language.home = getMessage("home");
    this.language.history = getMessage("history");
    this.language.setting = getMessage("setting");
    this.language.historyrecord = getMessage("historyrecord");

    const app = getCurrentInstance();
    const walletStr = localStorage.getItem("wallet");
    if (walletStr) {
      const walletArr: Array<LocalWalletModel> = JSON.parse(walletStr);
      const wallet = walletArr.find((el) => el.isDefault === 1);
      if (wallet) {
        const walletDes = decryptByDES(
          wallet.wallet,
          app.appContext.config.globalProperties.password
        );
        if (walletDes) {
          this.init(JSON.parse(walletDes).address);
        }
      }
    }
  },
  methods: {
    statusFormat(value) {
      return getMessage(value);
    },
    dateFormat(data) {
      return dayjs(data).format("YYYY-DD-DD HH:mm:ss");
    },
    async init(address) {
      Toast.loading({
        message: "Loading...",
        loadingType: "spinner",
        duration: 0,
        forbidClick: true,
      });
      this.history = await getAddressTransactions(address);
      Toast.clear();
    },
    change(index) {
      if (index === 0 || index === 2) {
        this.$router.push(index === 0 ? "home" : "setting");
      }
    },
  },
});
</script>

<style scoped lang="less">
@import "../style/popup.less";
</style>
