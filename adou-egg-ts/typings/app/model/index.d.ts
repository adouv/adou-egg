// This file is created by egg-ts-helper@1.25.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportRequestBaseModel from '../../../app/model/requestBaseModel';
import ExportRequestModel from '../../../app/model/requestModel';
import ExportResponseMessageModel from '../../../app/model/responseMessageModel';
import ExportAccountRequestRequestAccountModel from '../../../app/model/account/request/requestAccountModel';
import ExportCommunityRequestRequestCommunityModel from '../../../app/model/community/request/requestCommunityModel';
import ExportUserRequestRequestUserModel from '../../../app/model/user/request/requestUserModel';

declare module 'egg' {
  interface IModel {
    RequestBaseModel: ReturnType<typeof ExportRequestBaseModel>;
    RequestModel: ReturnType<typeof ExportRequestModel>;
    ResponseMessageModel: ReturnType<typeof ExportResponseMessageModel>;
    Account: {
      Request: {
        RequestAccountModel: ReturnType<typeof ExportAccountRequestRequestAccountModel>;
      }
    }
    Community: {
      Request: {
        RequestCommunityModel: ReturnType<typeof ExportCommunityRequestRequestCommunityModel>;
      }
    }
    User: {
      Request: {
        RequestUserModel: ReturnType<typeof ExportUserRequestRequestUserModel>;
      }
    }
  }
}
