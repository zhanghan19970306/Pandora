"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regexp_1 = require("./regexp");
/**
 * 是否为空
 * @param value
 */
function isEmpty(value) {
    return value === "" || value === null || value === undefined;
}
exports.isEmpty = isEmpty;
/**
 * 是否 不为空
 * @param {*} value
 * @returns {boolean}
 */
function isNotEmpty(value) {
    return value !== "" || value !== null || value !== undefined;
}
exports.isNotEmpty = isNotEmpty;
/**
 * 是否 不符合手机号格式
 * @param {string | number} value
 * @returns {boolean}
 */
function isNotMobile(value) {
    return !regexp_1.mobileRE.test(value);
}
exports.isNotMobile = isNotMobile;
exports.default = {
    isNotEmpty,
    isNotMobile,
};
