import dayjs from "dayjs"

/**
 * 返回索引对应的中文
 * @param index
 */
function indexToChinese(index: number) {
    return ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"][index]
}

/**
 * 10000 => "10,000"
 * @param {number} num
 */
export function moneyToThousand(num: number): string {
    return (+num || 0)
        .toString()
        .replace(/^-?\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ","))
}
