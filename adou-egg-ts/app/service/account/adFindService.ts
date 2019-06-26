import BaseService from '../baseService';
import { RequestAccountModel } from '../../model/account/request/requestAccountModel';
import { TableEnum } from '../../enum/table.enum';
/**
 * 根据条件获取账户列表服务
 * @export
 * @class AdGetListService
 * @extends BaseService<RequestAccountModel>
 */
export default class AdFindService extends BaseService<RequestAccountModel>
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

        let result: any = await app.mysql.get(TableEnum.adAccount, { where: where });

        this.Result.Data = result;
        this.Result.IsSuccess = true;
        this.Result.ErrorCode = "200";
        this.Result.Message = "成功！";
    }
}