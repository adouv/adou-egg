import { RequestBaseModel } from '../../requestBaseModel';
/**
 * 酷家乐
 */
export interface RequestCommunityModel extends RequestBaseModel {
    /**
     * 编号 自增
     */
    id?: Number;
    /**
     * 标题
     */
    name?: String;
    /**
     * 账号
     */
    address?: String;
    /**
     * 密码
     */
    province?: String;
    /**
     * 邮箱
     */
    city?: String;
    /**
     * 手机号
     */
    area?: String;

    /**
     * 地址
     */
    telephone?: String;

    /**
     * 描述
     */
    uid?: String;
    /**
     * 内容
     */
    street_id?: String;
    /**
     * 创建时间
     */
    detail?: Number;
    /**
     * 更新时间
     */
    lat?: Number;
    lng?: Number;
}