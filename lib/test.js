"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const time_1 = require("./time");
const dayjs_1 = __importDefault(require("dayjs"));
console.log(time_1.prevMonth(), time_1.prevMonth().map((time) => dayjs_1.default(time).format("YYYY-MM-DD HH:mm:ss")));
console.log([1585670400000, 1588262399000], [1585670400000, 1588262399000].map((time) => dayjs_1.default(time).format("YYYY-MM-DD HH:mm:ss")));
