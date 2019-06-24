// This file is created by egg-ts-helper@1.25.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportIBaseService from '../../../app/service/IBaseService';
import ExportAdAccountService from '../../../app/service/adAccountService';
import ExportAdUserService from '../../../app/service/adUserService';
import ExportBaseService from '../../../app/service/baseService';
<<<<<<< HEAD
=======
import ExportAccountAdAccountService from '../../../app/service/account/adAccountService';
>>>>>>> 1ddacc7232add5ccea10aafe760a82adf5e15bb9

declare module 'egg' {
  interface IService {
    iBaseService: ExportIBaseService;
    adAccountService: ExportAdAccountService;
    adUserService: ExportAdUserService;
    baseService: ExportBaseService;
<<<<<<< HEAD
=======
    account: {
      adAccountService: ExportAccountAdAccountService;
    }
>>>>>>> 1ddacc7232add5ccea10aafe760a82adf5e15bb9
  }
}
