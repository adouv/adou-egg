import { Controller } from 'egg';
/**
 * 控制器基类
 * @export
 * @class BaseController
 * @extends Controller
 */
export default class BaseController extends Controller {
    /**
     * 每页条数
     * @protected
     * @type Number
     * @memberof BaseController
     */
    protected PageSize: Number = 10;
    /**
     * 当前页
     * @protected
     * @type Number
     * @memberof BaseController
     */
    protected PageIndex: Number = 1;
}