// This file is created by egg-ts-helper@1.25.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdAccountService from '../../../app/service/adAccountService';
import ExportAdUserService from '../../../app/service/adUserService';
import ExportBaseService from '../../../app/service/baseService';
import ExportAccountAdDeleteService from '../../../app/service/account/adDeleteService';
import ExportAccountAdGetListService from '../../../app/service/account/adGetListService';
import ExportAccountAdInsertService from '../../../app/service/account/adInsertService';
import ExportAccountAdUpdateService from '../../../app/service/account/adUpdateService';
import ExportUserAdUserService from '../../../app/service/user/adUserService';

declare module 'egg' {
  interface IService {
    adAccountService: ExportAdAccountService;
    adUserService: ExportAdUserService;
    baseService: ExportBaseService;
    account: {
      adDeleteService: ExportAccountAdDeleteService;
      adGetListService: ExportAccountAdGetListService;
      adInsertService: ExportAccountAdInsertService;
      adUpdateService: ExportAccountAdUpdateService;
    }
    user: {
      adUserService: ExportUserAdUserService;
    }
  }
}
