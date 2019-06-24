import BaseService from './baseService';
import { RequestAccountModel } from '../model/account/request/requestAccountModel';
/**
 * 
 * @export
 * @class AdUserService
 * @extends BaseService<RequestUserModel>
 */
export default class AdUserService extends BaseService<RequestAccountModel>
{
    /**
     * 执行具体业务逻辑
     * @protected
     * @return Promise<void> 
     * @memberof AdUserService
     */
    protected async ExecuteMethod(): Promise<void> {
        let { app } = this;
        const result: any = await app.mysql.insert(`ad_account`, this.Parameter);
        this.Result.Data = JSON.stringify(result);
    }
}