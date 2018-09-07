import cn from "./zh-cn-locale.js";
import en from "./en-ca-locale.js";

export const getMessages = (locale) => {
    switch (locale) {
        case "zh-CN":
            return cn;
        default:
            return en;
    }
}