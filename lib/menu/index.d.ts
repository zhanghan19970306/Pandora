declare type path = string;
declare type url = string;
interface menu {
    id: string;
    name: string;
    parentId: string;
    path: path;
    alias: string;
    type: string;
    href: url;
    icon: string;
    showit: boolean;
    disabled: boolean;
    permission: string;
    note: string;
    createdAt: number;
    updatedAt: number;
    hasChildren: boolean;
    identify: any;
    sortId: string;
    children: menu[];
}
/**
 * 平铺菜单转tree菜单
 *  @description  后台给到是平铺的菜单
 * @param { menu[] } data
 * @param { string } pid
 */
export declare function generateTreeMenus(data: menu[], pid: string): any[];
/**
 * 生成path路径映射菜单map
 * @description  key为path 值为整个菜单对象
 * @param {menu[]} menus
 * @returns {Map}
 */
export declare function generatePathMenu(menus: menu[]): Map<path, menu>;
/**
 * 生成url映射菜单map
 * @description key为url 值为整个菜单对象 (注：去除没有href的菜单对象)
 * @param {menu[]} menus
 * @returns {Map}
 */
export declare function generateUrlMenu(menus: menu[]): Map<url, menu>;
/**
 * 生成path映射子级菜单集合
 * @description key为path 值为子级菜单集合
 * @returns {Map<path, menu>}
 * @param originMenus
 */
export declare function generatePathChilrenMenus(originMenus: menu[]): Map<path, menu[]>;
export {};
