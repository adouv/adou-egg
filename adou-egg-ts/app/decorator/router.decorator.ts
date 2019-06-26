export const RouterDto: any = [];
/**
 * 路由修饰器
 * @router(路由,选项)
 * @export
 * @param  {string} [router] 路由地址
 * @param  {*} [options] 其他选项 譬如：HTTP请求类型... {methods:'POST',...}
 * @return 
 */
export function router(router: string, options?: any) {
    console.log('------router region------');
    let path: string = router;

    console.log('router:', path);
    console.log('options:', options);

    return (target: any, methodName: string, _descriptor: PropertyDescriptor) => {
        let controllerName: string = target;
        let actionName: string = methodName;
        console.log('controllerName:', controllerName);
        console.log('actionName:', actionName);
        console.log('target:', target);
        console.log('methodName:', methodName);
        console.log('_descriptor:', _descriptor);

        console.log('------router endregion------');
    };
}