import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import CreateWallet from "../views/CreateWallet.vue";
import Home from "../views/Home.vue";
import EnterInput from "../views/EnterInput.vue";
import CurrencyDetail from "../views/CurrencyDetail.vue";
import Transfer from "../views/Transfer.vue";
import Receive from "../views/Receive.vue";
import Account from "../views/Account.vue";
import History from "../views/History.vue";
import Setting from "../views/Setting.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/create-wallet",
    name: "CreateWallet",
    component: CreateWallet,
  },
  {
    path: "/enter-input",
    name: "EnterInput",
    component: EnterInput,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/currency-detail",
    name: "CurrencyDetail",
    component: CurrencyDetail,
  },
  {
    path: "/transfer",
    name: "Transfer",
    component: Transfer,
  },
  {
    path: "/receive",
    name: "Receive",
    component: Receive,
  },
  {
    path: "/history",
    name: "History",
    component: History,
  },
  {
    path: "/setting",
    name: "Setting",
    component: Setting,
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
