"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blueimp_md5_1 = __importDefault(require("blueimp-md5"));
/**
 * 抽象Sign
 */
class Sign {
    constructor(appid = "", appkey = "") {
        this._md5BeforeStr = "";
        this.appid = appid;
        this.appkey = appkey;
    }
    /**
     * 获取随机字符串
     * @returns {string}
     */
    randomString() {
        return Math.random().toString(36).substring(2);
    }
    /**
     * 获取当前时间戳
     * @returns {number}
     */
    timestamp() {
        return new Date().getTime();
    }
    /**
     * 参数排序方法
     * @param paramsStr
     */
    paramsStrSort(paramsStr) {
        let urlStr = paramsStr.split("!@#$%^&*").sort().join("&");
        let newUrl = `${urlStr}&appkey=${this.appkey}`;
        this._md5BeforeStr = newUrl;
        return blueimp_md5_1.default(newUrl);
    }
    /**
     * 生成签名
     * @param params
     */
    createSign(params) {
        const arr = [];
        for (let key in params) {
            const value = params[key];
            if (value || value === 0) {
                arr.push(`${key}=${value}`);
            }
        }
        return this.paramsStrSort(arr.join("!@#$%^&*"));
    }
}
exports.Sign = Sign;
