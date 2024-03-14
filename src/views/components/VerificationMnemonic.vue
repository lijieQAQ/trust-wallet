<template>
  <div class="verification-mnemonic">
    <div class="title">verification mnemonic</div><!-- 验证助记词 -->
    <div class="sub-title">Click on the words to put them together in the correct order.</div><!-- 点击单词，把它们按正确地顺序放在一起。 -->
    <div class="mnemonic-content">
      <div class="mnemonic-content-cord">
		  <span
		    class="item"
		    @click="clearInput(item)"
		    v-for="(item, index) in inputMnemonic"
		    :key="item"
		    ><span class="item_num">{{ index + 1 }}</span> {{ item }}</span
		  >
	  </div>
      <div class="tip" v-if="!isMatch">wrong order, please try again</div><!-- 顺序不对，请重试 -->
	  <!-- <div class="tip_finish" v-else>干的漂亮！</div> -->
    </div>
    <div class="mnemonic">
      <template v-for="item in mnemonic.split(' ').sort()">
        <span
          :key="item"
          class="item"
          @click="inputHandle(item)"
          v-if="inputMnemonic.indexOf(item) === -1"
          >{{ item }}</span
        >
      </template>
    </div>
    <!-- <div class="copy" :data-clipboard-text="mnemonic" @click="copy">复制</div> -->
    <div class="footer">
      <!-- <div class="tip">切勿与任何人分享助记词，安全地存储它！</div> -->
      <van-button
        block
        type="primary"
        :disabled="inputMnemonic.join(' ') !== mnemonic"
        @click="handle"
        >continue</van-button
      ><!-- 继续 -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Clipboard from "clipboard";
export default defineComponent({
  name: "VerificationMnemonic",
  data: () => {
    return {
      inputMnemonic: [],
    };
  },
  props: {
    mnemonic: {
      default: "",
      type: String,
    },
  },
  computed: {
    isMatch() {
      const mnemonic = this.mnemonic.split(" ");
      for (let i = 0, length = this.inputMnemonic.length; i < length; i++) {
        if (this.inputMnemonic[i] !== mnemonic[i]) {
          return false;
        }
      }
      return true;
    },
  },
  components: {},
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
    clearInput(str: string) {
      if (str !== "") {
        const index = this.inputMnemonic.indexOf(str);
        this.inputMnemonic.splice(index, 1);
      }
    },
    inputHandle(str: string) {
      this.inputMnemonic.push(str);
    },
    handle() {
      this.$emit("next");
    },
  },
});
</script>

<style lang="less" scoped>
.verification-mnemonic {
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
  .mnemonic-content {
	margin: 10px 0 30px;
	display: block;
    background: #e3e3e3;
    border-radius: 4px;
	min-height: 50px;
	padding:6px 0 34px;
	position: relative;
	.tip{ color: rgba(200, 43,43, 0.99);}
	.item_finish{ color: #4dcb9a }
    .tip,
	.item_finish{
	  position: absolute;
	  left: 0;
	  bottom: 10px;
	  width:100%;
	  text-align: center;
	  overflow: hidden;
	  display:block;
      font-size: 12px;
    }
  }
  .mnemonic{
	  margin-top: 26px;
  }
  .mnemonic,
  .mnemonic-content-cord{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .item {
	  margin: 3px;
      padding: 4px 8px;
      border: 1px solid #e9e9e9;
      border-radius: 4px;
      background: #fff;
	  font-size: 12px;
	  .item_num{ color:#999; }
	}
  }
  .copy {
    margin: 24px 0;
    text-align: center;
    color: #03a9f4;
    cursor: pointer;
  }
  .footer {
    position: absolute;
    width: calc(100vw - 24px);
    bottom: 20px;
    .tip {
      border-radius: 4px;
      padding: 2px 12px;
      background: rgba(220, 20, 20, 0.2);
      font-size: 14px;
      color: rgba(220, 20, 20, 0.99);
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
