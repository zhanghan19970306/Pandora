// 车牌号(新能源+非新能源)
export const carRE: RegExp = /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/

// 火车车次
export const car2RE: RegExp = /^[GCDZTSPKXLY1-9]\d{1,4}$/

// IMEI号 (alias: 手机串号, 手机序列号)
export const IMEIRE: RegExp = /^\d{15,17}$/

// 必须带端口号的网址(或ip)
export const addrOrIPRE: RegExp = /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/

// 统一社会信用代码
export const creditRE: RegExp = /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/

// 银行卡号（10到30位, 覆盖对公/私账户, 参考[微信支付])
export const bankCardRE: RegExp = /^[1-9]\d{9,29}$/

// 中文姓名
export const chineseNameRE: RegExp = /^(?:[\u4e00-\u9fa5·]{2,16})$/

// 手机号(mobile phone)中国(严谨), 根据工信部2019年最新公布的手机号段
export const mobileRE: RegExp = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/

// 手机号(mobile phone)中国(宽松), 只要是13,14,15,16,17,18,19开头即可
export const mobile2RE: RegExp = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/

// 手机号(mobile phone)中国(最宽松), 只要是1开头即可, 如果你的手机号是用来接收短信, 优先建议选择这一条
export const mobile3RE: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

// 座机(tel phone)电话(国内),如: 0341-86091234
export const telRE: RegExp = /^\d{3}-\d{8}$|^\d{4}-\d{7}$/

// 身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X
export const idCardRE: RegExp = /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0\d|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/

// 护照（包含香港、澳门）
export const passportRE: RegExp = /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/

// 护照（包含香港、澳门）
export const chineseRE: RegExp = /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/

// QQ号
export const qqRE: RegExp = /^[1-9][0-9]{4,10}$/;

// 微信号
export const wxRE: RegExp = /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/;

// 邮政编码
export const postalRE: RegExp = /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/;

// Ip-v4
export const Ip4RE: RegExp = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;







