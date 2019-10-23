import { CommunityModel } from './../../dto/kjl/communityModel';
import BaseService from '../baseService';
import { RequestCommunityModel } from '../../model/community/request/requestCommunityModel';
import { tableEnum } from '../../enum/table.enum'

/**
 * 添加房屋数据服务
 */
export default class AdInsertCommunityService extends BaseService<RequestCommunityModel>
{
    /**
     * 执行具体业务逻辑
     * @protected
     * @return Promise<void> 
     * @memberof AdInsertCommunityService
     */
    protected async ExecuteMethod(): Promise<void> {
        let { app } = this;

        let model: CommunityModel = {
            name: this.Parameter.name,
            address: this.Parameter.address,
            province: this.Parameter.province,
            city: this.Parameter.city,
            area: this.Parameter.area,
            telephone: this.Parameter.telephone,
            uid: this.Parameter.uid,
            street_id: this.Parameter.street_id,
            detail: this.Parameter.detail,
            lat: this.Parameter.lat,
            lng: this.Parameter.lng
        };

        let result: any = await app.mysql.insert(tableEnum.adCommunity, model);

        this.Result.Data = result;
        this.Result.IsSuccess = true;
        this.Result.ErrorCode = "200";
        this.Result.Message = "成功！";
    }
}