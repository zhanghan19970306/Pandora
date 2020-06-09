import dayjs from "dayjs"
import { Decimal } from "decimal.js"

/**
 * 返回索引对应的中文
 * @param index
 */
export function indexToChinese(index: number) {
    return ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"][index]
}

/**
 * 返回week对应的中文
 * @param num
 */
export function weekToChinese(index: number): string {
    return ["日", "一", "二", "三", "四", "五", "六"][index]
}

/**
 * 10000 => "10,000" 支持带小数点
 * @param {number} num
 */
export function toThousand(num: number): string {
    return (+num || 0)
        .toString()
        .replace(/^-?\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ","))
}

/**
 * 1024 => "1KB"
 * @param bytes
 */
export function bytesToSize(bytes: number): string {
    if (bytes === 0) return "0 KB"
    const k = 1024
    const sizes = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat(String(bytes / Math.pow(k, i))).toFixed(2) + sizes[i]
}

/**
 * 转化显示某个数组中 某个字段的拼接
 * @example "[ { name: ‘XXX1’}, { name: 'XXX2' } ]" => "XXX1, XXX2"
 * @param arr
 * @param field
 */
export function arrayFieldToStr(arr: [], field: string): string {
    return arr.map((item) => item[field] ?? "").toString()
}

/**
 * 金钱格式化
 * @param money 钱 单位应当为 “分”
 * @param precision 精度 默认为2
 * @param thousand 是否千分号显示 默认为true
 */
export function formatMoney(
    money: number | string,
    precision = 2,
    thousand = true
): string | number {
    // 先做判断empty 返回--
    if (money === null || money === undefined || money === "") {
        return "--"
    }

    // 转化类型为数值型
    money = Number(money)

    // 二进制运算库保证不丢失精度
    const result = new Decimal(money)
        .div(new Decimal(100))
        .toDP(precision)
        .toNumber()

    // 格式化返回
    return thousand ? toThousand(result) : result
}
