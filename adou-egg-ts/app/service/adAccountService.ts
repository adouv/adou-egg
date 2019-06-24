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
    public async delete(where?: RequestAccountModel): Promise<any> {
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
    public async update(where?: RequestAccountModel): Promise<any> {
        const { app } = this;
        const result: any = await app.mysql.update(`${this.table_name}`, where);
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
        const result: any = await app.mysql.select(`${this.table_name}`, where);
        return result;
    }
    /**
     * 
     * @param  {adAccountModel} [where] 
     * @return Promise<any> 
     * @memberof AdAccountService
     */
    public async query(where?: RequestAccountModel): Promise<any> {
        const { app } = this;
        const result: any = await app.mysql.query(`${this.table_name}`, where);
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
