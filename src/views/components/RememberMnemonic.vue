<template>
  <div class="copy-mnemonic">
    <div
      class="relative flex flex-col flex-grow w-full h-full self-center pt-2 md:max-w-[438px]"
    >
      <img src="../../../assets/logo.png" alt="" class="w-[62px] mx-auto" />
      <div class="bg-backgroundPrimary border border-line rounded p-6 mb-11">
        <div class="flex flex-col items-center text-center space-y-4">
          <div class="w-full flex items-center justify-between space-x-4">
            <div class="w-full flex flex-col items-center justify-center">
              <div
                class="w-full flex items-center justify-center h-1 rounded-curvy bg-primary opacity-100"
              ></div>
            </div>
            <div class="w-full flex flex-col items-center justify-center">
              <div
                class="w-full flex items-center justify-center h-1 rounded-curvy bg-primary opacity-100"
              ></div>
            </div>
          </div>
          <h2
            data-testid="onboarding-step-title"
            class="screamer-text text-textPrimary font-semibold text-unset"
          >
            {{language.backyour}}Secret Phrase
          </h2>
          <div class="w-full mt-6 flex flex-col space-y-6">
            <div
              class="bg-backgroundSecondary p-4 border-solid rounded-lg transition w-full"
            >
              <div class="flex items-center space-x-6 text-start">
                <svg
                  fill="none"
                  width="96"
                  height="96"
                  viewBox="0 0 96 96"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M53.6914 38.2891L58.8418 37.6777C58.16 38.2791 58.004 39.5899 58.4896 40.6064L53.3392 41.2178C52.8536 40.2014 53.0121 38.8905 53.6914 38.2891Z"
                    fill="#1B1B1C"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M59.1797 42.0567L58.4878 40.6074L53.3374 41.2188L54.0293 42.6681C54.3765 43.3977 54.9603 43.7777 55.5138 43.7097L60.6642 43.0983C60.1107 43.1637 59.5269 42.7838 59.1797 42.0567Z"
                    fill="#48FF91"
                  ></path>
                  <path
                    d="M62.3432 30.6374L67.4936 30.0234L58.8408 37.6773L53.6904 38.2887L62.3432 30.6374Z"
                    fill="#1B1B1C"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M62.9672 30.3458L68.1176 29.7344C67.8987 29.7595 67.6849 29.8551 67.4937 30.0262L62.3433 30.6376C62.5345 30.4665 62.7484 30.3735 62.9672 30.3458Z"
                    fill="#48FF91"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M63.0068 27.5973L68.1572 26.9859C69.1511 26.8676 70.2003 27.547 70.8243 28.8553L65.6739 29.4667C65.0499 28.1584 64.0007 27.479 63.0068 27.5973Z"
                    fill="#48FF91"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M78.6147 67.7682L83.7651 67.1543L86.1177 72.0833L80.9673 72.6972L78.6147 67.7682Z"
                    fill="#48FF91"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M80.969 72.6979L86.1194 72.084L75.7582 81.2475L70.6104 81.8589L80.969 72.6979Z"
                    fill="#0500FF"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M61.8862 28.1214C63.1065 27.042 64.8023 27.6459 65.6729 29.47L79.4937 58.4224C79.0357 61.3436 78.6382 67.4501 78.6156 67.7722L80.9681 72.7011L70.6069 81.8647L51.5552 41.9573C50.6847 40.1331 50.9665 37.7831 52.1868 36.7037L61.8837 28.1265L61.8862 28.1214ZM65.147 32.8391L64.4551 31.3898C63.9695 30.3733 63.0235 30.0387 62.3441 30.6375L53.6914 38.2889C53.0095 38.8902 52.8535 40.2011 53.3391 41.2176L54.031 42.6668C54.5166 43.6833 55.4602 44.0205 56.142 43.4191L64.7948 35.7678C65.4741 35.1664 65.6326 33.8556 65.147 32.8391Z"
                    fill="url(#paint0_linear_51_272591)"
                  ></path>
                  <path
                    d="M65.6743 29.4694L70.8247 28.8555L84.6455 57.8079L79.4951 58.4193L65.6743 29.4694Z"
                    fill="#48FF91"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M79.4929 58.418L84.6432 57.8066C84.1853 60.7278 83.7878 66.8343 83.7651 67.1564L78.6147 67.7678C78.6349 67.4457 79.0349 61.3392 79.4929 58.418Z"
                    fill="#48FF91"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M82.0431 72.5695L79.6906 67.6405C79.6981 67.5097 79.8591 65.0389 80.1007 62.3945L88.5798 80.1555L78.9257 88.6925L74.437 79.2924L82.0406 72.567L82.0431 72.5695Z"
                    fill="url(#paint1_linear_51_272591)"
                  ></path>
                  <path
                    d="M78.5415 75.666L80.4915 79.7496L79.6461 82.2506L81.596 86.3342"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M84.647 83.7914L83.3839 81.1445L81.751 82.4806L83.014 85.125"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M79.9902 74.3887L81.9377 78.4723L83.9832 78.4169L85.9332 82.5005"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M80.1021 62.3935L83.9667 61.9355L92.4459 79.6965L88.5812 80.1569L80.1021 62.3935Z"
                    fill="#FFAEFE"
                  ></path>
                  <path
                    d="M85.3002 73.2805L87.5572 69.4561L83.9667 61.9355L80.1021 62.3935L85.3002 73.2805Z"
                    fill="#1B1B1C"
                  ></path>
                  <path
                    d="M88.5808 80.1577L92.4455 79.6973L82.7939 88.2343L78.9292 88.6947L88.5808 80.1577Z"
                    fill="#0500FF"
                  ></path>
                  <path
                    d="M88.4889 81.6118L90.5621 81.3652L84.4229 86.7949L82.3472 87.0415L88.4889 81.6118Z"
                    fill="#1B1B1C"
                  ></path>
                  <path
                    d="M90.5633 81.3646L92.4479 79.6965L83.9687 61.9355L80.104 62.396C79.8625 65.0404 79.7015 67.5112 79.6939 67.642L82.0464 72.571L74.4429 79.2964L78.9315 88.6964L82.7962 88.236L87.3327 84.2229L90.5658 81.3646H90.5633Z"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M61.8862 28.1214C63.1065 27.042 64.8023 27.6459 65.6729 29.47L79.4937 58.4224C79.0357 61.3436 78.6382 67.4501 78.6156 67.7722L80.9681 72.7011L70.6069 81.8647L51.5552 41.9573C50.6847 40.1331 50.9665 37.7831 52.1868 36.7037L61.8837 28.1265L61.8862 28.1214ZM65.147 32.8391L64.4551 31.3898C63.9695 30.3733 63.0235 30.0387 62.3441 30.6375L53.6914 38.2889C53.0095 38.8902 52.8535 40.2011 53.3391 41.2176L54.031 42.6668C54.5166 43.6833 55.4602 44.0205 56.142 43.4191L64.7948 35.7678C65.4741 35.1664 65.6326 33.8556 65.147 32.8391Z"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M64.5782 32.5959L62.6458 34.3043C62.6156 34.3748 62.5829 34.4452 62.5402 34.5107C61.5815 35.9951 57.8225 35.1372 55.1027 33.3784C53.4722 32.3242 52.1614 31.0184 51.4116 29.6999C50.7876 28.6029 50.6442 27.6393 51.0166 27.0606C51.2279 26.7335 51.5751 26.5196 52.0179 26.4064C52.3627 25.7271 52.6671 25.0301 52.9313 24.3281C51.3336 24.3508 50.0353 24.8942 49.3358 25.9761C48.5307 27.2216 48.6489 28.8948 49.6705 30.6913C50.5762 32.2814 52.1186 33.8338 54.0132 35.0592C56.2575 36.5109 58.5924 37.2481 60.5097 37.2481C62.1577 37.2481 63.4988 36.7022 64.2133 35.5976C64.7593 34.7547 64.8549 33.7105 64.5706 32.5959H64.5782Z"
                    fill="#2D9FFF"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M57.5195 25.9437C57.3434 26.4142 57.1547 26.8797 56.9534 27.3426C56.9509 27.3502 56.9484 27.3552 56.9434 27.3628C57.4642 27.6093 57.9749 27.8886 58.453 28.1981C59.077 28.6032 59.6808 29.0762 60.2293 29.5844L61.7465 28.2434C61.0999 27.6345 60.3602 27.0508 59.5399 26.5199C58.9235 26.1223 58.302 25.7801 57.6831 25.4883C57.6302 25.6418 57.5749 25.7927 57.5195 25.9462V25.9437Z"
                    fill="#2D9FFF"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M42.813 33.0713L45.5656 34.0979C47.7948 34.9307 50.7587 33.4211 53.2069 30.0244L51.0506 28.1172C48.5018 32.1278 45.2284 33.9721 42.813 33.0713Z"
                    fill="#F4F4F7"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M43.7441 32.6439C42.7654 31.2726 42.3326 29.2497 42.403 26.9727C42.2747 27.0859 42.1363 27.1916 41.9778 27.2897C41.4645 27.6042 40.8607 27.7879 40.2342 27.8482C40.0933 30.9304 40.6493 33.6755 41.9678 35.5197C44.9015 39.626 50.5274 37.754 54.7569 31.3934L53.207 30.0221C50.0016 34.468 45.9155 35.6808 43.7466 32.6439H43.7441Z"
                    fill="#F4F4F7"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M37.4652 27.2969C37.4023 30.1853 37.9659 32.7442 39.2138 34.4928C39.8781 35.4238 40.6832 36.0478 41.579 36.3824L44.3315 37.409C43.4358 37.0743 42.6332 36.4503 41.9664 35.5194C40.6505 33.6751 40.0945 30.9301 40.2329 27.8479C39.2843 27.941 38.2829 27.7523 37.4652 27.2994V27.2969Z"
                    fill="#F4F4F7"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M43.2061 25.5269L42.8085 29.5828C42.879 28.8758 42.5771 28.1361 41.8927 27.5322C40.5441 26.3421 38.2243 26.1358 36.702 27.0693C35.9548 27.5297 35.5396 28.1788 35.4717 28.8632L35.8692 24.8073C35.9372 24.1229 36.3498 23.4738 37.0996 23.0134C38.6218 22.0774 40.9416 22.2862 42.2902 23.4763C42.9746 24.0802 43.274 24.8224 43.2061 25.5269Z"
                    fill="#1B1B1C"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M37.4332 41.8832L24.244 30.2287C23.8238 29.8589 23.6401 29.4035 23.6829 28.9707L23.2853 33.0266C23.2426 33.4594 23.4262 33.9148 23.8464 34.2846L37.0357 45.9391L37.4332 41.8832Z"
                    fill="#1B1B1C"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M57.5096 34.5879C57.4694 35.0081 57.2152 35.4056 56.7548 35.6899L45.5054 42.6066L45.1079 46.6625L56.3573 39.7458C56.8152 39.464 57.0693 39.064 57.1121 38.6438L57.5096 34.5879Z"
                    fill="#1B1B1C"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M45.5067 42.6069L45.1091 46.6628L37.0376 45.9432L37.4351 41.8848L45.5067 42.6069Z"
                    fill="#1B1B1C"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M56.9494 33.329L42.1474 20.2505L37.5077 19.8379L24.4393 27.8717C23.5058 28.4454 23.4203 29.5021 24.2455 30.2318L27.9014 33.4599L35.3464 40.0369L37.4373 41.8837L45.5088 42.6033L56.7582 35.6866C57.6916 35.1129 57.7772 34.0562 56.9519 33.3265L56.9494 33.329ZM41.9763 27.3207C40.4566 28.2541 38.1317 28.0478 36.7856 26.8577C36.0912 26.2438 35.7918 25.4915 35.8748 24.7769C35.9503 24.1051 36.3629 23.4661 37.1001 23.0132C38.6223 22.0772 40.9422 22.286 42.2908 23.4761C42.9852 24.09 43.2846 24.8423 43.2016 25.5594C43.1261 26.2312 42.7135 26.8703 41.9763 27.3232V27.3207Z"
                    fill="url(#paint2_linear_51_272591)"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M24.6578 43.8689L24.4339 46.1233L23.1406 44.981L23.3646 42.7266L24.6578 43.8689Z"
                    fill="#FFAEFE"
                  ></path>
                  <path
                    d="M35.3404 40.0371L18.6966 50.27L18.4727 52.5244L35.1164 42.2915L35.3404 40.0371Z"
                    fill="#1B1B1C"
                  ></path>
                  <path
                    d="M23.3637 42.7266L23.1398 44.981L4.83789 56.2303L5.06182 53.9759L23.3637 42.7266Z"
                    fill="#1B1B1C"
                  ></path>
                  <path
                    d="M16.1335 50.0407L15.9096 52.2951L15.2881 51.7466L15.5145 49.4922L16.1335 50.0407Z"
                    fill="#FFAEFE"
                  ></path>
                  <path
                    d="M18.6989 50.27L18.475 52.5244L15.9111 52.2954L16.1351 50.041L18.6989 50.27Z"
                    fill="#FFAEFE"
                  ></path>
                  <path
                    d="M26.3694 45.5526L26.1455 47.8044L31.3538 44.604L31.5802 42.3496L26.3694 45.5526Z"
                    fill="#0500FF"
                  ></path>
                  <path
                    d="M21.4529 43.9016L21.229 46.156L23.1412 44.981L23.3651 42.7266L21.4529 43.9016Z"
                    fill="#0500FF"
                  ></path>
                  <path
                    d="M5.06286 53.9752L4.83893 56.2295L3.55322 55.0923L3.77715 52.8379L5.06286 53.9752Z"
                    fill="#FFAEFE"
                  ></path>
                  <path
                    d="M35.3409 40.0367L18.6971 50.2696L16.1333 50.0406L15.5143 49.4921L24.6577 43.8687L23.3644 42.7264L5.06257 53.9757L3.77686 52.8385L4.16936 48.0454L31.0661 31.5098L34.0779 34.1718L32.6991 37.7043L35.3409 40.0367Z"
                    fill="url(#paint3_linear_51_272591)"
                  ></path>
                  <path
                    d="M19.6626 46.9434L15.5161 49.4921L16.1351 50.0406L18.6989 50.2696L22.8555 47.7133L19.6626 46.9434Z"
                    fill="#F4F4F7"
                  ></path>
                  <path
                    d="M17.3941 46.395L9.82574 44.5684L4.16962 48.0456L3.93311 50.9365L8.29345 51.9908L17.3941 46.395Z"
                    fill="#F4F4F7"
                  ></path>
                  <path
                    d="M9.93213 46.9356L23.8586 38.3734L24.1529 35.7617"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M10.5575 47.4883C10.1675 47.7273 9.56868 47.6745 9.22398 47.37C9.04534 47.2115 8.96986 47.0178 8.98999 46.8341C9.01011 46.6605 9.11579 46.497 9.30449 46.3812C9.69449 46.1397 10.2933 46.195 10.638 46.4995C10.8167 46.658 10.8921 46.8517 10.872 47.0354C10.8519 47.209 10.7462 47.3726 10.5575 47.4883Z"
                    fill="#0500FF"
                  ></path>
                  <path
                    d="M13.4779 45.6953C13.0879 45.9344 12.4891 45.8815 12.1444 45.5771C11.9657 45.4186 11.8903 45.2248 11.9104 45.0412C11.9305 44.8676 12.0362 44.704 12.2249 44.5883C12.6149 44.3467 13.2137 44.4021 13.5584 44.7065C13.7371 44.865 13.8125 45.0588 13.7924 45.2424C13.7723 45.4161 13.6666 45.5796 13.4779 45.6953Z"
                    fill="#0500FF"
                  ></path>
                  <path
                    d="M16.3959 43.9004C16.0059 44.1394 15.4071 44.0866 15.0624 43.7822C14.8837 43.6237 14.8082 43.4299 14.8284 43.2462C14.8485 43.0726 14.9542 42.9091 15.1429 42.7933C15.5329 42.5518 16.1317 42.6072 16.4764 42.9116C16.655 43.0701 16.7305 43.2639 16.7104 43.4475C16.6903 43.6211 16.5846 43.7847 16.3959 43.9004Z"
                    fill="#0500FF"
                  ></path>
                  <path
                    d="M35.3412 40.0367L32.6994 37.7043L34.0782 34.1718L31.0664 31.5098L4.16966 48.0454L3.77715 52.8385L3.55322 55.0929L4.83893 56.2301L15.4945 49.6808L15.2882 51.7465L15.9096 52.295L18.4735 52.524L35.1173 42.2911L35.3412 40.0367Z"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M55.6527 13.3871C55.1419 12.67 54.523 12.1894 53.8336 11.9328L51.081 10.9062C51.7704 11.1629 52.3868 11.6435 52.9001 12.3605C55.2375 15.6339 54.4651 22.5959 51.1791 27.9149C51.1363 27.9828 51.0936 28.0507 51.0508 28.1187L53.2071 30.0259C53.4536 29.6837 53.6952 29.3214 53.9317 28.9414C57.2202 23.6225 57.9901 16.6605 55.6527 13.3871Z"
                    fill="url(#paint4_linear_51_272591)"
                  ></path>
                  <path
                    d="M44.2043 15.3212C47.5381 9.92671 51.8809 7.43078 55.0712 8.62088L52.3187 7.59432C49.1308 6.40422 44.7881 8.90016 41.4518 14.2946C38.9382 18.3606 37.5594 23.1663 37.4663 27.2977C38.284 27.7505 39.2854 27.9393 40.234 27.8462C40.4177 23.823 41.7864 19.2286 44.2018 15.3186L44.2043 15.3212Z"
                    fill="url(#paint5_linear_51_272591)"
                  ></path>
                  <path
                    d="M41.4505 14.2949L42.7287 14.9189C41.8279 16.3757 41.0731 17.9281 40.4692 19.5082L41.8606 20.1347"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M57.4312 10.5072C54.3968 6.25755 48.474 8.41382 44.2017 15.3204C41.7838 19.2304 40.415 23.8247 40.2339 27.8479C40.8604 27.7875 41.4642 27.6039 41.9775 27.2894C42.136 27.1912 42.2744 27.0856 42.4027 26.9723C42.4984 23.8197 43.5576 20.179 45.4673 17.0917C48.7558 11.7728 53.3149 10.1147 55.6524 13.3856C57.9898 16.659 57.2174 23.6209 53.9314 28.9399C53.6949 29.3198 53.4533 29.6796 53.2067 30.0218L54.7566 31.3931C54.9051 31.1717 55.051 30.9427 55.1944 30.7112C59.4642 23.8046 60.4681 14.7593 57.4312 10.5097V10.5072Z"
                    fill="#2D9FFF"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M57.4333 10.5079C56.7967 9.61472 56.0318 9.00583 55.1814 8.66365C55.0455 8.6083 53.3572 7.97928 52.3206 7.59432C49.1328 6.40422 44.79 8.90016 41.4537 14.2946C38.9402 18.3606 37.5614 23.1663 37.4683 27.2977C38.286 27.7505 39.2874 27.9393 40.2359 27.8462C40.8624 27.7858 41.4663 27.6021 41.9796 27.2876C42.1381 27.1895 42.2765 27.0838 42.4048 26.9706C42.5004 23.8179 43.5597 20.1772 45.4694 17.09C47.5476 13.7285 50.1367 11.8314 52.3483 11.7156C52.5445 11.9043 52.7307 12.1157 52.9018 12.3598C55.2393 15.6332 54.4668 22.5951 51.1808 27.9141C51.1381 27.982 51.0953 28.05 51.0525 28.1179L53.2088 30.0251L54.7587 31.3938C54.9071 31.1724 55.0531 30.9434 55.1965 30.712C59.4662 23.8054 60.4702 14.7601 57.4333 10.5104V10.5079Z"
                    stroke="#0500FF"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_51_272591"
                      x1="61.9827"
                      y1="72.2573"
                      x2="71.1308"
                      y2="35.029"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#48FF91"></stop>
                      <stop offset="1" stop-color="#FFF465"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_51_272591"
                      x1="77.7401"
                      y1="76.0095"
                      x2="86.1739"
                      y2="73.8408"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFAEFE"></stop>
                      <stop offset="1" stop-color="#FFF465"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_51_272591"
                      x1="51.451"
                      y1="32.3909"
                      x2="26.22"
                      y2="29.534"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0502FF"></stop>
                      <stop offset="0.18" stop-color="#1131FF"></stop>
                      <stop offset="0.36" stop-color="#1B59FF"></stop>
                      <stop offset="0.53" stop-color="#2377FF"></stop>
                      <stop offset="0.69" stop-color="#288DFF"></stop>
                      <stop offset="0.85" stop-color="#2B9AFF"></stop>
                      <stop offset="1" stop-color="#2D9FFF"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_51_272591"
                      x1="4.9359"
                      y1="41.2612"
                      x2="34.817"
                      y2="44.6446"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFAEFE"></stop>
                      <stop offset="1" stop-color="#FFF465"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_51_272591"
                      x1="51.6885"
                      y1="21.7431"
                      x2="55.1556"
                      y2="14.5367"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F4F4F7"></stop>
                      <stop offset="0.15" stop-color="#F0F2F7"></stop>
                      <stop offset="0.29" stop-color="#E4EDF7"></stop>
                      <stop offset="0.43" stop-color="#D0E4F8"></stop>
                      <stop offset="0.57" stop-color="#B5D9F9"></stop>
                      <stop offset="0.71" stop-color="#91C9FA"></stop>
                      <stop offset="0.85" stop-color="#65B7FC"></stop>
                      <stop offset="0.98" stop-color="#33A1FE"></stop>
                      <stop offset="1" stop-color="#2D9FFF"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_51_272591"
                      x1="44.026"
                      y1="19.2817"
                      x2="40.6673"
                      y2="25.5305"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F4F4F7"></stop>
                      <stop offset="0.15" stop-color="#F0F2F7"></stop>
                      <stop offset="0.29" stop-color="#E4EDF7"></stop>
                      <stop offset="0.43" stop-color="#D0E4F8"></stop>
                      <stop offset="0.57" stop-color="#B5D9F9"></stop>
                      <stop offset="0.71" stop-color="#91C9FA"></stop>
                      <stop offset="0.85" stop-color="#65B7FC"></stop>
                      <stop offset="0.98" stop-color="#33A1FE"></stop>
                      <stop offset="1" stop-color="#2D9FFF"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <p
                  class="subtitle-text text-textPrimary font-normal text-unset"
                >
                  {{ language.keepthese }}
                </p>
              </div>
            </div>
            <div class="relative flex items-center justify-center">
              <div
                class="w-full border border-line rounded bg-backgroundSecondary"
              >
                <div class="flex flex-col p-4">
                  <div>
                    <div class="p-[24px] text-white" v-if="mnemonic">
                      {{ mnemonic }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex w-full items-center justify-between mt-6 space-x-4"
            >
              <div
                class="flex w-full"
                data-tooltip-id="button-tooltip-37"
                data-tooltip-place="top-end"
              >
                <button
                  @click="handle"
                  data-testid="backup-mnemonic-step-proceed-button"
                  class="outline-none bg-primary text-backgroundPrimary hover:bg-primaryHover active:bg-primaryPressed disabled:bg-primaryPressed default-button w-full"
                >
                  {{ language.continue }}
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
import Clipboard from "clipboard";

export default defineComponent({
  name: "RememberMnemonic",
  data: () => {
    return {
      language: {
        keepthese: "",
        backyour: "",
        continue: "",
      },
    };
  },
  props: {
    mnemonic: {
      default: "",
      type: String,
    },
  },
  components: {},
  mounted() {
    this.language.keepthese = chrome.i18n.getMessage("keepthese");
    this.language.backyour = chrome.i18n.getMessage("backyour");
    this.language.continue = chrome.i18n.getMessage("continue");
    this.encryptionSend();
  },
  methods: {
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
    handle() {
      this.$emit("next");
    },
  },
});
</script>

<style lang="less" scoped>
@import "../../style/popup.less";

.copy-mnemonic {
  text-align: center;
  position: relative;
  overflow: hidden;
  height: 100vh;
  .title {
    font-size: 16px;
    margin-top: 24px;
    margin-bottom: 10px;
    font-weight: bold;
    color: #444;
  }
  .sub-title {
    font-size: 12px;
    color: #999;
    line-height: 1.6;
    margin: 0 8%;
  }
  .mnemonic {
    margin: 24px 5% 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .item {
      margin: 3px;
      padding: 4px 8px;
      border: 1px solid #e9e9e9;
      border-radius: 4px;
      font-size: 12px;
      color: #444;
      .item_num {
        color: #999;
      }
    }
  }
  .copy {
    margin-top: 24px;
    text-align: center;
    color: #3675bc;
    cursor: pointer;
    font-size: 12px;
  }
  .footer {
    position: absolute;
    width: calc(100vw - 8%);
    bottom: 20px;
    text-align: left;
    .tip {
      margin-bottom: 20px;
      padding: 12px;
      background: rgba(251, 138, 138, 0.3);
      font-size: 12px;
      color: rgba(149, 37, 37, 0.99);
      border-radius: 5px;
      img {
        height: 18px;
        margin-right: 5px;
        float: left;
      }
    }
    button {
      background-color: #3675bc;
      font-size: 12px;
      border-radius: 5px;
      color: #fff;
    }
  }
}
</style>
