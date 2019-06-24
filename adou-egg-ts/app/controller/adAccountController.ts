
import { Controller } from 'egg';
import { RequestAccountModel } from '../model/account/request/requestAccountModel';
/**
 * 
 * @export
 * @class AdAccountController
 * @extends Controller
 */
export default class AdAccountController extends Controller {
    public async insert() {
        // let { ctx } = this;
        // ctx.body = "insert";
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
            ctx.body = `insert result:${JSON.stringify(result)}`;
        } catch (error) {
            ctx.logger.error(`page controller error :${error}`);
        }
    }
    public async delete() {
        let { ctx, service } = this;
        try {
            let result: any = await service.adAccountService.delete();
            ctx.body = `delete result:${JSON.stringify(result)}`;
        } catch (error) {
            ctx.logger.error(`page controller error :${error}`);
        }
    }
    public async update() {
        let { ctx, service } = this;
        try {
            let result: any = await service.adAccountService.update();
            ctx.body = `delete update:${JSON.stringify(result)}`;
        } catch (error) {
            ctx.logger.error(`page controller error :${error}`);
        }
    }
    public async select() {
        let { ctx, service } = this;
        try {
            let result: any = await service.adAccountService.select();
            ctx.body = `delete select:${JSON.stringify(result)}`;
        } catch (error) {
            ctx.logger.error(`page controller error :${error}`);
        }
    }
    public async get() {
        let { ctx, service } = this;
        try {
            let result: any = await service.adAccountService.get();
            ctx.body = `get result:${JSON.stringify(result)}`;
        } catch (error) {
            ctx.logger.error(`page controller error :${error}`);
        }
    }


}