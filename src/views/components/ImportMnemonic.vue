<template>
  <div class="import-mnemonic">
    <div class="py-[2.75rem]">
      <img src="../../../assets/logo.svg" alt="" class="w-[62px] mx-auto" />
    </div>
    <div
      class="relative flex flex-col flex-grow w-full h-full self-center pt-2 md:max-w-[438px]"
    >
      <div class="bg-backgroundPrimary border border-line rounded p-6 mb-11">
        <div class="flex flex-col items-center text-center space-y-4">
          <h2
            data-testid="onboarding-step-title"
            class="screamer-text text-textPrimary font-semibold text-unset"
          >
            设置密码
          </h2>
          <p class="title-text text-textSecondary font-normal text-unset">
            此密码用于保护您的钱包，并提供浏览器插件的访问权。它无法重置，且与移动钱包没有关联。
          </p>
          <div class="w-full mt-6 flex flex-col space-y-6">
            <form class="space-y-6">
              <div>
                <div class="text-start">
                  <p class="body-text text-textPrimary font-medium text-unset">
                    助记词
                  </p>
                  <div class="input-field space-x-1 h-12">
                    <textarea
                      data-testid="password-field"
                      class="ph-no-capture w-full block flex-1 outline-none bg-transparent title-text font-medium text-left"
                      spellcheck="false"
                      v-model="mnemonic"
                      :type="text"
                      placeholder="组记词"
                    />
                  </div>
                </div>
              </div>
              <div class="flex flex-col space-y-2">
                <div class="text-start">
                  <p class="body-text text-textPrimary font-medium text-unset">
                    新密码
                  </p>
                  <div class="input-field space-x-1 h-12">
                    <input
                      data-testid="password-field"
                      class="ph-no-capture w-full block flex-1 outline-none bg-transparent title-text font-medium text-left"
                      spellcheck="false"
                      v-model="password"
                      :type="showPassword ? 'text' : 'password'"
                      placeholder="密码"
                    />
                    <div class="flex space-x-2">
                      <div
                        class="flex w-full"
                        data-tooltip-id="button-tooltip-4"
                        data-tooltip-place="top-end"
                      >
                        <button
                          type="button"
                          @click="handlePassword('password')"
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
                <ul class="space-y-2">
                  <li class="flex items-center space-x-1">
                    <div
                      v-bind:class="{ 'bg-primary': password.length >= 8 }"
                      class="flex items-center justify-center w-5.5 h-5.5 rounded-full border border-textDisabled"
                    >
                      <svg
                        class="text-backgroundPrimary"
                        fill="none"
                        width="20"
                        height="20"
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
                    <p
                      class="subtitle-text text-textSecondary font-normal text-unset"
                    >
                      8个或以上字母
                    </p>
                  </li>
                  <li class="flex items-center space-x-1">
                    <div
                      v-bind:class="{ 'bg-primary': /[A-Z]/.test(password) }"
                      class="flex items-center justify-center w-5.5 h-5.5 rounded-full border border-textDisabled"
                    >
                      <svg
                        class="text-backgroundPrimary"
                        fill="none"
                        width="20"
                        height="20"
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
                    <p
                      class="subtitle-text text-textSecondary font-normal text-unset"
                    >
                      至少一个大写字符
                    </p>
                  </li>
                  <li class="flex items-center space-x-1">
                    <div
                      v-bind:class="{ 'bg-primary': /\d/.test(password) }"
                      class="flex items-center justify-center w-5.5 h-5.5 rounded-full border border-textDisabled"
                    >
                      <svg
                        class="text-backgroundPrimary"
                        fill="none"
                        width="20"
                        height="20"
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
                    <p
                      class="subtitle-text text-textSecondary font-normal text-unset"
                    >
                      至少一位数字
                    </p>
                  </li>
                  <li class="flex items-center space-x-1">
                    <div
                      v-bind:class="{
                        'bg-primary': /[^a-zA-Z0-9_]/.test(password),
                      }"
                      class="flex items-center justify-center w-5.5 h-5.5 rounded-full border border-textDisabled"
                    >
                      <svg
                        class="text-backgroundPrimary"
                        fill="none"
                        width="20"
                        height="20"
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
                    <p
                      class="subtitle-text text-textSecondary font-normal text-unset"
                    >
                      至少一个符号
                    </p>
                  </li>
                </ul>
              </div>
              <div class="flex flex-col space-y-2">
                <div class="text-start">
                  <p class="body-text text-textPrimary font-medium text-unset">
                    确认新密码
                  </p>
                  <div class="input-field space-x-1 h-12">
                    <input
                      data-testid="password-field"
                      class="ph-no-capture w-full block flex-1 outline-none bg-transparent title-text font-medium text-left"
                      v-model="repeatPassword"
                      placeholder="重复密码"
                      :type="showRepeatPassword ? 'text' : 'password'"
                      spellcheck="false"
                    />
                    <div class="flex space-x-2">
                      <div
                        class="flex w-full"
                        data-tooltip-id="button-tooltip-1"
                        data-tooltip-place="top-end"
                      >
                        <button
                          type="button"
                          @click="handlePassword('repeatPassword')"
                          class="outline-none bg-transparent text-backgroundPrimary default-button p-0 w-full"
                        >
                          <svg
                            v-if="!showRepeatPassword"
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
                            v-if="showRepeatPassword"
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
              <div class="flex justify-center">
                <div class="flex items-center">
                  <input
                    data-testid="checkbox-terms-of-service"
                    id="nmecn"
                    v-model="read"
                    type="checkbox"
                    class="w-4 h-4 accent-primary rounded"
                  /><label
                    for="nmecn"
                    class="ml-2 text-textPrimary subtitle-text font-normal"
                    >我已阅读并同意<a
                      href="https://trustwallet.com/terms-of-services"
                      target="_blank"
                      rel="noreferrer"
                      class="text-primary"
                      >服务条款</a
                    >。</label
                  >
                </div>
              </div>
              <div
                class="flex w-full items-center justify-between mt-6 space-x-4"
              >
                <div
                  class="flex w-full"
                  data-tooltip-id="button-tooltip-2"
                  data-tooltip-place="top-end"
                >
                  <button
                    type="button"
                    @click="back"
                    class="outline-none bg-transparent text-backgroundPrimary default-button p-0 w-full"
                  >
                    <p class="title-text text-primary font-medium text-unset">
                      返回
                    </p>
                  </button>
                </div>
                <div
                  class="flex w-full"
                  data-tooltip-id="button-tooltip-3"
                  data-tooltip-place="top-end"
                >
                  <button
                    type="submit"
                    @click="handle"
                    :disabled="
                      password === '' || repeatPassword === '' || !read
                    "
                    class="outline-none bg-primary text-backgroundPrimary hover:bg-primaryHover active:bg-primaryPressed disabled:bg-primaryPressed default-button w-full"
                  >
                    下一步
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ImportMnemonic",
  data: () => {
    return {
      mnemonic: "",
      password: "",
      read: false,
      repeatPassword: "",
      showPassword: false,
      showRepeatPassword: false,
    };
  },

  methods: {
    handlePassword(type: string) {
      if (type === "password") {
        this.showPassword = !this.showPassword;
      } else {
        this.showRepeatPassword = !this.showRepeatPassword;
      }
    },
    back() {
      this.$emit("back");
    },
    handle() {
      // 请输入正确的助记词
      if (this.mnemonic.split(" ").length !== 12) {
        this.$toast("Please enter the correct mnemonic");
        return;
      }
      //请输入密码
      if (this.password === "") {
        this.$toast("Please enter password");
        return;
      }
      //请输入密码
      if (this.repeatPassword === "") {
        this.$toast("Please repeat password");
        return;
      }
      // 密码不一致
      if (this.password !== this.repeatPassword) {
        this.$toast("密码不一致");
        return;
      }
      this.$emit("next", { mnemonic: this.mnemonic, password: this.password });
    },
  },
});
</script>

<style lang="less" scoped>
@import "../../style/popup.less";
.import-mnemonic {
}
</style>
