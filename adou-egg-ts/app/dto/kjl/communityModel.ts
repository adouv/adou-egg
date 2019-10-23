/**
 * 
 */
export interface CommunityModel  {
    /**
     * 编号 自增 主键
     */
    id?: Number;
    /**
     * 名称
     */
    name?: String;
    /**
     * 地址信息
     */
    address?: String;
    /**
     * 所属省份
     */
    province?: String;
    /**
     * 所属城市
     */
    city?: String;
    /**
     * 所属区县
     */
    area?: String;

    /**
     * poi电话信息
     */
    telephone?: String;

    /**
     * poi的唯一标示
     */
    uid?: String;
    /**
     * 街景图id
     */
    street_id?: String;
    /**
     * 是否有详情页：1有，0没有
     */
    detail?: Number;
    /**
     * 纬度值
     */
    lat?: Number;
    /**
     * 经度值
     */
    lng?: Number;
}