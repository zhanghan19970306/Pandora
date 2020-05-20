/**
 * 平滑滚动至顶部
 */
const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop)
        window.scrollTo(0, c - c / 8)
    }
}

/**
 * 是否是mac系统
 */
export const isMac = /macintosh|mac os x/i.test(navigator.userAgent)

/**
 * 是否是windos系统
 */
export const isWindows = /windows|win32/i.test(navigator.userAgent)
