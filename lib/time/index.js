"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(require("dayjs"));
/**
 * 格式化时间
 * @param value
 * @param format
 */
function formatTime(value, format = "YYYY-MM-DD HH:mm:ss") {
    value = Number(value);
    if (!value)
        return "--";
    return dayjs_1.default(value).format(format);
}
exports.formatTime = formatTime;
/**
 * 下面的时间基本是应对 element-ui里面的时间段picker 但是有elment-ui有bug 会丢弃最后的毫秒999 这边做出的适配
 */
/**
 * 最近一周 (此刻 往前推前7天)
 * @returns { timestamp[] }
 */
function lastWeek() {
    return [dayjs_1.default().add(-1, "week").valueOf(), dayjs_1.default().valueOf() - 999];
}
exports.lastWeek = lastWeek;
/**
 * 最近一月 (此刻 往前推前30/31天)
 * @returns { timestamp[] }
 */
function lastMonth() {
    return [dayjs_1.default().add(-1, "month").valueOf(), dayjs_1.default().valueOf() - 999];
}
exports.lastMonth = lastMonth;
/**
 * 最近三个月 (此刻 往前推前90天)
 * @returns { timestamp[] }
 */
function last3Month() {
    return [dayjs_1.default().add(-3, "month").valueOf(), dayjs_1.default().valueOf() - 999];
}
exports.last3Month = last3Month;
/**
 * 最近一年 (此刻 往前推前365天)
 * @returns { timestamp[] }
 */
function lastYear() {
    return [dayjs_1.default().add(-1, "year").valueOf(), dayjs_1.default().valueOf() - 999];
}
exports.lastYear = lastYear;
/**
 * 本周
 */
function nowWeek() {
    return [
        dayjs_1.default().add(1, "day").startOf("week").valueOf(),
        dayjs_1.default().add(1, "day").endOf("week").valueOf() - 999
    ];
}
exports.nowWeek = nowWeek;
/**
 * 上周
 */
function prevWeek() {
    return [
        dayjs_1.default().add(-1, "week").startOf("week").add(1, "day").valueOf(),
        dayjs_1.default().add(-1, "week").endOf("week").add(1, "day").valueOf() - 999
    ];
}
exports.prevWeek = prevWeek;
/**
 * 本月
 */
function nowMonth() {
    return [
        dayjs_1.default().startOf("month").valueOf(),
        dayjs_1.default().endOf("month").valueOf() - 999
    ];
}
exports.nowMonth = nowMonth;
/**
 * 上月
 */
function prevMonth() {
    return [
        dayjs_1.default().add(-1, "month").startOf("month").valueOf(),
        dayjs_1.default().add(-1, "month").endOf("month").valueOf() - 999
    ];
}
exports.prevMonth = prevMonth;
/**
 * 今年
 */
function nowYear() {
    return [
        dayjs_1.default().startOf("year").valueOf(),
        dayjs_1.default().endOf("year").valueOf() - 999
    ];
}
exports.nowYear = nowYear;
/**
 * 去年
 */
function prevYear() {
    return [
        dayjs_1.default().add(-1, "year").startOf("year").valueOf(),
        dayjs_1.default().add(-1, "year").endOf("year").valueOf() - 999
    ];
}
exports.prevYear = prevYear;
