import BigNumber from "bignumber.js";
import en from "../lang/en";
import zh from "../lang/zh";
export function toBtc(value, num) {
  return new BigNumber(value).times(num).toString();
}

export function getMessage(key: string) {
  if (localStorage.getItem("lang") === "zh") {
    if (zh[key] && zh[key]["message"]) {
      return zh[key]["message"];
    } else {
      return key;
    }
  } else {
    if (en[key] && en[key]["message"]) {
      return en[key]["message"];
    } else {
      return key;
    }
  }
}
