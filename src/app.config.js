/**
 * Author: weizq
 * Create Time: 2020/04/14 14:37
 * Description: .env文件配置全局变量环境，根据 package.json 打包命令
 */

let config = {
    local: require('./config/local.config').default,
    pre: require('./config/pre.config').default,
    uat: require('./config/uat.config').default,
    pro: require('./config/pro.config').default,
};

module.exports = config[process.env.VUE_APP_ENV_TYPE || 'local'];
