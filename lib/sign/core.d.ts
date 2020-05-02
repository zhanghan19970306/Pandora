/**
 * 抽象Sign
 */
export declare abstract class Sign {
    protected appid: string;
    protected appkey: string;
    _md5BeforeStr: string;
    protected constructor(appid?: string, appkey?: string);
    /**
     * 获取随机字符串
     * @returns {string}
     */
    protected randomString(): string;
    /**
     * 获取当前时间戳
     * @returns {number}
     */
    protected timestamp(): number;
    /**
     * 参数排序方法
     * @param paramsStr
     */
    protected paramsStrSort(paramsStr: string): string;
    /**
     * 生成签名
     * @param params
     */
    protected createSign(params: any): string;
}
