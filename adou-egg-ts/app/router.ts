import { Application } from 'egg';
import { RouterList, RouterInfoModel, Methods } from './decorator/router.decorator';
/** 
 * 路由配置
*/
export default (app: Application) => {

  const { controller, router } = app;

  let routerList: Array<RouterInfoModel> = new Array<RouterInfoModel>().concat(RouterList);

  routerList.forEach(route => {

    let _controller: any = Reflect.get(Reflect.get(controller, route.controller), route.action);
    /**
     * router.head - HEAD
     * router.options - OPTIONS
     * router.get - GET
     * router.put - PUT
     * router.post - POST
     * router.patch - PATCH
     * router.delete - DELETE
     */
    let _method: any = route.options.method as Methods;
    
    //路由注册
    router[_method](route.routerURL, _controller);
  });

};