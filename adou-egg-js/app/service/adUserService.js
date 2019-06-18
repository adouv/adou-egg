import { Service } from "egg";
/**
 * 用户服务
 */
export default class AdUserService extends Service {
    table_name = "ad_user";
    /**
     * 插入数据
     * @param {*} dto
     */
    async insertAsync(dto = {}) {
            let { app } = this;
            let result = await app.mysql.insert(this.table_name, dto);
            return result;
        }
        /**
         * 更新用户数据
         * @param  {any} [dto={}]
         * @return
         * @memberof UserService
         */
    async updateAsync(dto = {}) {
            let { app } = this;
            let result = await app.mysql.update(this.table_name, dto);
            return result;
        }
        /**
         * 删除用户数据
         * @param  {any} [dto={}]
         * @return
         * @memberof UserService
         */
    async deleteAsync(dto = {}) {
            let { app } = this;
            let result = await app.mysql.delete(this.table_name, dto);
            return result;
        }
        /**
         * 查找用户数据
         * @param  {any} [dto={}]
         * @return
         * @memberof UserService
         */
    async findAsync(dto = {}) {
        let { app } = this;
        let result = await app.mysql.select(this.table_name, dto);
        return resultl;
    }
}