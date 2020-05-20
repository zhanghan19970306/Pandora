"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("./core");
/**
 * v1版本
 */
class SignV1 extends core_1.Sign {
    constructor(appid, appkey) {
        super(appid, appkey);
    }
    /**
     * @param params
     */
    getParams(params) {
        const baseParams = Object.assign({ appid: super.appid, nonce: super.randomString(), timestamp: super.timestamp() }, params);
        return Object.assign(Object.assign({}, baseParams), { sign: super.createSign(baseParams) });
    }
}
exports.SignV1 = SignV1;
