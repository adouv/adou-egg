import 'reflect-metadata';
export const RouterModel: RouterInfoModel[] = [];
/**
 * 路由修饰器
 * @router(路由,选项)
 * @export
 * @param  {string} [router] 路由地址(如果不填写默认为action名称)
 * @param  {options} [options] 其他选项 譬如：HTTP请求类型... {methods:'POST',name:'...',...}
 * @return 
 */
export function router(router: string = '', options: options = {}) {
    let AppRouterModel: RouterInfoModel[] = RouterModel;

    console.log('------router region------');


    return (target: any, methodName: string, _descriptor: PropertyDescriptor) => {

        console.log('target:',target.constructor.prototype);
        let controllerName: string = String(target.constructor.name).replace('Controller', '').toString();

        let actionName: string = methodName;

        const ConfigRoute = (prefix: string) => {
            console.log(prefix);
            let routerItem: RouterInfoModel;
            if (router && '' !== router) {
                routerItem = {
                    controller: target.constructor.name,
                    controllerName: controllerName,
                    action: router,
                    routerURL: `/${controllerName}/${actionName}`,
                    options: options
                };
            }
            else {
                routerItem = {
                    controller: target.constructor.name,
                    controllerName: controllerName,
                    action: actionName,
                    routerURL: `/${controllerName}/${actionName}`,
                    options: options
                };
            }
            AppRouterModel.push(routerItem);
            console.log('routerModel:', JSON.stringify(AppRouterModel));
        };

        Reflect.defineMetadata('ConfigRoute', ConfigRoute, target.constructor.prototype, actionName);
        // let cof:any=Reflect.getMetadata();

        // console.log('target:', target);
        // console.log('methodName:', methodName);
        console.log('_descriptor:', _descriptor);

        console.log('------router endregion------');
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
    controllerName?: string;
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
    POST = 'POST',
    GET = 'GET',
    PATCH = 'PATCH',
    DEL = 'DEL',
    OPTIONS = 'OPTIONS',
    PUT = 'PUT'
}