import { literals } from './literals';
import { Insert } from './insert.mysql';
/**
 * mysql工具类
 */
export interface mysql {
    /**
     * 插入数据
     * @param tableName 表名
     * @param where 插入条件
     */
    insert(tableName?: String, where?: any): Promise<Insert>;
    /**
     * 删除数据
     * @param tableName 表名
     * @param where 删除条件
     */
    delete(tableName?: String, where?: any): any;
    /**
     * 更新数据
     * @param tableName 表名
     * @param where 更新条件
     */
    update(tableName?: String, where?: any): any;
    /**
    * 查询数据
    * @param tableName 表明
    * @param where 查询条件
    */
    select(tableName?: String, where?: any): any;
    /**
     * 执行sql语句
     * 注意！！我们及其不建议开发者拼接sql语句，这样很容易引起sql注入！！
     * 如果必须要自己拼接 sql 语句，请使用 mysql.escape 方法。
     * @param tableName 表名
     * @param where 执行条件
     */
    query(tableName?: String, where?: any): any;
    /**
     * 查询一条记录
     * @param tableName 表名
     * @param obj 查询条件
     */
    get(tableName?: String, where?: any): any;
    /**
     * 手动控制事务
     * 优点：beginTransaction, commit 或 rollback 都由开发者来完全控制，可以做到非常细粒度的控制。
     * 缺点：手写代码比较多，不是每个人都能写好。忘记了捕获异常和 cleanup 都会导致严重 bug。
     */
    beginTransaction(): any;
    /**
     * 自动控制：Transaction with scope
     * 优点：使用简单，不容易犯错，就感觉事务不存在的样子。
     * 缺点：整个事务要么成功，要么失败，无法做细粒度控制。
     * @param scope 一个 generatorFunction，在这个函数里面执行这次事务的所有 sql 语句。
     * @param ctx 当前请求的上下文对象，传入 ctx 可以保证即便在出现事务嵌套的情况下，一次请求中同时只有一个激活状态的事务。
     */
    beginTransactionScope(scope?: any, ctx?: any): any;
    /**
     * 表达式
     */
    literals: literals;
}