"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description 手机号
 */
exports.mobileRegExp = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[589])\d{8}$/;
/**
 * @description 二代身份证
 */
exports.idCardRegExp = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/;
/**
 * @description qq号
 */
exports.qqRegExp = /^[1-9][0-9]{4,10}$/;
/**
 * @description 微信号
 */
exports.wxRegExp = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;
/**
 * @description 车牌号
 */
exports.carRegExp = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
/**
 * @description 中文
 */
exports.chineseRegExp = /.*[\u4e00-\u9fa5]+.*$/;
