// This file is created by egg-ts-helper@1.25.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdAccount from '../../../app/service/adAccount';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    adAccount: ExportAdAccount;
    test: ExportTest;
  }
}
