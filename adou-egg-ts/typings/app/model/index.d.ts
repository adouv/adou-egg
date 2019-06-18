// This file is created by egg-ts-helper@1.25.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdAccountDto from '../../../app/model/adAccount.dto';
import ExportTablesDto from '../../../app/model/tables.dto';

declare module 'egg' {
  interface IModel {
    AdAccountDto: ReturnType<typeof ExportAdAccountDto>;
    TablesDto: ReturnType<typeof ExportTablesDto>;
  }
}
