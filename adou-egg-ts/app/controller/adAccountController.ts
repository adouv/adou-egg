
import { Controller } from 'egg';
import { RequestAccountModel } from '../model/account/request/requestAccountModel';
import { router } from '../decorator/router.decorator';
/**
 * 
 * @export
 * @class AdAccountController
 * @extends Controller
 */
export default class AdAccountController extends Controller {
    @router('api/adAccount/insert')
    public async insert() {
        let { ctx, service } = this;
        try {
            let dto: RequestAccountModel = {
                Title: '我是标题',
                Account: '我是账号',
                Password: '我是密码',
                Email: '我是邮箱',
                Phone: '我是手机号',
                Url: '我是链接地址',
                Descript: '我是描述',
                Content: '我是内容',
                UpdateDateTime: new Date().toLocaleString().replace(' PM', '')
            };

            let result: any = await service.adAccountService.insert(dto);
            ctx.logger.info(`insert result:${JSON.stringify(result)}`);
            ctx.body = `insert result:${JSON.stringify(result)}`;
        } catch (error) {
            ctx.logger.error(`page controller error :${error}`);
        }
    }
    public async delete() {
        let { ctx, service } = this;
        try {
            let result: any = await service.adAccountService.delete({ Id: 2 });
            ctx.logger.info(`delete result:${JSON.stringify(result)}`);
            ctx.body = `delete result:${JSON.stringify(result)}`;
        } catch (error) {
            ctx.logger.error(`page controller error :${error}`);
        }
    }
    public async update() {
        let { ctx, service } = this;
        try {
            let dto: RequestAccountModel = {
                Id: 2,
                Title: '我是标题update',
                Account: '我是账号',
                Password: '我是密码',
                Email: '我是邮箱',
                Phone: '我是手机号',
                Url: '我是链接地址',
                Descript: '我是描述',
                Content: '我是内容',
                UpdateDateTime: new Date().toLocaleString().replace(' PM', '')
            };
            ctx.logger.info(`dto:${JSON.stringify(dto)}`);
            let result: any = await service.adAccountService.update(dto, { Id: dto.Id });
            ctx.logger.info(`update result:${JSON.stringify(result)}`);
            ctx.body = `delete update:${JSON.stringify(result)}`;
        } catch (error) {
            ctx.logger.error(`page controller error :${error}`);
        }
    }
    public async select() {
        let { ctx, service } = this;
        try {
            let result: any = await service.adAccountService.select();
            ctx.logger.info(`select result:${JSON.stringify(result)}`);
            ctx.body = `delete select:${JSON.stringify(result)}`;
        } catch (error) {
            ctx.logger.error(`page controller error :${error}`);
        }
    }
    public async get() {
        let { ctx, service } = this;
        try {
            let result: any = await service.adAccountService.get({ Id: 3 });
            ctx.logger.info(`get result:${JSON.stringify(result)}`);
            ctx.body = `get result:${JSON.stringify(result)}`;
        } catch (error) {
            ctx.logger.error(`page controller error :${error}`);
        }
    }

    public async query() {
        let { ctx, service } = this;
        try {
            let sql: string = "select * from ad_account where Id=?";
            let result: any = await service.adAccountService.query(sql, [4]);
            ctx.logger.info(`query result:${JSON.stringify(result)}`);
            ctx.body = `query result:${JSON.stringify(result)} `;
        } catch (error) {
            ctx.logger.error(`page controller error :${error}`);
        }
    }
}