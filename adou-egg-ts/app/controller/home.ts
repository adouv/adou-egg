
import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx, service } = this;

    let result: any = await service.adAccountService.getList();

    ctx.body = `账户列表：${JSON.stringify(result)}`;
  }
}
