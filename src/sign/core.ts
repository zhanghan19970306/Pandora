import md5 from "blueimp-md5";

/**
 * 抽象Sign
 */
export abstract class Sign {
  protected appid: string;
  protected appkey: string;
  _md5BeforeStr: string = "";

  protected constructor(appid: string = "", appkey: string = "") {
    this.appid = appid;
    this.appkey = appkey;
  }

  /**
   * 获取随机字符串
   * @returns {string}
   */
  protected randomString(): string {
    return Math.random().toString(36).substring(2);
  }

  /**
   * 获取当前时间戳
   * @returns {number}
   */
  protected timestamp(): number {
    return new Date().getTime();
  }

  /**
   * 参数排序方法
   * @param paramsStr
   */
  protected paramsStrSort(paramsStr: string): string {
    let urlStr = paramsStr.split("!@#$%^&*").sort().join("&");
    let newUrl = `${urlStr}&appkey=${this.appkey}`;
    this._md5BeforeStr = newUrl;
    return md5(newUrl);
  }

  /**
   * 生成签名
   * @param params
   */
  protected createSign(params: any): string {
    const arr: string[] = [];
    for (let key in params) {
      const value = params[key];
      if (value || value === 0) {
        arr.push(`${key}=${value}`);
      }
    }
    return this.paramsStrSort(arr.join("!@#$%^&*"));
  }
}
