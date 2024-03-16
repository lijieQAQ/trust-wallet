//DES加密
import CryptoJS from "crypto-js";

export function decryptByDES(ciphertext: string, key: string) {
  const keyHex = CryptoJS.enc.Utf8.parse(CryptoJS.SHA256(key).toString());
  const decrypted = CryptoJS.DES.decrypt(ciphertext, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  try {
    return decrypted.toString(CryptoJS.enc.Utf8);
  } catch (e) {
    return e;
  }
}
