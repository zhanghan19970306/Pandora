import { SignV1 } from "./sign/v1"

const sign = new SignV1("123", "abc")

sign.getParams({ a: 1, b: 2 })

console.log(sign._md5BeforeStr)