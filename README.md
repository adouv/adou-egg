## Quick View

```ts
/**
 * 控制器
 * @export
 * @class AdAccountController
 * @extends Controller
 */
@scope('adAccount');
export default class AdAccountController extends Controller {
    @router('insert', {name:'插入数据',methods:'POST'})
    public async insert(): Promise<void> {
        let { ctx, service } = this;
        
        let dto: RequestAccountModel = {};

        let model: RequestModel = {};

        let result: any = await service.account.adInsertService.Execute(model);
        
        ctx.body = `insert result:${JSON.stringify(result)}`;
    }
}
```

```ts
/**
 * 服务基类
 * @export
 * @class BaseService
 * @extends Service
 * @template P 
 */
export default class BaseService<P extends RequestBaseModel> extends Service {
    constructor(ctx) {
        super(ctx);

        this.Result = {
            Data: "",
            IsSuccess: false,
            ErrorCode: "",
            Message: "",
            Status: 200
        };
    }
    /**
     * 数据库表集合
     * @protected
     * @type any
     * @memberof BaseService
     */
    protected table: any;

    /**
     * 请求参数
     * @type P
     * @memberof BaseService
     */
    protected Parameter: P;
    /**
     * 响应实体，并初始化
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
     * 业务实现方法
     * @protected
     * @return Promise<any> 
     * @memberof BaseService
     */
    protected async ExecuteMethod(): Promise<void> { };
    /**
     * 验证
     * @return Promise<any> 
     * @memberof BaseService
     */
    protected async Validate(): Promise<void> {
        console.log('base model:', this.model.Data);
        this.Parameter = JSON.parse(this.model.Data);
    }
    /**
     * 执行
     * @return Promise<ResponseMessageModel> 
     * @memberof BaseService
     */
    public async Execute(dto: RequestModel): Promise<ResponseMessageModel> {

        try {
            this.model = dto;

            if (this.model) {
                await this.Validate();
            }

            await this.ExecuteMethod();

        } catch (error) {
            /** 
             * 异常处理
            */
            this.Result.Data = "";
            this.Result.ErrorCode = "9999";
            this.Result.Message = `${error}`;
            this.Result.IsSuccess = false;
            this.Result.Status = 500;

            let stringBuilder: String = `Parameter:${JSON.stringify(this.Parameter)};`;
            stringBuilder += `Exception:${error}`;

            this.ctx.logger.error(`api base error : ${stringBuilder}`);
        }

        return await this.Result;
    }

}
```
