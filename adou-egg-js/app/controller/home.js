"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;

        ctx.body = "hi, egg, my name is fu kai hang!";
    }
}

module.exports = HomeController;