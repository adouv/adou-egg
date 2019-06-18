
import { Controller } from 'egg';
/**
 * 
 * @export
 * @class AdAccountController
 * @extends Controller
 */
export default class AdAccountController extends Controller {
    public async find() {
        let { ctx } = this;
        // let dto: any = app.model.adAccountModel;
        // dto.Id = 0;
        ctx.body = '1';
    }
    public async update() {
        this.ctx.body = 'update';
    }
    public async delete() {
        this.ctx.body = 'delete';
    }
    public async insert() {
        this.ctx.body = 'insert';
    }
}