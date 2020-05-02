/**
 * 是否为空
 * @param value
 */
export declare function isEmpty(value: any): boolean;
/**
 * 是否 不为空
 * @param {*} value
 * @returns {boolean}
 */
export declare function isNotEmpty(value: any): boolean;
/**
 * 是否 不符合手机号格式
 * @param {string | number} value
 * @returns {boolean}
 */
export declare function isNotMobile(value: string): boolean;
/**
 * 是否 含有中文
 * @param value
 */
export declare function isContainsChinese(value: string): boolean;
declare const _default: {
    isNotEmpty: typeof isNotEmpty;
    isNotMobile: typeof isNotMobile;
    isContainsChinese: typeof isContainsChinese;
};
export default _default;
