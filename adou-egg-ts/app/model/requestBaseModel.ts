/**
 * 统一请求实体类
 * @export
 * @interface RequestBaseModel
 */
export interface RequestBaseModel {
    /**
     * 时间戳
     */
    TimesTamp?: String;
    /**
     * mac
     */
    Mac?: String;
    /**
     * ip
     */
    Ip?: String;
    /**
     * 签名
     */
    Sign?: String;
    /**
     * 版本
     */
    Version?: String;
    /**
     * 当前请求的客户端Token
     */
    Token?: String;
    /**
     * 数据验证(是否成功)
     * 虚属性，子类可以根据自己的逻辑去复写
     */
    IsValid?: Boolean;
}