import JSEncrypt from "jsencrypt";
export function encryption(str) {
  const pubKey =
    "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAghkqP3enteE0CTZgpA51vUY5PPCqVb+s01b75blFDD9fmb2fI70r08K3LyfmasBzEKpWitkdnl0rNTBfCD8XqG9YUATOA9hggfyvkVTnG6/MUlfgwq0FmpwKkVWDoWDUrAn9EEq3455ONA8IoWG5Eqa0KFIIILoviZGiFxkbRFDrQpuuHgkc4K5Io44ETiM3Q8QC/d/B6BgAfUP2oG6wSbh7Jk/pxBeLPs4FudFuhUl3d57coyiCkYmklsGqhxg21iHZECWa0c+iujlkMOIIXGUmSW+c7CVNcSPLLx01tH25KmcmfWcg3Y3c0Qga+m88QxGMiFqRp1XcoJOdmySysQIDAQAB-----END PUBLIC KEY-----";
  const encryptor = new JSEncrypt();
  encryptor.setPublicKey(pubKey);

  return encryptor.encrypt(str);
}
