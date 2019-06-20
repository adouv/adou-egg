/**
 * 统一提交实体
 * @export
 * @interface RequestModel
 */
export interface RequestModel {
    /**
     * AES加密后的JSON数据
     * @type String
     * @memberof RequestModel
     */
    Data: String;
    /**
     * AESkey(证书加密后的)
     * @type String
     * @memberof RequestModel
     */
    EncryptKey: String;
}