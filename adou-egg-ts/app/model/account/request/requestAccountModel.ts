import { RequestBaseModel } from '../../requestBaseModel';
/**
 * 账户表
 */
export interface RequestAccountModel extends RequestBaseModel {
    /**
     * 编号 自增
     */
    Id?: Number;
    /**
     * 标题
     */
    Title?: String;
    /**
     * 账号
     */
    Account?: String;
    /**
     * 密码
     */
    Password?: String;
    /**
     * 邮箱
     */
    Email?: String;
    /**
     * 手机号
     */
    Phone?: String;

    /**
     * 地址
     */
    Url?: String;

    /**
     * 描述
     */
    Descript?: String;
    /**
     * 内容
     */
    Content?: String;
    /**
     * 创建时间
     */
    CreateDataTime?: String;
    /**
     * 更新时间
     */
    UpdateDateTime?: String;
}