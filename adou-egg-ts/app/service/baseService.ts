import { Service } from 'egg';
import { RequestBaseModel } from '../model/requestBaseModel';
import { ResponseMessageModel } from '../model/responseMessageModel';
import { RequestModel } from '../model/requestModel';
/**
 * 基类
 */
export default class BaseService<P extends RequestBaseModel> extends Service {
 
    /**
     * 请求参数
     * @type P
     * @memberof BaseService
     */
    public Parameter: P;
    /**
     * 响应实体
     * @type ResponseMessageModel
     * @memberof BaseService
     */
    public Result: ResponseMessageModel;
    /**
     * 请求实体
     * @type RequestModel
     * @memberof BaseService
     */
    public model: RequestModel;
    /**
     * 
     * @protected
     * @return Promise<any> 
     * @memberof BaseService
     */
    protected async ExecuteMethod(): Promise<void> { };
    /**
     * 
     * @return Promise<any> 
     * @memberof BaseService
     */
    protected async Validate(): Promise<any> {

        return await '123';
    }
    /**
     * 执行具体业务逻辑
     * @return Promise<ResponseMessageModel> 
     * @memberof BaseService
     */
    protected async Execute(): Promise<ResponseMessageModel> {
        let dto: ResponseMessageModel = {};
        await this.ExecuteMethod();
        return await dto;
    }

}