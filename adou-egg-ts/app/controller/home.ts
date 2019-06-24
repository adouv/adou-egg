
import { Controller } from 'egg';
import { RequestAccountModel } from '../model/account/request/requestAccountModel';

export default class HomeController extends Controller {
  public async index() {
    // const { ctx, service } = this;

    // let result: any = await service.adAccountService.getList();

    // ctx.body = `账户列表：${JSON.stringify(result)}`;
    
    let { ctx } = this;
    let dto: RequestAccountModel = {};
    dto.Id = 0;
    ctx.body = JSON.stringify(dto);
  }
}
