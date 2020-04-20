/**
 * Author: weizq
 * Create Time: 2020/04/14 14:11
 * Description: 框架核心入口
 */

import Vue from 'vue'
import { createAxios } from './utils/request'
import Elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import EventEmitter from 'events';
import roles from './utils/roles'

Vue.use(Elementui)

Vue.eventEmitter = new EventEmitter()

export {
    createAxios
}

export default function ({ router, store, App }) {
    return new Vue({
        router,
        store,
        render: h => h(App),
    }).$mount('#app')
}