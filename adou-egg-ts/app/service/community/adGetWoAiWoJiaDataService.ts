import { RequestCommunityModel } from './../../model/community/request/requestCommunityModel';
import BaseService from '../baseService';
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
        let { ctx } = this;

        let wawjURL: string = "https://bj.5i5j.com/ershoufang/chaoyangqu/?wscckey=08e8cd4d6787c78b_1571823617";

        let result: any = await ctx.curl(wawjURL, {
            dataType: 'json'
        });

        this.Result.Data = result;
        this.Result.IsSuccess = true;
        this.Result.ErrorCode = "200";
        this.Result.Message = "成功！";
    }
}