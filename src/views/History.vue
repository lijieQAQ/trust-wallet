<template>
  <div class="w-full md:max-w-[438px]">
    <div
      class="flex py-[16px] items-center w-full self-center space-x-4 md:max-w-[438px]"
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
    <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
      <li class="pb-3 sm:pb-4" v-for="item in list" :key="item.hash">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <div class="flex-1 min-w-0">
            <p
              class="text-sm font-medium text-gray-900 truncate dark:text-white"
            >
              {{ item.hash }}
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
              {{ item.address }}
            </p>
          </div>
          <div
            class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
          >
            {{ item.amount }}
          </div>
        </div>
      </li>
    </ul>
    <van-tabbar v-model="active" @change="change">
      <van-tabbar-item icon="home-o">{{ language.home }}</van-tabbar-item>
      <van-tabbar-item icon="todo-list-o">{{
        language.history
      }}</van-tabbar-item>
      <van-tabbar-item icon="setting-o">{{ language.setting }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue";
import "vant/lib/index.css";
import { LocalWalletModel } from "@/Data/Wallet";
import { decryptByDES } from "@/utils/Des";

export default defineComponent({
  name: "History",
  data() {
    return {
      list: [],
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
    this.language.home = chrome.i18n.getMessage("home");
    this.language.history = chrome.i18n.getMessage("history");
    this.language.setting = chrome.i18n.getMessage("setting");
    this.language.historyrecord = chrome.i18n.getMessage("historyrecord");
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
          const _list = localStorage.getItem(
            `history${JSON.parse(walletDes).address}`
          );
          if (_list) {
            this.list = JSON.parse(_list);
          }
        }
      }
    }
  },
  methods: {
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
