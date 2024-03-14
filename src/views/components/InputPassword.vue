<template>
  <div class="input-password">
    <div class="title">{{ title }}</div>
    <div class="password">
      <div class="dot" :class="{ active: password.length > 0 }"></div>
      <div class="dot" :class="{ active: password.length > 1 }"></div>
      <div class="dot" :class="{ active: password.length > 2 }"></div>
      <div class="dot" :class="{ active: password.length > 3 }"></div>
      <div class="dot" :class="{ active: password.length > 4 }"></div>
      <div class="dot" :class="{ active: password.length > 5 }"></div>
    </div>
    <div class="keyboard">
      <van-row>
        <van-col span="8" @click="handleNum('1')">1</van-col>
        <van-col span="8" @click="handleNum('2')">2</van-col>
        <van-col span="8" @click="handleNum('3')">3</van-col>
      </van-row>
      <van-row>
        <van-col span="8" @click="handleNum('4')">4</van-col>
        <van-col span="8" @click="handleNum('5')">5</van-col>
        <van-col span="8" @click="handleNum('6')">6</van-col>
      </van-row>
      <van-row>
        <van-col span="8" @click="handleNum('7')">7</van-col>
        <van-col span="8" @click="handleNum('8')">8</van-col>
        <van-col span="8" @click="handleNum('9')">9</van-col>
      </van-row>
      <van-row>
        <van-col span="8"></van-col>
        <van-col span="8" @click="handleNum('0')">0</van-col>
        <van-col span="8" @click="handleNum('X')"><img src="../../../assets/close.svg" alt=""></van-col>
      </van-row>
    </div>
	<p>Adds an extra layer of security when using the app.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputPassword",
  data() {
    return {
      password: "", // 输入的密码
    };
  },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleNum(num: string) {
      if (num === "X") {
        if (this.password.length > 0) {
          this.password = this.password.substr(0, this.password.length - 1);
        }
      } else {
        if (this.password.length < 6) {
          this.password = this.password + num;
          if (this.password.length === 6) {
            this.$emit("complete", this.password);
          }
        }
      }
    },
  },
});
</script>

<style lang="less" scoped>
.input-password {
	overflow: hidden;
  .title {
    text-align: center;
    font-size: 14px;
    margin-top: 30%;
    margin-bottom: 36%;
	color:#999;
  }
  .password {
    display: flex;
    justify-content: space-evenly;
    margin: 0 14%;
	padding:0 20px 32px 20px;
	border-bottom: 1px solid #efeded;
    .active {
      background: #3675bc;
    }
    .dot {
      width: 13px;
      height: 13px;
      border: 1px solid #3675bc;
      border-radius: 50%;
    }
  }
  .keyboard {
    .van-row {
      text-align: center;
      .van-col {
        font-size: 14px;
        padding: 20px 0;
		color:#404040;
        cursor: pointer;
		img{ height: 14px; }
      }
    }
  }
  p{ text-align: center; color:#999; font-size: 12px; margin:0 9% 20px; line-height: 1.6; }
}
</style>
