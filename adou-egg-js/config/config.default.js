/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = (exports = {});

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + "_1560137105715_6886";

    // add your middleware config here
    config.middleware = [];

    config.mysql = {
        client: {
            host: "127.0.0.1", // 链接地址
            port: "3306", // 端口号
            user: "root", // 用户名
            password: "12345678", // 密码
            database: "adou" // 数据库名
        },
        app: true, // 是否加载到 app 上，默认开启
        agent: false // 是否加载到 agent 上，默认关闭
    };
    // add your user config here
    const userConfig = {};

    return {
        ...config,
        ...userConfig
    };
};