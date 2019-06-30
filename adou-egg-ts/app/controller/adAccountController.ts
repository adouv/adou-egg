
import { Controller } from 'egg';
import { RequestAccountModel } from '../model/account/request/requestAccountModel';
import { router } from '../decorator/router.decorator';
import { RequestModel } from '../model/requestModel';
/**
 * 
 * @export
 * @class AdAccountController
 * @extends Controller
 */
export default class AdAccountController extends Controller {

    tableName: string;

    @router('insert', {})
    public async insert(): Promise<void> {
        let { ctx, service } = this;
        let dto: RequestAccountModel = {
            Title: '我是标题',
            Account: '我是账号',
            Password: '我是密码',
            Email: '我是邮箱',
            Phone: '我是手机号',
            Url: '我是链接地址',
            Descript: '我是描述',
            Content: '我是内容',
            UpdateDateTime: new Date().toLocaleString().replace(' PM', '').replace(' AM', '')
        };

        let model: RequestModel = {
            UserId: '0',
            Data: JSON.stringify(dto),
            EncryptKey: ''
        };

        // console.log(JSON.stringify(model));
        let result: any = await service.account.adInsertService.Execute(model);
        ctx.logger.info(`insert result:${JSON.stringify(result)}`);
        ctx.body = `insert result:${JSON.stringify(result)}`;
    }
    public async delete(): Promise<void> {
        let { ctx, service } = this;
        try {

            let model: RequestModel = {
                UserId: '0',
                Data: JSON.stringify({ Id: 10 }),
                EncryptKey: ''
            };

            let result: any = await service.account.adDeleteService.Execute(model);
            ctx.logger.info(`delete result:${JSON.stringify(result)}`);
            ctx.body = `delete result:${JSON.stringify(result)}`;
        } catch (error) {
            ctx.logger.error(`page controller error :${error}`);
        }
    }
    public async update(): Promise<void> {
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

            let model: RequestModel = {
                UserId: '0',
                Data: JSON.stringify(dto),
                EncryptKey: ''
            };

            ctx.logger.info(`dto:${JSON.stringify(dto)}`);
            let result: any = await service.account.adUpdateService.Execute(model);
            ctx.logger.info(`update result:${JSON.stringify(result)}`);
            ctx.body = `delete update:${JSON.stringify(result)}`;
        } catch (error) {
            ctx.logger.error(`page controller error :${error}`);
        }
    }
    public async select(): Promise<void> {
        let { ctx, service } = this;
        try {
            let model: RequestModel = {
                UserId: '0',
                Data: '',
                EncryptKey: ''
            };

            let result: any = await service.account.adGetListService.Execute(model);
            ctx.logger.info(`select result:${JSON.stringify(result)}`);
            ctx.body = `delete select:${JSON.stringify(result)}`;
        } catch (error) {
            ctx.logger.error(`page controller error :${error}`);
        }
    }
    public async get(): Promise<void> {
        let { ctx, service } = this;
        try {
            let model: RequestModel = {
                UserId: '0',
                Data: JSON.stringify({ Id: 3 }),
                EncryptKey: ''
            };

            let result: any = await service.account.adFindService.Execute(model);
            ctx.logger.info(`get result:${JSON.stringify(result)}`);
            ctx.body = `get result:${JSON.stringify(result)}`;
        } catch (error) {
            ctx.logger.error(`page controller error :${error}`);
        }
    }

    public async query(): Promise<void> {
        let { ctx, service } = this;
        try {
            let model: RequestModel = {
                UserId: '0',
                Data: JSON.stringify({ Id: 4 }),
                EncryptKey: ''
            };

            let result: any = await service.account.adSqlService.Execute(model);
            ctx.logger.info(`query result:${JSON.stringify(result)}`);
            ctx.body = `query result:${JSON.stringify(result)} `;
        } catch (error) {
            ctx.logger.error(`page controller error :${error}`);
        }
    }
}