import BaseService from '../baseService';
import { RequestAccountModel } from '../../model/account/request/requestAccountModel';
import { tableEnum } from '../../enum/table.enum';
/**
 * 删除账户服务
 * @export
 * @class AdDeleteService
 * @extends BaseService<RequestAccountModel>
 */
export default class AdDeleteService extends BaseService<RequestAccountModel>
{
    /**
     * 执行具体业务逻辑
     * @protected
     * @return Promise<void> 
     * @memberof AdGetListService
     */
    protected async ExecuteMethod(): Promise<void> {
        let { app } = this;

        let where: RequestAccountModel = {
            Id: this.Parameter.Id
        };

        let result: any = await app.mysql.delete(tableEnum.adAccount, where);
        this.Result.Data = result;
        this.Result.IsSuccess = true;
        this.Result.ErrorCode = "200";
        this.Result.Message = "成功！";
    }
}