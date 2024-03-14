<template>
  <div class="currency-detail">
    <img
      :src="
        currency === 'BTC'
          ? btcIcon
          : currency === 'ETH'
          ? ethIcon
          : currency === 'BNB'
          ? bnbIcon
          : trxIcon
      "
      alt=""
      class="currency-icon"
    />
    <div class="balance">
      <span>{{ balance }}</span
      ><span>{{ currency }}</span>
    </div>
    <div class="btn-group">
      <div class="btn-item" @click="transfer">
        <div class="btn">
          <img :src="sendIcon" alt="" />
        </div>
        <div class="label">send</div><!-- 发送 -->
      </div>
      <div class="btn-item" @click="receive">
        <div class="btn">
          <img :src="receivedIcon" alt="" />
        </div>
        <div class="label">take over</div><!-- 接收 -->
      </div>
      <div class="btn-item">
        <div class="btn copy" :data-clipboard-text="address" @click="copy">
          <img :src="copyIcon" alt="" />
        </div>
        <div class="label">copy</div><!-- 发送 -->
      </div>
    </div>
    <div class="transaction">
      <van-cell-group>
        <van-cell v-for="(item, index) in trx" :key="index" :title="item.hash" :value="item.amount" />
      </van-cell-group>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Clipboard from "clipboard";
const btcIcon = chrome.runtime.getURL("assets/icon_btc.png");
const ethIcon = chrome.runtime.getURL("assets/icon_eth.png");
const bnbIcon = chrome.runtime.getURL("assets/icon_bnb.png");
const trxIcon = chrome.runtime.getURL("assets/icon_trx.png");
const receivedIcon = chrome.runtime.getURL("assets/received.svg");
const sendIcon = chrome.runtime.getURL("assets/send.svg");
const copyIcon = chrome.runtime.getURL("assets/copy.svg");
export default defineComponent({
  name: "CurrencyDetail",
  data: () => {
    return {
      trx: [],
      btcIcon: btcIcon,
      ethIcon: ethIcon,
      bnbIcon: bnbIcon,
      trxIcon: trxIcon,
      receivedIcon: receivedIcon,
      sendIcon: sendIcon,
      copyIcon: copyIcon,
      currency: "",
      balance: "",
      address: "",
    };
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
    transfer() {
      this.$router.push({
        name: "Transfer",
        params: {
          currency: this.currency,
          balance: this.balance,
          address: this.address,
        },
      });
    },
    receive() {
      this.$router.push({
        name: "Receive",
        params: {
          currency: this.currency,
          balance: this.balance,
          address: this.address,
        },
      });
    }, 
  },
  created() {
    if (this.$route.query) {
      this.currency = this.$route.query.currency;
      this.balance = this.$route.query.balance;
      this.address = this.$route.query.address;
    }
    if (this.currency === "BTC") {
      const transaction = localStorage.getItem("btcTransaction");
      if (transaction) {
        this.trx = JSON.parse(transaction);
      }
    } else if (this.currency === "ETH") {
      const transaction = localStorage.getItem("ethTransaction");
      if (transaction) {
        this.trx = JSON.parse(transaction);
      } 
    } else if (this.currency === "BNB") {
      const transaction = localStorage.getItem("bnbTransaction");
      if (transaction) { 
        this.trx = JSON.parse(transaction);
      }
    } else if (this.currency === "TRX") {
      const transaction = localStorage.getItem("trxTransaction");
      if (transaction) {
        this.trx = JSON.parse(transaction);
      }
    }
  },
});
</script>
<style scoped lang="less">
.currency-detail {
  text-align: center;
  .currency-icon {
	margin-top: 32px;
    width: 40px;
    height: 40px;
  }
  .balance {
    margin-top: 12px;
    font-size: 18px;
    font-weight: 500;
	color: #444;
    span:last-child {
      margin-left: 10px;
    }
  }
  .btn-group {
    margin: 26px 0 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    .btn-item{
      margin:0 16px;
    }
    .btn-item {
      .label {
        font-size: 12px;
        margin-top: 6px;
		color:#3675bc;
      }
      .btn {
        cursor: pointer;
        width: 32px;
        height: 32px;
        background: #3675bc;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 12px;
          height: 12px;
        }
      }
    }
  }
  .transaction {
    margin-top: 18px;
	.van-cell-group {
		.van-cell{
			display: flex;
			justify-content: center;
			align-items: center;
			word-break: break-word;
			/deep/ .van-cell__title{
				flex-grow: 8;
				
			}
		}
	}
  }
}


</style>
