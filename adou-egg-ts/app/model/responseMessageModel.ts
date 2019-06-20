/**
 * 统一响应实体
 */
export interface ResponseMessageModel {
    /**
     * 响应数据
     */
    Data?: Object;
    /**
     * 消息
     */
    Message?: String;
    /**
     * 错误码
     */
    ErrorCode?: String;
    /**
     * 是否成功
     */
    IsSuccess?: Boolean;
    /**
     * 状态码
     * 200成功
     */
    Status?: Number;
}