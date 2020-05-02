import { Sign } from "./core";

/**
 * v1版本
 */
export class SignV1 extends Sign {
  constructor(appid: string, appkey: string) {
    super(appid, appkey);
  }

  /**
   * @param params
   */
  public getParams(params: object): object {
    const baseParams = {
      appid: super.appid,
      nonce: super.randomString(),
      timestamp: super.timestamp(),
      ...params,
    };

    return {
      ...baseParams,
      sign: super.createSign(baseParams),
    };
  }
}
