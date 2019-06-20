// This file is created by egg-ts-helper@1.25.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdAccountModel from '../../../app/model/adAccountModel';
import ExportRequestBaseModel from '../../../app/model/requestBaseModel';
import ExportRequestModel from '../../../app/model/requestModel';
import ExportResponseMessageModel from '../../../app/model/responseMessageModel';
import ExportRouterModel from '../../../app/model/routerModel';
import ExportRequestRequestAccountModel from '../../../app/model/request/requestAccountModel';
import ExportRequestRequestUserModel from '../../../app/model/request/requestUserModel';

declare module 'egg' {
  interface IModel {
    AdAccountModel: ReturnType<typeof ExportAdAccountModel>;
    RequestBaseModel: ReturnType<typeof ExportRequestBaseModel>;
    RequestModel: ReturnType<typeof ExportRequestModel>;
    ResponseMessageModel: ReturnType<typeof ExportResponseMessageModel>;
    RouterModel: ReturnType<typeof ExportRouterModel>;
    Request: {
      RequestAccountModel: ReturnType<typeof ExportRequestRequestAccountModel>;
      RequestUserModel: ReturnType<typeof ExportRequestRequestUserModel>;
    }
  }
}
