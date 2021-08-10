import {createRouter,createWebHashHistory} from 'vue-router'
import Layout from '../views/Layout.vue'
import Auth from '../views/Auth.vue'
import AuthCallback from '../views/AuthCallback.vue'
import Jssdk from '../views/Jssdk.vue'
import User from '../views/User.vue'

// 不重定向白名单
const noUserWhiteList = [];

//路由
const routes = [
  { 

    // path: '/', 
    // component:  Auth,
    // name: '/',

    path: '/', 
    component:  Layout,
    redirect: '/auth',
    name: '/',
    meta: { title: 'ToB Dev' },
    children: [
      {
        path: 'auth',
        name: 'Auth',
        component: Auth,
        meta: {
            title: '登录',
            keepAlive: true,
        },
      },
      {
        path: 'callback',
        name: 'Callback',
        component: AuthCallback,
        meta: {
            title: '登录',
            keepAlive: true,
        },
      },
        // children: [
         
        // ],
  
      {
         path: 'jssdk', 
         name: 'Jssdk',
         component: Jssdk ,
         meta: {
          title: 'jssdk',
          keepAlive: true,
        },
      },
      {
        path: 'user', 
        name: 'User',
        component: User ,
        meta: {
         title: '我的',
         keepAlive: true,
       },
      },

    ]

  }
]


const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})


//守卫
router.beforeEach((to, from, next) => {
    let topath = to.path
    //登录状放行
    
    //非登录态
    if (noUserWhiteList.includes(topath)){

    }
    next()
})

export default router;