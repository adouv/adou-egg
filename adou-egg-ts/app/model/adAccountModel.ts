/**
 * 账户表
 */
export interface adAccountModel {
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
     * 地址
     */
    Url?: String;
    /**
     * 描述
     */
    Descript?: String;
    /**
     * 密码
     */
    Password?: String;
    /**
     * 创建时间
     */
    CreateDataTime?: String;
}