export const RouterList: any = [];
/**
 * 路由修饰器
 * @router(路由,选项)
 * @export
 * @param  {string} [router] 路由地址(如果不填写默认为action名称)
 * @param  {*} [options] 其他选项 譬如：HTTP请求类型... {methods:'POST',...}
 * @return 
 */
export function router(router: string, options?: any) {
    console.log('------router region------');

    console.log(`router:${router},options:${options}`);

    return (target: any, methodName: string, _descriptor: PropertyDescriptor) => {
        let controllerName: string = String(target.constructor.name).replace('Controller', '').toString();

        let actionName: string = methodName;

        let routerItem: any = {
            controller: controllerName,
            action: actionName,
            router: router
        };

        let path: string = `${controllerName}/`
        if (router) {
            path += `${router}`;
        } else {
            path += `${actionName}`;
        }

        console.log('path:', path);
        console.log('routerItem:', JSON.stringify(routerItem));
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
     * 控制器名称
     */
    controller: string;
    /**
     * 动作名称
     */
    action: string;
    /**
     * 路由地址
     */
    routerURL: string;
}