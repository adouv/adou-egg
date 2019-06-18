
import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    
    let result: any = await ctx.service.adAccount.getList();

    ctx.body = await ctx.service.test.sayHi(`egg${JSON.stringify(result)}`);
  }
}
