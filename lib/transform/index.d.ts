/**
 * 返回索引对应的中文
 * @param index
 */
export declare function indexToChinese(index: number): string;
/**
 * 返回week对应的中文
 * @param num
 */
export declare function weekToChinese(index: number): string;
/**
 * 10000 => "10,000" 支持带小数点
 * @param {number} num
 */
export declare function toThousand(num: number): string;
/**
 * 1024 => "1KB"
 * @param bytes
 */
export declare function bytesToSize(bytes: number): string;
/**
 * 转化显示某个数组中 某个字段的拼接
 * @example "[ { name: ‘XXX1’}, { name: 'XXX2' } ]" => "XXX1, XXX2"
 * @param arr
 * @param field
 */
export declare function arrayFieldToStr(arr: [], field: string): string;
/**
 * 金钱格式化
 * @param money 钱 单位应当为 “分”
 * @param precision 精度 默认为2
 * @param thousand 是否千分号显示 默认为true
 */
export declare function formatMoney(money: number | string, precision?: number, thousand?: boolean): string | number;
