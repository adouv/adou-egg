import 'reflect-metadata';
export const RouterList: RouterInfoModel[] = [];
/**
 * 路由修饰器
 * @router(路由,选项)
 * @export
 * @param  {string} [router] 路由地址(如果不填写默认为action名称)
 * @param  {options} [options] 配置项
 * @return 
 */
export function router(router: string = '', options: options = { method: Methods.POST }) {

    let AppRouterList: RouterInfoModel[] = RouterList;

    return (target: any, methodName: string, _descriptor: PropertyDescriptor) => {

        let controllerName: string = CharService.toSmallHumo(String(target.constructor.name).replace('Controller', '').toString());

        const configRoute = (prefix: string) => {

            let routerItem: RouterInfoModel;

            if (router && '' !== router) {
                routerItem = {
                    _controller: target,
                    controller: CharService.toSmallHumo(target.constructor.name),
                    controllerName: controllerName,
                    action: methodName,
                    routerURL: `/${controllerName}/${methodName}`,
                    options: options,
                    prefix: prefix
                };
            }
            else {
                routerItem = {
                    _controller: target,
                    controller: CharService.toSmallHumo(target.constructor.name),
                    controllerName: controllerName,
                    action: methodName,
                    routerURL: prefix !== '' ? `/${prefix}/${methodName}` : `/${controllerName}/${methodName}`,
                    options: options,
                    prefix: prefix
                };
            }

            AppRouterList.push(routerItem);
        }

        Reflect.defineMetadata('configRoute', configRoute, target.constructor.prototype, methodName);
    };
}
/**
 * 路由实体
 */
export interface RouterInfoModel {
    _controller: any;
    /**
     * 控制器
     */
    controller: string;
    /**
     * 控制器名称(不包含后缀)
     */
    controllerName: string;
    /**
     * 动作名称
     */
    action: string;
    /**
     * 路由地址
     */
    routerURL: string;
    /**
     * 配置项
     */
    options: options;
    /**
     * 域名
     */
    prefix: string;
}
/**
 * 路由配置
 */
export interface options {
    /**
     * 请求类型
     */
    method: string;
    /**
     * 路由类型
     */
    routerMethod?: any;
    /**
     * 方法
     */
    name?: string;
    /**
     * 路径
     */
    url?: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 中间件
     */
    middleware?: string;
    /**
     * 路由扩展信息
     */
    extInfo?: string;
}
/**
 * 路由类型
 */
export enum Methods {
    ALL = 'all',
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete',
    PATCH = 'patch',
    OPTIONS = 'options',
    HEAD = 'head'
}

class CharService {
    /**
     * 将类名称转换为小驼峰命名法
     * @static
     * @param  {any} obj 
     * @return string 
     * @memberof CharService
     */
    public static toSmallHumo(obj): string {
        return `${String(obj.substring(0, 1)).toLocaleLowerCase()}${String(obj.substring(1, obj.length))}`;
    }
}