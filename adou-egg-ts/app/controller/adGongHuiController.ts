
import { Controller } from 'egg';
// import { RequestAccountModel } from '../model/account/request/requestAccountModel';
import { prefix } from '../decorator/prefix.decorator';
import { router, Methods } from '../decorator/router.decorator';
// import { RequestModel } from '../model/requestModel';

/**
 * 账户信息api
 * @export
 * @class AdAccountController
 * @extends {Controller}
 */
@prefix()
export default class adGongHuiController extends Controller {
    /**
     *
     *
     * @returns {Promise<void>}
     * @memberof AdAccountController
     */
    @router('kjl', { method: Methods.GET })
    public async kjl(): Promise<void> {
        let { ctx } = this;

        ctx.body = "kjl";
    }
}