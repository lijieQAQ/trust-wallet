<template>
  <div
    class="relative flex flex-col flex-1 w-full h-full self-center md:max-w-[375px] px-2 pt-2"
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
          {{ language.setting }}
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
            @click="$router.push('account')"
            class="flex items-center rounded-xl justify-between cursor-pointer my-1 py-3 px-2 bg-bg3"
          >
            <div class="flex items-center flex-row space-x-4">
              <div>
                <svg
                  fill="none"
                  width="45"
                  height="21"
                  viewBox="0 0 45 21"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="3.5"
                    width="17"
                    height="17"
                    rx="8.5"
                    fill="#0500FF"
                  ></rect>
                  <mask id="path-2-inside-1_23913_25810" fill="white">
                    <path
                      d="M9.12426 7.6317C9.12426 7.63381 9.1229 7.63568 9.12089 7.63633L5.94212 8.66499C5.52952 8.79851 5.25 9.18275 5.25 9.61641V11.7084C5.25 12.9668 6.35648 15.1893 9.12047 16.3601C9.12274 16.361 9.12426 16.3633 9.12426 16.3658C9.12426 16.3702 9.12873 16.3731 9.13278 16.3714C9.13406 16.3709 9.13534 16.3704 9.13662 16.3698C9.13884 16.3689 9.14133 16.3689 9.14354 16.3698C9.14482 16.3704 9.14611 16.3709 9.14739 16.3714C9.15144 16.3731 9.15591 16.3702 9.15591 16.3658C9.15591 16.3633 9.15743 16.361 9.1597 16.3601C11.9237 15.1893 13.0302 12.9668 13.0302 11.7084V9.61641C13.0302 9.18275 12.7506 8.79851 12.3381 8.66499L9.15928 7.63633C9.15727 7.63568 9.15591 7.63381 9.15591 7.6317C9.15591 7.62839 9.15268 7.62604 9.14953 7.62706L9.1431 7.62914C9.14114 7.62978 9.13903 7.62978 9.13707 7.62914L9.13063 7.62706C9.12749 7.62604 9.12426 7.62839 9.12426 7.6317Z"
                    ></path>
                  </mask>
                  <path
                    d="M9.13063 7.62706L9.50009 6.48535L9.13063 7.62706ZM9.15928 7.63633L9.52874 6.49462L9.15928 7.63633ZM9.1597 16.3601L9.62776 17.465L9.1597 16.3601ZM9.14739 16.3714L9.61158 15.2648L9.14739 16.3714ZM9.13278 16.3714L8.66857 15.2649L9.13278 16.3714ZM9.12047 16.3601L8.65241 17.465L9.12047 16.3601ZM9.1431 7.62914L9.51256 8.77085L9.1431 7.62914ZM9.13707 7.62914L8.76761 8.77085L9.13707 7.62914ZM9.12089 7.63633L8.75143 6.49462L9.12089 7.63633ZM9.13662 16.3698L9.60137 17.4762L9.13662 16.3698ZM9.14354 16.3698L9.60827 15.2635L9.14354 16.3698ZM9.14953 7.62706L8.78007 6.48535L9.14953 7.62706ZM6.31158 9.8067L9.49035 8.77804L8.75143 6.49462L5.57266 7.52328L6.31158 9.8067ZM6.45 11.7084V9.61641H4.05V11.7084H6.45ZM9.58852 15.2551C7.19243 14.2401 6.45 12.4076 6.45 11.7084H4.05C4.05 13.526 5.52053 16.1384 8.65241 17.465L9.58852 15.2551ZM9.59699 17.478C9.59845 17.4774 9.59991 17.4768 9.60137 17.4762L8.67188 15.2635C8.67078 15.2639 8.66967 15.2644 8.66857 15.2649L9.59699 17.478ZM9.61158 15.2648C9.61048 15.2644 9.60937 15.2639 9.60827 15.2635L8.67881 17.4762C8.68027 17.4768 8.68174 17.4774 8.6832 17.478L9.61158 15.2648ZM9.62776 17.465C12.7596 16.1384 14.2302 13.526 14.2302 11.7084H11.8302C11.8302 12.4076 11.0877 14.2401 8.69164 15.2551L9.62776 17.465ZM14.2302 11.7084V9.61641H11.8302V11.7084H14.2302ZM12.7075 7.52328L9.52874 6.49462L8.78982 8.77804L11.9686 9.8067L12.7075 7.52328ZM9.51256 8.77085L9.51899 8.76877L8.78007 6.48535L8.77364 6.48744L9.51256 8.77085ZM9.50653 6.48744L9.50009 6.48535L8.76117 8.76877L8.76761 8.77085L9.50653 6.48744ZM9.50009 6.48535C8.72188 6.23352 7.92426 6.81375 7.92426 7.6317H10.3243C10.3243 8.44303 9.5331 9.01857 8.76117 8.76877L9.50009 6.48535ZM9.52874 6.49462C10.0219 6.65421 10.3559 7.11346 10.3559 7.6317H7.9559C7.9559 8.15416 8.29264 8.61715 8.78982 8.77804L9.52874 6.49462ZM14.2302 9.61641C14.2302 8.66235 13.6152 7.81702 12.7075 7.52328L11.9686 9.8067C11.8861 9.78 11.8302 9.70315 11.8302 9.61641H14.2302ZM10.3559 16.3658C10.3559 16.8558 10.0593 17.2822 9.62776 17.465L8.69164 15.2551C8.25558 15.4398 7.9559 15.8707 7.9559 16.3658H10.3559ZM8.6832 17.478C9.47895 17.8118 10.3559 17.2267 10.3559 16.3658H7.9559C7.9559 15.5136 8.82393 14.9344 9.61158 15.2648L8.6832 17.478ZM7.92426 16.3658C7.92426 17.2267 8.80123 17.8118 9.59699 17.478L8.66857 15.2649C9.45623 14.9344 10.3243 15.5136 10.3243 16.3658H7.92426ZM8.65241 17.465C8.2209 17.2822 7.92426 16.8558 7.92426 16.3658H10.3243C10.3243 15.8707 10.0246 15.4398 9.58852 15.2551L8.65241 17.465ZM8.77364 6.48744C9.01185 6.41035 9.26831 6.41035 9.50653 6.48744L8.76761 8.77085C9.00974 8.84921 9.27042 8.84921 9.51256 8.77085L8.77364 6.48744ZM9.49035 8.77804C9.98752 8.61715 10.3243 8.15416 10.3243 7.6317H7.92426C7.92426 7.11346 8.25828 6.65421 8.75143 6.49462L9.49035 8.77804ZM9.60137 17.4762C9.30633 17.6001 8.97384 17.6001 8.67881 17.4762L9.60827 15.2635C9.30882 15.1377 8.97134 15.1377 8.67188 15.2635L9.60137 17.4762ZM10.3559 7.6317C10.3559 6.81375 9.55829 6.23352 8.78007 6.48535L9.51899 8.76877C8.74707 9.01857 7.9559 8.44303 7.9559 7.6317H10.3559ZM5.57266 7.52328C4.66494 7.81702 4.05 8.66235 4.05 9.61641H6.45C6.45 9.70315 6.3941 9.78 6.31158 9.8067L5.57266 7.52328Z"
                    fill="white"
                    mask="url(#path-2-inside-1_23913_25810)"
                  ></path>
                  <rect
                    x="0.5"
                    y="3.5"
                    width="17"
                    height="17"
                    rx="8.5"
                    stroke="#FAFAFA"
                  ></rect>
                  <rect
                    x="12.5"
                    y="3.5"
                    width="17"
                    height="17"
                    rx="8.5"
                    fill="url(#paint0_linear_23913_25810)"
                  ></rect>
                  <path
                    d="M23.3 8L22.5 8.8L23.3 9.6L24.1 8.8L23.3 8Z"
                    fill="white"
                  ></path>
                  <path
                    d="M18.1 14L17.5 14.6L18.1 15.2L18.7 14.6L18.1 14Z"
                    fill="white"
                  ></path>
                  <path
                    d="M23.5 14L22.5 15L23.5 16L24.5 15L23.5 14Z"
                    fill="white"
                  ></path>
                  <path
                    d="M20.5 9L17.5 12L20.5 15L23.5 12L20.5 9ZM19.5024 12L20.5 11.0024L21.4976 12L20.5 12.9976L19.5024 12Z"
                    fill="white"
                  ></path>
                  <rect
                    x="12.5"
                    y="3.5"
                    width="17"
                    height="17"
                    rx="8.5"
                    stroke="#FAFAFA"
                  ></rect>
                  <rect
                    x="24.5"
                    y="3.5"
                    width="17"
                    height="17"
                    rx="8.5"
                    fill="#5E6673"
                  ></rect>
                  <path
                    d="M33.625 8.25H32.375V11.375H29.25V12.625H32.375V15.75H33.625V12.625H36.75V11.375L33.625 11.375V8.25Z"
                    fill="white"
                  ></path>
                  <rect
                    x="24.5"
                    y="3.5"
                    width="17"
                    height="17"
                    rx="8.5"
                    stroke="#FAFAFA"
                  ></rect>
                  <circle
                    cx="41.9167"
                    cy="2.91667"
                    r="2.91667"
                    fill="#E33B54"
                  ></circle>
                  <defs>
                    <linearGradient
                      id="paint0_linear_23913_25810"
                      x1="21"
                      y1="4"
                      x2="21"
                      y2="20"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.09375" stop-color="#2ECCFF"></stop>
                      <stop offset="1" stop-color="#0500FF"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <p class="title-text text-textPrimary font-medium text-unset">
                  {{ language.managewallet }}
                </p>
                <p class="title-text text-textSecondary font-normal text-unset">
                  {{ language.allmanagewallet }}
                </p>
              </div>
            </div>
            <div>
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
                  d="M12.2886 11.9993L8.3996 8.11035L10.1674 6.34258L15.8242 11.9994L14.0565 13.7672L14.0563 13.7671L10.1672 17.6562L8.39941 15.8885L12.2886 11.9993Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <div
            @click="showOpen = true"
            class="flex items-center rounded-xl justify-between cursor-pointer my-1 py-3 px-2"
          >
            <div class="flex items-center flex-row space-x-4">
              <div>
                <svg
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
              </div>
              <div>
                <p class="title-text text-textPrimary font-medium text-unset">
                  {{ language.check }}Secret Phrase
                </p>
                <p
                  class="title-text text-textSecondary font-normal text-unset"
                ></p>
              </div>
            </div>
            <div></div>
          </div>
          <div
            class="flex items-center rounded-xl justify-between cursor-pointer my-1 py-3 px-2"
          >
            <div class="flex items-center flex-row space-x-4">
              <div>
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
                    d="M15.2307 20.4027C18.2316 19.2481 20.4577 16.5321 20.9137 13.25H16.9718C16.8248 16.1102 16.1791 18.638 15.2307 20.4027ZM14.473 13.25C14.2952 17.3518 13.2556 20.5 11.9998 20.5C10.744 20.5 9.70447 17.3518 9.52667 13.25H14.473ZM14.473 10.75H9.52667C9.70447 6.64821 10.744 3.5 11.9998 3.5C13.2556 3.5 14.2952 6.64821 14.473 10.75ZM16.9718 10.75H20.9137C20.4577 7.46786 18.2316 4.75191 15.2307 3.59731C16.1791 5.36198 16.8248 7.88979 16.9718 10.75ZM7.03566 10.75C7.18282 7.88774 7.82928 5.35836 8.77882 3.59353C5.77291 4.74598 3.54249 7.46427 3.08594 10.75H7.03566ZM7.03566 13.25H3.08594C3.54249 16.5357 5.77291 19.254 8.77882 20.4065C7.82928 18.6416 7.18282 16.1123 7.03566 13.25Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div>
                <p class="title-text text-textPrimary font-medium text-unset">
                  {{ language.language }}
                </p>
                <p class="title-text text-textSecondary font-normal text-unset">
                  {{ lang === "zh" ? language.zh_cn : language.english }}
                </p>
              </div>
            </div>
            <van-popover
              trigger="manual"
              :show="showPopover"
              theme="dark"
              placement="left-start"
              @mouseleave="showPopover = false"
              class="w-[130px]"
              @select="(option) => onSelect(option.value)"
              :actions="actions"
            >
              <template #reference>
                <svg
                  @click="showPopover = true"
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
                    d="M12.2886 11.9993L8.3996 8.11035L10.1674 6.34258L15.8242 11.9994L14.0565 13.7672L14.0563 13.7671L10.1672 17.6562L8.39941 15.8885L12.2886 11.9993Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </template>
            </van-popover>
          </div>
          <div class="border-t border-line my-2"></div>
          <div
            @click="lock"
            class="flex items-center rounded-xl justify-between cursor-pointer my-1 py-3 px-2"
          >
            <div class="flex items-center flex-row space-x-4">
              <div>
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
                    d="M7 8V10L5 10V21H19V10L17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8ZM14.5 10V8C14.5 6.61929 13.3807 5.5 12 5.5C10.6193 5.5 9.5 6.61929 9.5 8V10H14.5ZM13.5 18V13H10.5V18H13.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div>
                <p class="title-text text-textPrimary font-medium text-unset">
                  {{ language.locking }}
                </p>
                <p
                  class="title-text text-textSecondary font-normal text-unset"
                ></p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <!-- Main modal -->
    <div v-if="showOpen" class="flex items-center justify-center">
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
            <div class="flex-grow">
              <h3 class="header-text text-textPrimary font-semibold text-unset">
                {{ language.viewphrase }}
              </h3>
            </div>
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
            <div class="text-start" v-if="!mnemonic">
              <div class="input-field space-x-1 h-12">
                <input
                  data-testid="password-field"
                  class="ph-no-capture w-full block flex-1 outline-none bg-transparent title-text font-medium text-left"
                  :placeholder="password"
                  :type="showPassword ? 'text' : 'password'"
                  spellcheck="false"
                  v-model="password"
                />
                <div class="flex space-x-2">
                  <div
                    class="flex w-full"
                    data-tooltip-id="button-tooltip-19"
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
            <div class="p-[24px] text-white" v-if="mnemonic">
              {{ mnemonic }}
            </div>
            <div class="tip" v-if="tip">Wrong password, please re-enter</div>

            <div class="pt-4">
              <div
                data-testid="do-not-share-seedphrase-alert"
                class="warning-alert space-x-2 items-center"
              >
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
                  {{ language.mnemonicphrasewarn_1 }}<br />{{
                    language.mnemonicphrasewarn_2
                  }}
                </div>
              </div>
            </div>
            <div class="pt-4" v-if="!mnemonic">
              <div
                class="flex w-full"
                @click="submit"
                :disabled="password === ''"
                data-tooltip-id="button-tooltip-20"
                data-tooltip-place="top-end"
              >
                <button
                  type="button"
                  class="outline-none bg-primary text-backgroundPrimary hover:bg-primaryHover active:bg-primaryPressed disabled:bg-primaryPressed default-button w-full"
                >
                  {{ language.show }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
import CryptoJS from "crypto-js";
import { getMessage } from "@/utils/Utils";

export default defineComponent({
  name: "Setting",
  data() {
    return {
      list: [],
      password: "",
      mnemonic: "",
      tip: false,
      showPopover: false,
      active: 2,
      showOpen: false,
      showPassword: false,
      app: null,
      actions: [
        { text: "简体中文", value: "zh" },
        { text: "English", value: "en" },
      ],
      language: {
        managewallet: getMessage("managewallet"),
        allmanagewallet: getMessage("allmanagewallet"),
        check: getMessage("check"),
        language: getMessage("language"),
        zh_cn: getMessage("zh_cn"),
        locking: getMessage("locking"),
        viewphrase: getMessage("viewphrase"),
        password: getMessage("password"),
        mnemonicphrasewarn_1: getMessage("mnemonicphrasewarn_1"),
        mnemonicphrasewarn_2: getMessage("mnemonicphrasewarn_2"),
        show: getMessage("show"),
        home: getMessage("home"),
        history: getMessage("history"),
        setting: getMessage("setting"),
        english: getMessage("english"),
      },
    };
  },
  created() {
    this.lang = localStorage.getItem("lang");
    this.app = getCurrentInstance();
    const walletStr = localStorage.getItem("wallet");
    if (walletStr) {
      const walletArr: Array<LocalWalletModel> = JSON.parse(walletStr);
      const wallet = walletArr.find((el) => el.isDefault === 1);
      if (wallet) {
        const walletDes = decryptByDES(
          wallet.wallet,
          this.app.appContext.config.globalProperties.password
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
    onSelect(value) {
      this.showPopover = false;
      localStorage.setItem("lang", value);
      if (value !== this.lang) {
        this.lang = value;
        this.language = {
          managewallet: getMessage("managewallet"),
          allmanagewallet: getMessage("allmanagewallet"),
          check: getMessage("check"),
          language: getMessage("language"),
          zh_cn: getMessage("zh_cn"),
          locking: getMessage("locking"),
          viewphrase: getMessage("viewphrase"),
          password: getMessage("password"),
          mnemonicphrasewarn_1: getMessage("mnemonicphrasewarn_1"),
          mnemonicphrasewarn_2: getMessage("mnemonicphrasewarn_2"),
          show: getMessage("show"),
          home: getMessage("home"),
          history: getMessage("history"),
          setting: getMessage("setting"),
          english: getMessage("english"),
        };
      }
    },
    change(index) {
      if (index === 0 || index === 1) {
        this.$router.push(index === 0 ? "home" : "history");
      }
    },
    changeLang() {
      const _lang = localStorage.getItem("lang");
      localStorage.setItem("lang", _lang === "zh" ? "en" : "zh");
      this.lang = _lang === "zh" ? "en" : "zh";
      this.language = {
        managewallet: getMessage("managewallet"),
        allmanagewallet: getMessage("allmanagewallet"),
        check: getMessage("check"),
        language: getMessage("language"),
        zh_cn: getMessage("zh_cn"),
        locking: getMessage("locking"),
        viewphrase: getMessage("viewphrase"),
        password: getMessage("password"),
        mnemonicphrasewarn_1: getMessage("mnemonicphrasewarn_1"),
        mnemonicphrasewarn_2: getMessage("mnemonicphrasewarn_2"),
        show: getMessage("show"),
        home: getMessage("home"),
        history: getMessage("history"),
        setting: getMessage("setting"),
        english: getMessage("english"),
      };
    },
    submit() {
      const walletStr = localStorage.getItem("wallet");
      if (walletStr) {
        const walletArr: Array<LocalWalletModel> = JSON.parse(walletStr);
        const wallet = walletArr.find((el) => el.isDefault === 1);
        if (wallet) {
          const walletDes = decryptByDES(wallet.wallet, this.password);
          if (Object.prototype.toString.call(walletDes) === "[object String]") {
            this.tip = false;
            this.mnemonic = JSON.parse(walletDes).mnemonic;
          } else {
            this.tip = true;
          }
        }
      }
    },
    encryptByDES(content: string, key: string) {
      const keyHex = CryptoJS.enc.Utf8.parse(CryptoJS.SHA256(key).toString());
      const encrypted = CryptoJS.DES.encrypt(content, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      });
      return encrypted.toString();
    },
    lock() {
      this.app.appContext.config.globalProperties.password = null;
      this.$router.push("enter-input");
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
.receive-dialog {
  width: 100vw;
  height: 100vh;
  .receive-dialog-content {
    width: 350px;
  }
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
</style>
