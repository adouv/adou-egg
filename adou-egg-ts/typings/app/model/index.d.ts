// This file is created by egg-ts-helper@1.25.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdAccountModel from '../../../app/model/adAccountModel';
import ExportRouterModel from '../../../app/model/routerModel';

declare module 'egg' {
  interface IModel {
    AdAccountModel: ReturnType<typeof ExportAdAccountModel>;
    RouterModel: ReturnType<typeof ExportRouterModel>;
  }
}
