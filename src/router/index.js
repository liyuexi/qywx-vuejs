import {createRouter,createWebHashHistory} from 'vue-router'
import Layout from '../views/Layout.vue'
import Auth from '../views/Auth.vue'
import AuthCallback from '../views/AuthCallback.vue'
import AdminCallback from '../views/AdminCallback.vue'
import SchoolCallback from '../views/SchoolCallback.vue'
import SchoolContact from '../views/School.vue'
import Demo from '../views/Demo.vue'
import Jssdk from '../views/Jssdk.vue'
import Contact from '../views/Contact.vue'
import User from '../views/User.vue'
import Media from '../views/Media.vue'
import Message from '../views/Message.vue'
import Agent from '../views/Agent.vue'
import Oa from '../views/Oa.vue'
import Efficiency from '../views/Efficiency.vue'
import ExtContact from '../views/ExtContact.vue'
import TobDev from '../views/TobDev.vue'

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
      {
        path: 'adminCallback',
        name: 'AdminCallback',
        component: AdminCallback,
        meta: {
            title: '登录',
            keepAlive: true,
        },
      },

      {
        path: 'schoolCallback',
        name: 'SchoolCallback',
        component: SchoolCallback,
        meta: {
            title: '登录',
            keepAlive: true,
        },
      },
    
        // children: [
         
        // ],
      {
          path: 'demo', 
          name: 'Demo',
          component: Demo ,
          meta: {
           title: 'demo',
           keepAlive: true,
         },
       },
       {
        path: 'contact', 
        name: 'Contact',
        component: Contact ,
        meta: {
         title: 'contact',
         keepAlive: true,
       },
     },
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
        path: 'media', 
        name: 'Media',
        component: Media ,
        meta: {
         title: 'media',
         keepAlive: true,
       },
      },
      {
        path: 'message', 
        name: 'Message',
        component: Message ,
        meta: {
         title: 'Message',
         keepAlive: true,
        },
      },
      {
        path: 'agent', 
        name: 'Agent',
        component: Agent ,
        meta: {
         title: 'agent',
         keepAlive: true,
        },
      },
      {
        path: 'extContact', 
        name: 'ExtContact',
        component: ExtContact ,
        meta: {
         title: 'extContact',
         keepAlive: true,
        },
      },
      {
        path: 'schoolContact', 
        name: 'SchoolContact',
        component: SchoolContact ,
        meta: {
         title: 'schoolContact',
         keepAlive: true,
        },
      },
      {
        path: 'oa', 
        name: 'Oa',
        component: Oa ,
        meta: {
         title: 'oa',
         keepAlive: true,
        },
      },
      {
        path: 'eff', 
        name: 'Eff',
        component: Efficiency ,
        meta: {
         title: 'oa',
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
      {
        path: 'tobdev', 
        name: 'TobDev',
        component: TobDev ,
        meta: {
         title: 'ToB Dev',
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
    // if (noUserWhiteList.includes(topath)){

    // }
    next()
})

export default router;