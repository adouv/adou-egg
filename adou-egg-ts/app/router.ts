import { Application } from 'egg';
import { Router } from './model/routerModel';
// import { RouterModel, RouterInfoModel } from './decorator/router.decorator';
/** 
 * 
*/
export default (app: Application) => {
  const { controller, router } = app;

  // let routerList: Array<RouterInfoModel> = new Array<RouterInfoModel>().concat(RouterModel);

  // routerList.forEach(route => {
  //   let contr: any = Reflect.get(Reflect.get(Reflect.get(controller, route.controller), route.controller), route.action);
  //   console.log(contr);
  //   //router.get(route.routerURL,contr);
  // });
  let routers: Router[] = [
    {
      path: '/',
      controller: controller.home.index
    },
    {
      path: '/adAccount/insert',
      controller: controller.adAccountController.insert
    },
    {
      path: '/adAccount/delete',
      controller: controller.adAccountController.delete
    },
    {
      path: '/adAccount/update',
      controller: controller.adAccountController.update
    },
    {
      path: '/adAccount/get',
      controller: controller.adAccountController.get
    },
    {
      path: '/adAccount/select',
      controller: controller.adAccountController.select
    },
    {
      path: '/adAccount/query',
      controller: controller.adAccountController.query
    }
  ];

  routers.forEach(route => {
    router.get(route.path, route.controller);
  });

};


