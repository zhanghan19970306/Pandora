"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 平铺菜单转tree菜单
 *  @description  后台给到是平铺的菜单
 * @param { menu[] } data
 * @param { string } pid
 */
function generateTreeMenus(data, pid) {
    const tree = [];
    data.forEach((item) => {
        if (item.parentId === pid && item.type === "menu") {
            const menuItem = {
                id: item.id,
                name: item.name,
                identify: item.identify,
                alias: item.alias,
                type: item.type,
                showit: item.showit,
                hasChildren: item.hasChildren,
                icon: item.icon,
                sortId: item.sortId,
                parentId: item.parentId,
                url: item.href,
                path: item.href ? item.href : `/${item.alias}`,
                treePath: item.path,
                createdAt: item.createdAt,
                updatedAt: item.updatedAt,
                meta: { title: item.name, icon: item.icon },
                children: generateTreeMenus(data, item.id)
            };
            tree.push(menuItem);
        }
    });
    return tree;
}
exports.generateTreeMenus = generateTreeMenus;
/**
 * 生成path路径映射菜单map
 * @description  key为path 值为整个菜单对象
 * @param {menu[]} menus
 * @returns {Map}
 */
function generatePathMenu(menus) {
    let urlMenus = new Map();
    menus.forEach((item) => urlMenus.set(item.path, item));
    return urlMenus;
}
exports.generatePathMenu = generatePathMenu;
/**
 * 生成url映射菜单map
 * @description key为url 值为整个菜单对象 (注：去除没有href的菜单对象)
 * @param {menu[]} menus
 * @returns {Map}
 */
function generateUrlMenu(menus) {
    let urlMenus = new Map();
    menus.forEach((item) => {
        if (item.href) {
            urlMenus.set(item.href, item);
        }
    });
    return urlMenus;
}
exports.generateUrlMenu = generateUrlMenu;
/**
 * 生成path映射子级菜单集合
 * @description key为path 值为子级菜单集合
 * @returns {Map<path, menu>}
 * @param originMenus
 */
function generatePathChilrenMenus(originMenus) {
    const menus = new Map();
    originMenus.forEach((item) => {
        var _a;
        if (item.type === "menu" && item.showit) {
            if (item.path.length === 4) {
                menus.set(item.path, []);
            }
            else {
                const pPath = item.path.slice(0, (item.path.length / 4 - 1) * 4);
                if (menus.has(pPath)) {
                    (_a = menus.get(pPath)) === null || _a === void 0 ? void 0 : _a.push(item);
                }
                else {
                    menus.set(pPath, [item]);
                }
            }
        }
    });
    return menus;
}
exports.generatePathChilrenMenus = generatePathChilrenMenus;
