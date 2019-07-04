import { Application } from 'egg';
import { RouterList, RouterInfoModel } from './decorator/router.decorator';
/** 
 * 路由配置
*/
export default (app: Application) => {

  const { controller, router } = app;

  let routerList: Array<RouterInfoModel> = new Array<RouterInfoModel>().concat(RouterList);

  console.log(JSON.stringify(routerList));

  routerList.forEach(route => {
    router.all(route.routerURL, Reflect.get(Reflect.get(controller, route.controller), route.action));
  });

};


