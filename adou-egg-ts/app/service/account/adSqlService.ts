import BaseService from '../baseService';
import { RequestAccountModel } from '../../model/account/request/requestAccountModel';
import { tableEnum } from '../../enum/table.enum';
/**
 * 通过SQL语句操作数据库
 * @export
 * @class AdSqlService
 * @extends BaseService<RequestAccountModel>
 */
export default class AdSqlService extends BaseService<RequestAccountModel>
{
    /**
     * 执行具体业务逻辑
     * @protected
     * @return Promise<void> 
     * @memberof AdGetListService
     */
    protected async ExecuteMethod(): Promise<void> {
        let { app } = this;

        let result: any = await app.mysql.query(`select * from ${tableEnum.adAccount} where Id=?`, [this.Parameter.Id]);

        this.Result.Data = result;
        this.Result.IsSuccess = true;
        this.Result.ErrorCode = "200";
        this.Result.Message = "成功！";
    }
}