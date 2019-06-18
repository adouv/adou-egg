/**
 * 路由实体模型
 * @export
 * @interface Router
 */
export interface Router {
    /**
     * 路由地址
     */
    path: string;
    /**
     * 对应控制器，Action
     */
    controller: any;
}