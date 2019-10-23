import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
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
  return config;
};
