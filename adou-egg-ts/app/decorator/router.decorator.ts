export const routerList: any = [];
/**
 * 
 * @export
 * @param  {string} [router] 
 * @param  {*} [options] 
 * @return 
 */
export function router(router?: string) {
    console.log(router);
    return (target: any, methodName: string, _descriptor: PropertyDescriptor) => {
        console.log('target:', target);
        console.log('methodName:', methodName);
        console.log('_descriptor:', _descriptor);
    };
}