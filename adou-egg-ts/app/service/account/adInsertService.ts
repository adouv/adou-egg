import BaseService from '../baseService';
import { RequestAccountModel } from '../../model/account/request/requestAccountModel';
import { TableEnum } from '../../enum/table.enum';
/**
 * 添加账户服务
 * @export
 * @class AdInsertService
 * @extends BaseService<RequestAccountModel>
 */
export default class AdInsertService extends BaseService<RequestAccountModel>
{
    /**
     * 执行具体业务逻辑
     * @protected
     * @return Promise<void> 
     * @memberof AdGetListService
     */
    protected async ExecuteMethod(): Promise<void> {
        let { app } = this;

        let result: any = await app.mysql.insert(TableEnum.adAccount, this.Parameter);
        
        this.Result.Data = result;
        this.Result.IsSuccess = true;
        this.Result.ErrorCode = "200";
        this.Result.Message = "成功！";
        this.Result.Status = 200;
    }
}