import { CommunityModel } from './../dto/kjl/communityModel';
import { Controller } from 'egg';
import { prefix } from '../decorator/prefix.decorator';
import { router, Methods } from '../decorator/router.decorator';
import { RequestModel } from '../model/requestModel';
// import * as cheerio from 'cheerio';
// import * as iconv from 'iconv-lite';

/**
 * 房屋数据控制器
 * @export
 * @class adCommunityController
 * @extends {Controller}
 */
@prefix()
export default class adCommunityController extends Controller {
    @router('getWawjData', { method: Methods.GET })
    public async getWawjData(): Promise<void> {
        let { ctx } = this;

        //let wawjURL: string = "https://bj.5i5j.com/ershoufang/chaoyangqu/?wscckey=08e8cd4d6787c78b_1571823617";

        // let result: any = await ctx.curl(wawjURL, {
        //     dataType: 'json'
        // });

        // let r:any = cheerio.load(iconv.decode(result, 'gb2312'));

        ctx.logger.info(`wawj result:${1}`);
        ctx.body = `wawj result:${1}`;


        // let dto: CommunityModel = {
        //     name: "象房庄园"
        // };

        // let model: RequestModel = {
        //     UserId: '0',
        //     Data: JSON.stringify(dto),
        //     EncryptKey: ''
        // };

        // let result: any = await service.community.adGetWoAiWoJiaDataService.Execute(model);

        // ctx.logger.info(`insert result:${JSON.stringify(result)}`);
        // ctx.body = `insert result:${JSON.stringify(result)}`;
    }
    /**
     *
     *
     * @returns {Promise<void>}
     * @memberof AdAccountController
     */
    @router('getCommunityByName', { method: Methods.GET })
    public async getCommunityByName(): Promise<void> {
        let { ctx, service } = this;

        let dto: CommunityModel = {
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

        let dto: CommunityModel = {
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