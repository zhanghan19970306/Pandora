type path = string // exmaple：0001 00010001 000100010001
type url = string // exmaple: /platform/sys/unit

interface menu {
    id: string
    name: string
    parentId: string
    path: path
    alias: string
    type: string
    href: url
    icon: string
    showit: boolean
    disabled: boolean
    permission: string
    note: string
    createdAt: number
    updatedAt: number
    hasChildren: boolean
    children: menu[]
}

/**
 * 生成path路径映射菜单map
 * @description  key为path 值为整个菜单对象
 * @param {menu[]} menus
 * @returns {Map}
 */
export function generatePathMenu(menus: menu[]): Map<path, menu> {
    let urlMenus = new Map()
    menus.forEach((item) => urlMenus.set(item.path, item))
    return urlMenus
}

/**
 * 生成url映射菜单map
 * @description key为url 值为整个菜单对象 (注：去除没有href的菜单对象)
 * @param {menu[]} menus
 * @returns {Map}
 */
export function generateUrlMenu(menus: menu[]): Map<url, menu> {
    let urlMenus = new Map()
    menus.forEach((item) => item.href ?? urlMenus.set(item.href, item))
    return urlMenus
}

/**
 * 生成path映射子级菜单集合
 * @description key为path 值为子级菜单集合
 * @returns {Map<path, menu>}
 * @param originMenus
 */
export function generatePathChilrenMenus(
    originMenus: menu[]
): Map<path, menu[]> {
    const menus: Map<path, menu[]> = new Map()

    originMenus.forEach((item) => {
        if (item.type === "menu" && item.showit) {
            if (item.path.length === 4) {
                menus.set(item.path, [])
            } else {
                const pPath = item.path.slice(0, (item.path.length / 4 - 1) * 4)
                if (menus.has(pPath)) {
                    menus.get(pPath)?.push(item)
                } else {
                    menus.set(item.path, [item])
                }
            }
        }
    })

    return menus
}
