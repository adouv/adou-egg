// This file is created by egg-ts-helper@1.25.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdAccountController from '../../../app/controller/adAccountController';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    adAccountController: ExportAdAccountController;
    home: ExportHome;
  }
}
