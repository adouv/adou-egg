// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdAccountController from '../../../app/controller/adAccountController';
import ExportAdCommunityController from '../../../app/controller/adCommunityController';
import ExportAdGongHuiController from '../../../app/controller/adGongHuiController';
import ExportBaseController from '../../../app/controller/baseController';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    adAccountController: ExportAdAccountController;
    adCommunityController: ExportAdCommunityController;
    adGongHuiController: ExportAdGongHuiController;
    baseController: ExportBaseController;
    home: ExportHome;
  }
}
