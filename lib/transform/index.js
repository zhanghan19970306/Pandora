"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decimal_js_1 = require("decimal.js");
/**
 * 返回索引对应的中文
 * @param index
 */
function indexToChinese(index) {
    return ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"][index];
}
exports.indexToChinese = indexToChinese;
/**
 * 返回week对应的中文
 * @param num
 */
function weekToChinese(index) {
    return ["日", "一", "二", "三", "四", "五", "六"][index];
}
exports.weekToChinese = weekToChinese;
/**
 * 10000 => "10,000" 支持带小数点
 * @param {number} num
 */
function toThousand(num) {
    return (+num || 0)
        .toString()
        .replace(/^-?\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ","));
}
exports.toThousand = toThousand;
/**
 * 1024 => "1KB"
 * @param bytes
 */
function bytesToSize(bytes) {
    if (bytes === 0)
        return "0 KB";
    const k = 1024;
    const sizes = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat(String(bytes / Math.pow(k, i))).toFixed(2) + sizes[i];
}
exports.bytesToSize = bytesToSize;
/**
 * 转化显示某个数组中 某个字段的拼接
 * @example "[ { name: ‘XXX1’}, { name: 'XXX2' } ]" => "XXX1, XXX2"
 * @param arr
 * @param field
 */
function arrayFieldToStr(arr, field) {
    return arr.map((item) => { var _a; return (_a = item[field]) !== null && _a !== void 0 ? _a : ""; }).toString();
}
exports.arrayFieldToStr = arrayFieldToStr;
/**
 * 金钱格式化
 * @param money 钱 单位应当为 “分”
 * @param precision 精度 默认为2
 * @param thousand 是否千分号显示 默认为true
 */
function formatMoney(money, precision = 2, thousand = true) {
    // 先做判断empty 返回--
    if (money === null || money === undefined || money === "") {
        return "--";
    }
    // 转化类型为数值型
    money = Number(money);
    // 二进制运算库保证不丢失精度
    const result = new decimal_js_1.Decimal(money)
        .div(new decimal_js_1.Decimal(100))
        .toDP(precision)
        .toNumber();
    // 格式化返回
    return thousand ? toThousand(result) : result;
}
exports.formatMoney = formatMoney;
