
import { Controller } from 'egg';
import { RequestCommunityModel } from '../model/community/request/requestCommunityModel';
import { prefix } from '../decorator/prefix.decorator';
import { router, Methods } from '../decorator/router.decorator';
import { RequestModel } from '../model/requestModel';

/**
 * 房屋数据控制器
 * @export
 * @class adCommunityController
 * @extends {Controller}
 */
@prefix()
export default class adCommunityController extends Controller {
    /**
     *
     *
     * @returns {Promise<void>}
     * @memberof AdAccountController
     */
    @router('getCommunityByName', { method: Methods.GET })
    public async getCommunityByName(): Promise<void> {
        let { ctx, service } = this;

        let dto: RequestCommunityModel = {
            name: "象房庄园"
        };

        let model: RequestModel = {
            UserId: '0',
            Data: JSON.stringify(dto),
            EncryptKey: ''
        };

        let result: any = await service.community.adGetListByNameService.Execute(model);

        ctx.logger.info(`insert result:${JSON.stringify(result)}`);
        ctx.body = `insert result:${JSON.stringify(result)}`;
    }

    /**
     *
     *
     * @returns {Promise<void>}
     * @memberof AdAccountController
     */
    @router('insert', { method: Methods.GET })
    public async insert(): Promise<void> {
        let { ctx, service } = this;

        let dto: RequestCommunityModel = {
            name: "象房庄园1",
            address: "1",
            province: "2",
            city: "3",//
            area: "4",
            telephone: "5",
            uid: "6",
            street_id: "7",
            detail: 0,
            lat: 0,
            lng: 0
        };

        let model: RequestModel = {
            UserId: '0',
            Data: JSON.stringify(dto),
            EncryptKey: ''
        };

        let result: any = await service.community.adInsertCommunityService.Execute(model);

        ctx.logger.info(`insert result:${JSON.stringify(result)}`);
        ctx.body = `insert result:${JSON.stringify(result)}`;
    }
}