/**
 * 10000 => "10,000"
 * @param {number} num
 */
export declare function moneyToThousand(num: number): string;
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
