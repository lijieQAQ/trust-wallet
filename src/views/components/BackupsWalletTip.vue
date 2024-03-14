<template>
  <div class="backups-wallet-tip">
    <img src="../../../assets/banner1.png" class="img_show" alt="" />
    <div class="title">备份提示</div>
    <!-- 请马上备份您的钱包！ -->
    <div class="sub-title">获得助记词等于拥有钱包资产所有权</div>
    <div class="sub-title">助记词由英文单词组成，请抄写并妥善保管。</div>
    <div class="sub-title">助记词丢失，无法找回，请务必备份助记词。</div>
    <!-- 在下一步中，您将看到12个允许您恢复钱包的单词。 -->
    <div class="footer">
      <van-button block type="primary" @click="handle(1)">立即备份</van-button
      ><!-- 继续 -->
      <van-button block type="primary" @click="handle(0)">稍后备份</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BackupsWalletTip",
  data: () => {
    return {};
  },
  components: {},
  methods: {
    handle(type: number) {
      this.$emit("next", type);
    },
  },
});
</script>

<style lang="less" scoped>
.backups-wallet-tip {
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
  .img_show {
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -61px 0 0 -60px;
    width: 123px;
    height: 120px;
  }
  .footer {
    position: absolute;
    width: calc(100vw - 8%);
    bottom: 20px;
    text-align: left;
    button {
      margin-top: 10px;
      background-color: #3675bc;
      font-size: 12px;
      border-radius: 5px;
      color: #fff;
    }
  }
}
:deep(.van-checkbox__icon) {
  height: 0.9em;
  line-height: 0.9em;
}
:deep(.van-checkbox__icon) {
  display: flex;
  border: 1px solid #3675bc;
  height: 0.7em;
  width: 0.7em;
  line-height: 1;
}
:deep(.van-icon-success:before) {
  position: absolute;
  left: -2px;
}
:deep(.van-checkbox__icon .van-icon) {
  line-height: 0.9em;
  width: 0.9em;
  height: 0.9em;
}
:deep(.van-checkbox__label) {
  line-height: 16px;
  font-size: 12px;
  color: #999;
}

// /deep/ .van-checkbox__ico{
// 	height: 0.9em;
// 	line-height: 0.9em;
// }
// /deep/ .van-checkbox__icon .van-icon{
// 	display: flex;
// 	border:1px solid #3675bc;
// 	height: 0.9em;
// 	width: 0.9em;
// 	line-height: 0.8;
// }
// /deep/ .van-icon-success:before{
// 	position: absolute;
// 	left: -2px;
// }
// /deep/ .van-checkbox__label{
// 	line-height: 16px;
// 	font-size: 12px;
// 	color: #999;
// }
</style>
