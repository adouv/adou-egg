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
    protected Parameter: P;
    /**
     * 响应实体
     * @type ResponseMessageModel
     * @memberof BaseService
     */
    protected Result: ResponseMessageModel;
    /**
     * 请求实体
     * @type RequestModel
     * @memberof BaseService
     */
    protected model: RequestModel;
    /**
     * 执行业务逻辑
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
    public async Execute(): Promise<ResponseMessageModel> {
        try {
            await this.ExecuteMethod();
        } catch (error) {
            this.ctx.logger.error(`api base error : ${error}`);
        }
        return await this.Result;
    }

}