import {createRouter, createWebHashHistory} from "vue-router";


const router = createRouter({
    // 路由类型： 路由分 history和bash
    history:createWebHashHistory(),
    // 路由表
    routes:[
        {
            path:"/",
            component: () => import("../pages/Index"),
        },
        {
            path:"/test",
            component: () => import("../pages/Test")
        },
        // 404
        {
            path: '/:pathMatch(.*)*',
            component: () => import("../pages/NotFound")
        }
    ]
})

export default router