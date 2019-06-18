// This file is created by egg-ts-helper@1.25.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdAccountModel from '../../../app/model/adAccountModel';
import ExportTables from '../../../app/model/tables';

declare module 'egg' {
  interface IModel {
    AdAccountModel: ReturnType<typeof ExportAdAccountModel>;
    Tables: ReturnType<typeof ExportTables>;
  }
}
