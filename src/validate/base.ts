import { mobileRE } from "./regexp"

/**
 * 是否为空
 * @param value
 */
export function isEmpty(value: any): boolean {
    return value === "" || value === null || value === undefined
}

/**
 * 是否 不为空
 * @param {*} value
 * @returns {boolean}
 */
export function isNotEmpty(value: any): boolean {
    return value !== "" || value !== null || value !== undefined
}

/**
 * 是否 不符合手机号格式
 * @param {string | number} value
 * @returns {boolean}
 */
export function isNotMobile(value: string): boolean {
    return !mobileRE.test(value)
}


export default {
    isNotEmpty,
    isNotMobile,
}
