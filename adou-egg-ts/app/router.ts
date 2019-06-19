import { Application } from 'egg';
import { Router } from './model/routerModel';
/** 
 * 
*/
export default (app: Application) => {
  const { controller, router } = app;


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
    }
  ];

  routers.forEach(route => {
    router.get(route.path, route.controller);
  });

};


