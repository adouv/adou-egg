// This file is created by egg-ts-helper@1.25.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdAccountService from '../../../app/service/adAccountService';
import ExportAdUserService from '../../../app/service/adUserService';
import ExportBaseService from '../../../app/service/baseService';
import ExportIBaseService from '../../../app/service/IBaseService';

declare module 'egg' {
  interface IService {
    adAccountService: ExportAdAccountService;
    adUserService: ExportAdUserService;
    baseService: ExportBaseService;
    iBaseService: ExportIBaseService;
  }
}
