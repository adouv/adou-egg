import 'reflect-metadata';
/**
 * 
 * @param prefix 
 */
export function prefix(prefix: string) {
    return (target: Function) => {
        Reflect.defineMetadata('prefix', prefix, target.prototype);
    }
}