import BaseService from '../baseService';
import { RequestCommunityModel } from '../../model/community/request/requestCommunityModel';
import { tableEnum } from '../../enum/table.enum'

/**
 * 获取房屋数据服务
 */
export default class AdGetListByNameService extends BaseService<RequestCommunityModel>
{
    /**
     * 执行具体业务逻辑
     * @protected
     * @return Promise<void> 
     * @memberof AdGetListByNameService
     */
    protected async ExecuteMethod(): Promise<void> {
        let { app } = this;

        let where: RequestCommunityModel = {
            name: this.Parameter.name
        };

        let result: any = await app.mysql.select(tableEnum.adCommunity, { where: where });

        this.Result.Data = result;
        this.Result.IsSuccess = true;
        this.Result.ErrorCode = "200";
        this.Result.Message = "成功！";
    }
}