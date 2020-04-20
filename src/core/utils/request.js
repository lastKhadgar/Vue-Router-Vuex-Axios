/**
 * Author: weizq
 * Create Time: 2020/04/14 16:33
 * Description: axios请求配置
 */

import axios from 'axios'
import Interceptor from './../utils/interceptor'

function createAxios ({ baseURL }) {
    axios.create({ baseURL });
    axios.interceptors.request.use(Interceptor.request, Interceptor.requestError)
    axios.interceptors.response.use(Interceptor.response, Interceptor.responseError)
    return {
        post: (url, params) => {
            return axios.post(baseURL + url, params).then(res => res)
        },
        get: (url, params) => {
            return axios.get(baseURL + url, params).then(res => res)
        },
    }
}


export {
    createAxios
}
