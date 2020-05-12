/**
 * Author: weizq
 * Create Time: 2020/04/14 16:33
 * Description: axios请求配置
 */

import axios from 'axios'
import Interceptor from './../utils/interceptor'

function createAxios ({ baseURL }) {
    const ajax = function () {
        let ajax = axios.create({ baseURL });
        ajax.interceptors.request.use(Interceptor.request, Interceptor.requestError)
        ajax.interceptors.response.use(Interceptor.response, Interceptor.responseError)
        return ajax
    }

    return {
        post: (url, params) => {
            return ajax().post(baseURL + url, params).then(res => res)
        },
        get: (url, params) => {
            return ajax().get(baseURL + url, {params}).then(res => res)
        },
    }
}


export {
    createAxios
}
