import { Sign } from "./core";
/**
 * v1版本
 */
export declare class SignV1 extends Sign {
    constructor(appid: string, appkey: string);
    /**
     * @param params
     */
    getParams(params: object): object;
}
