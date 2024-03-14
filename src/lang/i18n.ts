import { createI18n, useI18n } from "vue-i18n";
import ZH from "./zh";
import EN from "./en";
const messages = {
  zh: { ...ZH },
  en: { ...EN },
};

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "zh",
  messages,
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/ban-types
export function ts(key: string, arg: object) {
  const { tm } = useI18n();
  let _text = tm(key);
  let reg;
  for (const LKey in arg) {
    reg = new RegExp("{\\s*?" + LKey + "\\s*?}", "g");
    _text = _text.replace(reg, arg[LKey]);
  }
  return _text;
}

export default i18n;
