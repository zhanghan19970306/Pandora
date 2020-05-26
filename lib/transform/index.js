"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 返回索引对应的中文
 * @param index
 */
function indexToChinese(index) {
    return ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"][index];
}
/**
 * 10000 => "10,000"
 * @param {number} num
 */
function moneyToThousand(num) {
    return (+num || 0)
        .toString()
        .replace(/^-?\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ","));
}
exports.moneyToThousand = moneyToThousand;
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
