// This file is created by egg-ts-helper@1.25.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdAccountService from '../../../app/service/adAccountService';

declare module 'egg' {
  interface IService {
    adAccountService: ExportAdAccountService;
  }
}
