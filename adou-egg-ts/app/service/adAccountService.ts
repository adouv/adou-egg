import { RequestAccountModel } from '../model/account/request/requestAccountModel';
import { Service } from 'egg';
/**
 * 账户服务类
 * @export
 * @class AdAccount
 * @extends Service
 */
export default class AdAccountService extends Service {
    /**
     * 表名
     * @type String
     * @memberof AdAccountService
     */
    table_name: String = "ad_account";
    /**
     * 
     * @param  {adAccountModel} [where] 
     * @return Promise<any> 
     * @memberof AdAccountService
     */
    public async insert(dto: RequestAccountModel): Promise<any> {
        const { app } = this;
        const result: any = await app.mysql.insert(`${this.table_name}`, dto);
        return result;
    }
    /**
     * 
     * @param  {adAccountModel} [where] 
     * @return Promise<any> 
     * @memberof AdAccountService
     */
    public async delete(where: RequestAccountModel): Promise<any> {
        const { app } = this;
        const result: any = await app.mysql.delete(`${this.table_name}`, where);
        return result;
    }
    /**
     * 
     * @param  {adAccountModel} [where] 
     * @return Promise<any> 
     * @memberof AdAccountService
     */
    public async update(dto: RequestAccountModel, where: RequestAccountModel): Promise<any> {
        const { app } = this;
        console.log(where);
        const result: any = await app.mysql.update(`${this.table_name}`, dto, {
            where: where
        });
        return result;
    }
    /**
     * 
     * @param  {adAccountModel} [where] 
     * @return Promise<any> 
     * @memberof AdAccountService
     */
    public async select(where?: RequestAccountModel): Promise<any> {
        const { app } = this;
        const result: any = await app.mysql.select(`${this.table_name}`, { where: where });
        return result;
    }
    /**
     * 直接执行SQL语句
     * @param  {string} sql 语句
     * @param  {any[]} values 值
     * @return Promise<any> 
     * @memberof AdAccountService
     */
    public async query(sql: string, values: any[]): Promise<any> {
        const { app } = this;
        const result: any = await app.mysql.query(sql, values);
        return result;
    }
    /**
     * 
     * @param  {adAccountModel} [where] 
     * @return Promise<any> 
     * @memberof AdAccountService
     */
    public async get(where?: RequestAccountModel): Promise<any> {
        const { app } = this;
        const result: any = await app.mysql.get(`${this.table_name}`, where);
        return result;
    }
}
