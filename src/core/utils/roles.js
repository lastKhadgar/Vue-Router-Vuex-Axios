/**
 * Author: weizq
 * Create Time: 2020/04/17 14:47
 * Description: 权限配置
 */
import Vue from 'vue'

let rolesList = []

/**
 * 设置权限列表
 * @param list
 */
function setRolesList (list) {
    rolesList = list
}

/**
 * 判断是否有权限
 * @param role
 */
function ifHasRole (role) {
    return rolesList.indexOf(role) > -1
}

/**
 *功能: 权限指令
 *用法 可在任意Vdom上 v-w-role = " 'xxxx' "
 **/
Vue.directive('w-role', {
    bind: function (el, binding) {
        console.log(binding.value)
        if (!ifHasRole(binding.value)) {
            el.remove()
            el.style.display = 'none'
        }
    }
})

export {
    setRolesList,
    ifHasRole
}
