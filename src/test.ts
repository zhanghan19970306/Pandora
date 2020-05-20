import { prevMonth } from "./time"
import dayjs from "dayjs"

console.log(
    prevMonth(),
    prevMonth().map((time) => dayjs(time).format("YYYY-MM-DD HH:mm:ss"))
)
console.log(
    [1585670400000, 1588262399000],
    [1585670400000, 1588262399000].map((time) =>
        dayjs(time).format("YYYY-MM-DD HH:mm:ss")
    )
)
