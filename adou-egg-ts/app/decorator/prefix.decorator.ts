import 'reflect-metadata';
/**
 * 
 * @param prefix 
 */
export function prefix(prefix: string = "") {
    return (target: Function) => {
        Reflect.defineMetadata('prefix', prefix, target.prototype);

        Object.getOwnPropertyNames(target.prototype).forEach(param => {
            const configRoute: Function = Reflect.getMetadata('configRoute', target.prototype, param);
            if (configRoute && typeof configRoute === 'function') {
                configRoute(prefix);
            }
        });

    }
}