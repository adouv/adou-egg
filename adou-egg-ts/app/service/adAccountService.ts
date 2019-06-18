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
     * @param  {*} [where] 
     * @return 
     * @memberof AdAccountService
     */
    public async getList(where?: any) {
        const { app } = this;
        const result: any = await app.mysql.select(`${this.table_name}`, where);
        return result;
    }
}
