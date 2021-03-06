
import { Controller } from 'egg';
import { RequestAccountModel } from '../model/account/request/requestAccountModel';
import { prefix } from '../decorator/prefix.decorator';
import { router, Methods } from '../decorator/router.decorator';
import { RequestModel } from '../model/requestModel';

/**
 * 账户信息api
 * @export
 * @class AdAccountController
 * @extends {Controller}
 */
@prefix()
export default class AdAccountController extends Controller {
    /**
     *
     *
     * @returns {Promise<void>}
     * @memberof AdAccountController
     */
    @router('test', { method: Methods.GET })
    public async test(): Promise<void> {
        let { ctx } = this;

        ctx.body = "test";
    }
    /**
     *
     *
     * @returns {Promise<void>}
     * @memberof AdAccountController
     */
    @router('insert', { method: Methods.GET })
    public async insert(): Promise<void> {
        // let { ctx, service } = this;

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

        console.log(JSON.stringify(model));
        // let result: any = await service.account.adInsertService.Execute(model);
        // ctx.logger.info(`insert result:${JSON.stringify(result)}`);
        // ctx.body = `insert result:${JSON.stringify(result)}`;
    }
    /**
     *
     *
     * @returns {Promise<void>}
     * @memberof AdAccountController
     */
    @router('delete')
    public async delete(): Promise<void> {
        // let { ctx, service } = this;
        try {

            let model: RequestModel = {
                UserId: '0',
                Data: JSON.stringify({ Id: 10 }),
                EncryptKey: ''
            };

            console.log(model);
            // let result: any = await service.account.adDeleteService.Execute(model);
            // ctx.logger.info(`delete result:${JSON.stringify(result)}`);
            // ctx.body = `delete result:${JSON.stringify(result)}`;
        } catch (error) {
            // ctx.logger.error(`page controller error :${error}`);
        }
    }
    /**
     *
     *
     * @returns {Promise<void>}
     * @memberof AdAccountController
     */
    @router()
    public async update(): Promise<void> {
        // let { ctx, service } = this;
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

            console.log(model);
            // ctx.logger.info(`dto:${JSON.stringify(model)}`);
            // let result: any = await service.account.adUpdateService.Execute(model);
            // ctx.logger.info(`update result:${JSON.stringify(result)}`);
            // ctx.body = `delete update:${JSON.stringify(result)}`;
        } catch (error) {
            // ctx.logger.error(`page controller error :${error}`);
        }
    }
    /**
     *
     *
     * @returns {Promise<void>}
     * @memberof AdAccountController
     */
    @router('select', { method: Methods.GET })
    public async select(): Promise<void> {
        // let { ctx, service } = this;
        try {
            let model: RequestModel = {
                UserId: '0',
                Data: '',
                EncryptKey: ''
            };

            console.log(model);

            // let result: any = await service.account.adGetListService.Execute(model);
            // ctx.logger.info(`select result:${JSON.stringify(result)}`);
            // ctx.body = `delete select:${JSON.stringify(result)}`;
        } catch (error) {
            // ctx.logger.error(`page controller error :${error}`);
        }
    }
    /**
     *
     *
     * @returns {Promise<void>}
     * @memberof AdAccountController
     */
    public async get(): Promise<void> {
        // let { ctx, service } = this;
        try {
            let model: RequestModel = {
                UserId: '0',
                Data: JSON.stringify({ Id: 3 }),
                EncryptKey: ''
            };

            console.log(model);

            // let result: any = await service.account.adFindService.Execute(model);
            // ctx.logger.info(`get result:${JSON.stringify(result)}`);
            // ctx.body = `get result:${JSON.stringify(result)}`;
        } catch (error) {
            // ctx.logger.error(`page controller error :${error}`);
        }
    }
    /**
     *
     *
     * @returns {Promise<void>}
     * @memberof AdAccountController
     */
    public async query(): Promise<void> {
        // let { ctx, service } = this;
        try {
            let model: RequestModel = {
                UserId: '0',
                Data: JSON.stringify({ Id: 4 }),
                EncryptKey: ''
            };

            console.log(model);

            // let result: any = await service.account.adSqlService.Execute(model);
            // ctx.logger.info(`query result:${JSON.stringify(result)}`);
            // ctx.body = `query result:${JSON.stringify(result)} `;
        } catch (error) {
            // ctx.logger.error(`page controller error :${error}`);
        }
    }
}