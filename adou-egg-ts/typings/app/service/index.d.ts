// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportBaseService from '../../../app/service/baseService';
import ExportAccountAdDeleteService from '../../../app/service/account/adDeleteService';
import ExportAccountAdFindService from '../../../app/service/account/adFindService';
import ExportAccountAdGetListService from '../../../app/service/account/adGetListService';
import ExportAccountAdInsertService from '../../../app/service/account/adInsertService';
import ExportAccountAdSqlService from '../../../app/service/account/adSqlService';
import ExportAccountAdUpdateService from '../../../app/service/account/adUpdateService';
import ExportCommunityAdGetListByNameService from '../../../app/service/community/adGetListByNameService';
import ExportCommunityAdGetWoAiWoJiaDataService from '../../../app/service/community/adGetWoAiWoJiaDataService';
import ExportCommunityAdInsertCommunityService from '../../../app/service/community/adInsertCommunityService';
import ExportUserAdUserService from '../../../app/service/user/adUserService';

declare module 'egg' {
  interface IService {
    baseService: AutoInstanceType<typeof ExportBaseService>;
    account: {
      adDeleteService: AutoInstanceType<typeof ExportAccountAdDeleteService>;
      adFindService: AutoInstanceType<typeof ExportAccountAdFindService>;
      adGetListService: AutoInstanceType<typeof ExportAccountAdGetListService>;
      adInsertService: AutoInstanceType<typeof ExportAccountAdInsertService>;
      adSqlService: AutoInstanceType<typeof ExportAccountAdSqlService>;
      adUpdateService: AutoInstanceType<typeof ExportAccountAdUpdateService>;
    }
    community: {
      adGetListByNameService: AutoInstanceType<typeof ExportCommunityAdGetListByNameService>;
      adGetWoAiWoJiaDataService: AutoInstanceType<typeof ExportCommunityAdGetWoAiWoJiaDataService>;
      adInsertCommunityService: AutoInstanceType<typeof ExportCommunityAdInsertCommunityService>;
    }
    user: {
      adUserService: AutoInstanceType<typeof ExportUserAdUserService>;
    }
  }
}
