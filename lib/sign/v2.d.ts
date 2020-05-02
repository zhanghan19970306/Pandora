import { Sign } from "./core";
/**
 * v2 版本需要实现的接口
 */
export interface Access {
    getToken(): void;
    refreshToken(): void;
}
/**
 * v2版本
 */
export declare class SignV2 extends Sign {
    constructor(appid: string, appkey: string);
    /**
     * 获取accessToken 所需要的参数
     */
    getAccessParams(): object;
}
