/**
 * Author: weizq
 * Create Time: 2020/04/15 09:33
 * Description: 路由导航守卫
 */

export default function (router) {
    router.beforeEach((to, from, next) => {
        if (!window.localStorage.token && to.path !== '/login') {
            next({ path: '/login' })
        } else if (window.localStorage.token && to.path === '/login') {
            next({ path: '/' })
        } else {
            next()
        }
    })

    return router
}
