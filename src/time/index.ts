import dayjs from "dayjs"

// 起别名
type timestamp = number[]

/**
 * 格式化时间
 * @param value
 * @param format
 */
export function formatTime(
    value: number,
    format: string = "YYYY-MM-DD HH:mm:ss"
): string {
    value = Number(value)
    if (!value) return "--"
    return dayjs(value).format(format)
}

/**
 * 最近一周 (此刻 往前推前7天)
 * @returns { timestamp[] }
 */
export function lastWeek(): timestamp {
    return [dayjs().add(-1, "week").valueOf(), dayjs().valueOf()]
}

/**
 * 最近一月 (此刻 往前推前30天)
 * @returns { timestamp[] }
 */
export function lastMonth(): timestamp {
    return [dayjs().add(-1, "month").valueOf(), dayjs().valueOf()]
}

/**
 * 最近三个月 (此刻 往前推前90天)
 * @returns { timestamp[] }
 */
export function last3Month(): timestamp {
    return [dayjs().add(-3, "month").valueOf(), dayjs().valueOf()]
}

/**
 * 最近一年 (此刻 往前推前365天)
 * @returns { timestamp[] }
 */
export function lastYear(): timestamp {
    return [dayjs().add(-1, "year").valueOf(), dayjs().valueOf()]
}

/**
 * 本周
 */
export function nowWeek(): timestamp {
    return [
        dayjs().add(1, "day").startOf("week").valueOf(),
        dayjs().add(1, "day").endOf("week").valueOf(),
    ]
}

/**
 * 上周
 */
export function prevWeek(): timestamp {
    return [
        dayjs().add(-1, "week").startOf("week").add(1, "day").valueOf(),
        dayjs().add(-1, "week").endOf("week").add(1, "day").valueOf(),
    ]
}

/**
 * 本月
 */
export function nowMonth(): timestamp {
    return [
        dayjs().startOf("month").valueOf(),
        dayjs().endOf("month").valueOf(),
    ]
}

/**
 * 上月
 */
export function prevMonth(): timestamp {
    return [
        dayjs().add(-1, "month").startOf("month").valueOf(),
        dayjs().add(-1, "month").endOf("month").valueOf(),
    ]
}

/**
 * 今年
 */
export function nowYear(): timestamp {
    return [dayjs().startOf("year").valueOf(), dayjs().endOf("year").valueOf()]
}

/**
 * 去年
 */
export function prevYear(): timestamp {
    return [
        dayjs().add(-1, "year").startOf("year").valueOf(),
        dayjs().add(-1, "year").endOf("year").valueOf(),
    ]
}
