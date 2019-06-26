/**
 * 统一响应实体
 */
export interface ResponseMessageModel {
    /**
     * 响应数据
     */
    Data: any;
    /**
     * 消息
     */
    Message: string;
    /**
     * 错误码
     */
    ErrorCode: string;
    /**
     * 是否成功
     */
    IsSuccess: boolean;
    /**
     * 状态码
     * 200成功
     */
    Status: number;
}