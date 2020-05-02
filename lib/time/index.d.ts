declare type timestamp = number[];
/**
 * 格式化时间
 * @param value
 * @param format
 */
export declare function formatTime(value: number, format?: string): string;
/**
 * 最近一周 (此刻 往前推前7天)
 * @returns { timestamp[] }
 */
export declare function lastWeek(): timestamp;
/**
 * 最近一月 (此刻 往前推前30天)
 * @returns { timestamp[] }
 */
export declare function lastMonth(): timestamp;
/**
 * 最近三个月 (此刻 往前推前90天)
 * @returns { timestamp[] }
 */
export declare function last3Month(): timestamp;
/**
 * 最近一年 (此刻 往前推前365天)
 * @returns { timestamp[] }
 */
export declare function lastYear(): timestamp;
/**
 * 本周
 */
export declare function nowWeek(): timestamp;
/**
 * 上周
 */
export declare function prevWeek(): timestamp;
/**
 * 本月
 */
export declare function nowMonth(): timestamp;
/**
 * 上月
 */
export declare function prevMonth(): timestamp;
/**
 * 今年
 */
export declare function nowYear(): timestamp;
/**
 * 去年
 */
export declare function prevYear(): timestamp;
export {};
