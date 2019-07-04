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
    
    let _controller: any = Reflect.get(Reflect.get(controller, route.controller), route.action);
    
    // let method: any = Reflect.getMetadata('method', route._controller[route.action]) as Methods;

    // console.log(router[method](route.routerURL, _controller));
    //路由注册
    router.all(route.routerURL, _controller);
  });

};


