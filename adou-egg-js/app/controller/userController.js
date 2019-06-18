import { Controller } from "egg";

export default class UserController extends Controller {
    async update() {
        const { ctx, service } = this;
        let dto = {};
        let result = await service.adUserService.updateAsync(dto);
        ctx.body = result;
    }
}