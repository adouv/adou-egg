import { RequestCommunityModel } from './../../model/community/request/requestCommunityModel';
import BaseService from '../baseService';
import { tableEnum } from '../../enum/table.enum'
/**
 * 抓取我爱我家数据服务
 * @export
 * @class adGetWoAiWoJiaDataService
 * @extends BaseService<RequestAccountModel>
 */
export default class AdGetWoAiWoJiaDataService extends BaseService<RequestCommunityModel>
{
    /**
     * 执行具体业务逻辑
     * @protected
     * @return Promise<void> 
     * @memberof AdGetWoAiWoJiaDataService
     */
    protected async ExecuteMethod(): Promise<void> {
        let { app } = this;

        let result: any = await app.mysql.select(tableEnum.adCommunity);

        this.Result.Data = result;
        this.Result.IsSuccess = true;
        this.Result.ErrorCode = "200";
        this.Result.Message = "成功！";
    }
}