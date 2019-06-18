import { Service } from 'egg';
/**
 * 
 * @export
 * @class AdAccount
 * @extends Service
 */
export default class AdAccount extends Service {
    /**
     * 
     * @param  {*} [where] 
     * @return 
     * @memberof AdAccountService
     */
    public async getList(where?: any) {
        const { app } = this;
        const result: any = await app.mysql.select('ad_account',where);
        return result;
    }
}
