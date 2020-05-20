"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("./core");
/**
 * v2版本
 */
class SignV2 extends core_1.Sign {
    constructor(appid, appkey) {
        super(appid, appkey);
    }
    /**
     * 获取accessToken 所需要的参数
     */
    getAccessParams() {
        const baseParams = {
            appid: super.appid,
            nonce: super.randomString(),
            timestamp: super.timestamp(),
        };
        return Object.assign(Object.assign({}, baseParams), { sign: super.createSign(baseParams) });
    }
}
exports.SignV2 = SignV2;
