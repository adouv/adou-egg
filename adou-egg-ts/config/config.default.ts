import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1560753655236_1856';

  // add your egg config in here
  config.middleware = [];

  config.mysql = {
    client: {
      host: '192.168.3.175',//数据库连接地址
      port: 3306,//端口号
      user: 'gonghui',//用户名
      password: 'gongHUI!@34',//密码
      database: 'kjl'//数据库名
    },
    app: true,      // 是否加载到app上
    agent: false    // 是否加载到agent上
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
