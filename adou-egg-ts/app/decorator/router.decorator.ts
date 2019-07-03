import 'reflect-metadata';
export const RouterList: RouterInfoModel[] = [];
/**
 * 路由修饰器
 * @router(路由,选项)
 * @export
 * @param  {string} [router] 路由地址(如果不填写默认为action名称)
 * @param  {options} [options] 其他选项 譬如：HTTP请求类型... {methods:'POST',name:'...',...}
 * @return 
 */
export function router(router: string = '', options: options = { method: Methods.POST }) {
    let appRouterList = RouterList;

    return (target: any, methodName: string, _descriptor: PropertyDescriptor) => {

        // console.log('target:', target.constructor);
        let controllerName: string = String(target.constructor.name).replace('Controller', '').toString();

        let actionName: string = methodName;

        const ConfigRoute = (prefix: string) => {

            let routerItem: RouterInfoModel;

            if (router && '' !== router) {
                routerItem = {
                    controller: target.constructor.name,
                    controllerName: controllerName,
                    action: methodName,
                    routerURL: `/${controllerName}/${actionName}`,
                    options: options,
                    prefix: prefix
                };
            }
            else {
                routerItem = {
                    controller: target.constructor.name,
                    controllerName: controllerName,
                    action: methodName,
                    routerURL: `/${controllerName}/${actionName}`,
                    options: options,
                    prefix: prefix
                };
            }

            appRouterList.push(routerItem);
        }

        console.log('conf:', Reflect.getMetadata('configRoute', target.constructor.prototype, methodName));

        Reflect.defineMetadata('configRoute', ConfigRoute, target.constructor.prototype, methodName);

        // Reflect.defineMetadata('PATH_METADATA', routerItem,_descriptor.value);

        // console.log('_descriptor:', _descriptor);

        // console.log('------router endregion------');
    };
}
/**
 * 路由实体
 */
export interface RouterInfoModel {
    /**
     * 控制器
     */
    controller?: any;
    /**
     * 控制器名称(不包含后缀)
     */
    controllerName: string;
    /**
     * 动作名称
     */
    action?: string;
    /**
     * 路由地址
     */
    routerURL?: string;
    /**
     * 配置项
     */
    options?: options;
    prefix: any;
}
/**
 * 路由配置
 */
export interface options {
    /**
     * 路由名称
     */
    method?: string;
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
    ALL = 'ALL',
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
    OPTIONS = 'OPTIONS',
    HEAD = 'HEAD'
}