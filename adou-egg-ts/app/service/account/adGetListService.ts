import BaseService from '../baseService';
import { RequestUserModel } from '../../model/user/request/requestUserModel';

export default class AdGetListService extends BaseService<RequestUserModel>
{
    /**
     * 执行具体业务逻辑
     * @protected
     * @return Promise<void> 
     * @memberof AdGetListService
     */
    protected async ExecuteMethod(): Promise<void> {
        let result: any = await this.app.mysql.select('');
        this.Result.Data = result;
        this.Result.IsSuccess = true;
        this.Result.ErrorCode = "200";
        this.Result.Message = "成功！";
    }
}