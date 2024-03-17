import { createApp } from "vue";
import App from "./App.vue";
import router from "../router/index";
import i18n from "../lang/i18n";
import "../utils/globalData";

import Vant from "vant";
const app = createApp(App);
app.config.globalProperties.password = null;

app.use(router).use(i18n).use(Vant).mount("#root");
