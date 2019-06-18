import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.mysql = {
    client: {
      host: '127.0.0.1',//数据库连接地址
      port: 3306,//端口号
      user: 'root',//用户名
      password: '12345678',//密码
      database: 'adou'//数据库名
    },
    app: true,      // 是否加载到app上
    agent: false    // 是否加载到agent上
  };
  return config;
};
