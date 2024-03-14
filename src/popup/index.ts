import { createApp } from "vue";
import App from "./App.vue";
import router from "../router/index";
import i18n from "../lang/i18n";

import Vant from "vant";
createApp(App).use(router).use(i18n).use(Vant).mount("#root");
