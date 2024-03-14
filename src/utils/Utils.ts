import BigNumber from "bignumber.js";
export function toBtc(value, num) {
  return new BigNumber(value).times(num).toString()
}
