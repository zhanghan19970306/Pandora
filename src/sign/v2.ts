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
export class SignV2 extends Sign {
  constructor(appid: string, appkey: string) {
    super(appid, appkey);
  }

  /**
   * 获取accessToken 所需要的参数
   */
  public getAccessParams(): object {
    const baseParams = {
      appid: super.appid,
      nonce: super.randomString(),
      timestamp: super.timestamp(),
    };

    return {
      ...baseParams,
      sign: super.createSign(baseParams),
    };
  }
}
