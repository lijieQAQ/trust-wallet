<template>
  <div class="wallet-manage">
    <div class="left">
      <img :src="menuIcon" alt="" @click="activeType = 'all'" />
      <img
        src="../../../assets/icon_btc.png"
        alt=""
        @click="activeType = 'btc'"
      />
      <img
        src="../../../assets/icon_eth.png"
        alt=""
        @click="activeType = 'eth'"
      />
      <img
        src="../../../assets/icon_bnb.png"
        alt=""
        @click="activeType = 'bnb'"
      />
      <img
        src="../../../assets/icon_trx.png"
        alt=""
        @click="activeType = 'trx'"
      />
    </div>
    <div class="right" v-if="wallet">
      <div
        class="item btc"
        v-if="activeType === 'all' || activeType === 'btc'"
        @click="close('btc')"
      >
        <div class="label">BTC</div>
        <div class="address">{{ desensitization(wallet.btcAddress) }}</div>
      </div>
      <div
        class="item eth"
        v-if="activeType === 'all' || activeType === 'eth'"
        @click="close('eth')"
      >
        <div class="label">ETH</div>
        <div class="address">{{ desensitization(wallet.ethAddress) }}</div>
      </div>
      <div
        class="item bnb"
        v-if="activeType === 'all' || activeType === 'bnb'"
        @click="close('bnb')"
      >
        <div class="label">BNB</div>
        <div class="address">{{ desensitization(wallet.bnbAddress) }}</div>
      </div>
      <div
        class="item trx"
        v-if="activeType === 'all' || activeType === 'trx'"
        @click="close('trx')"
      >
        <div class="label">TRX</div>
        <div class="address">{{ desensitization(wallet.trxAddress) }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
const menuIcon = chrome.runtime.getURL("assets/menu-black.svg");

export default defineComponent({
  name: "WalletManage",
  components: {},
  data: () => {
    return {
      menuIcon: menuIcon,
      activeType: "all",
    };
  },
  props: {
    wallet: {
      type: Object,
      default: () => null,
    },
  },
  methods: {
    // 关闭
    close(type: string) {
      this.$emit("close", type);
    },
    desensitization(address: string) {
      if (address && address.length > 16) {
        return (
          address.substr(0, 8) + "...." + address.substr(address.length - 8)
        );
      }
      return address;
    },
  },
});
</script>

<style lang="less" scoped>
.wallet-manage {
  display: flex;
  .left {
    flex: 0 0 60px;
    text-align: center;
    img {
      width: 32px;
      margin-top: 12px;
      cursor: pointer;
    }
  }
  .right {
    flex: 1;
    margin-left: 12px;
    margin-right: 12px;
    .item {
      margin-top: 12px;
      padding: 4px 12px;
      border-radius: 6px;
      cursor: pointer;
      .label {
        color: #fff;
        margin-bottom: 4px;
      }
      .address {
        color: rgba(255, 255, 255, 0.8);
      }
    }
    .btc {
      background: #f6931a;
    }
    .eth {
      background: #627eea;
    }
    .bnb {
      background: #f3ba2e;
    }
    .trx {
      background: #e60714;
    }
  }
}
</style>
