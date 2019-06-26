// This file is created by egg-ts-helper@1.25.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBaseService from '../../../app/service/baseService';
import ExportAccountAdDeleteService from '../../../app/service/account/adDeleteService';
import ExportAccountAdFindService from '../../../app/service/account/adFindService';
import ExportAccountAdGetListService from '../../../app/service/account/adGetListService';
import ExportAccountAdInsertService from '../../../app/service/account/adInsertService';
import ExportAccountAdSqlService from '../../../app/service/account/adSqlService';
import ExportAccountAdUpdateService from '../../../app/service/account/adUpdateService';
import ExportUserAdUserService from '../../../app/service/user/adUserService';

declare module 'egg' {
  interface IService {
    baseService: ExportBaseService;
    account: {
      adDeleteService: ExportAccountAdDeleteService;
      adFindService: ExportAccountAdFindService;
      adGetListService: ExportAccountAdGetListService;
      adInsertService: ExportAccountAdInsertService;
      adSqlService: ExportAccountAdSqlService;
      adUpdateService: ExportAccountAdUpdateService;
    }
    user: {
      adUserService: ExportUserAdUserService;
    }
  }
}
