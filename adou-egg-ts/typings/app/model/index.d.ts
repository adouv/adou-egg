// This file is created by egg-ts-helper@1.25.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportRequestBaseModel from '../../../app/model/requestBaseModel';
import ExportRequestModel from '../../../app/model/requestModel';
import ExportResponseMessageModel from '../../../app/model/responseMessageModel';
import ExportRouterModel from '../../../app/model/routerModel';
import ExportTableModel from '../../../app/model/tableModel';
import ExportAccountRequestRequestAccountModel from '../../../app/model/account/request/requestAccountModel';
import ExportUserRequestRequestUserModel from '../../../app/model/user/request/requestUserModel';

declare module 'egg' {
  interface IModel {
    RequestBaseModel: ReturnType<typeof ExportRequestBaseModel>;
    RequestModel: ReturnType<typeof ExportRequestModel>;
    ResponseMessageModel: ReturnType<typeof ExportResponseMessageModel>;
    RouterModel: ReturnType<typeof ExportRouterModel>;
    TableModel: ReturnType<typeof ExportTableModel>;
    Account: {
      Request: {
        RequestAccountModel: ReturnType<typeof ExportAccountRequestRequestAccountModel>;
      }
    }
    User: {
      Request: {
        RequestUserModel: ReturnType<typeof ExportUserRequestRequestUserModel>;
      }
    }
  }
}
