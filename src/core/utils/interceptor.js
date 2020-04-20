/**
 * Author: weizq
 * Create Time: 2020/04/14 15:22
 * Description: .env文件配置全局变量环境，根据 package.json 打包命令
 */
import Vue from 'vue'

let Interceptor = {
    request: function (config) {
        let token = window.localStorage.token
        // 请求头添加token
        if (token) {
            config.headers['Token'] = token
        }
        return config
    },
    requestError: function (error) {
        return Promise.reject(error)
    },
    response: function (response) {
        if (response.data.code === 200) { // 接口返回成功
            return response.data
        } else if (response.data.code === 401) { // token失效，账号登出，返回登陆页
            Vue.eventEmitter.emit('log_out')
            return response.data
        } else { // 其他错误
            return response.data
        }
    },
    responseError: function (error) {
        return Promise.reject(error)
    }
}

export default Interceptor