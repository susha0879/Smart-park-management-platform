 
// import operationRouter from './operation'

import { createRouter, createWebHashHistory } from 'vue-router'

// 引入物业管理相关的路由页面
import propertyRouter from './property'
//引入数据可视页面相关路由
import visualizationRouter from './visualization'
//引入配置中心页面相关路由
import configurationRouter from './configuration'

const manageroutes = [
       {
              path: '/',
              redirect: '/login'
          },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login.vue'),
    },
    {
        path: '/index',
        name: '/index',
        component: () => import('../layout/index.vue'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/home/home.vue'),
            },
            {
                path: '/configuration',
                name: 'configuration',
                redirect: '/configurationall',
                component: () => import('../views/configuration.vue'),
                children: [
                  ...configurationRouter
                ]
            },
            {
                path: '/operation',
                name: 'operation',
                redirect: '/over',
                component: () => import('../views/operation/operation.vue'),
                children:[
                  //文章管理
                  {
                     path: '/article',
                     component: () => import('../views/operation/content/article.vue')
                  },
                  {
                     path: '/comment',
                     component: () => import('../views/operation/content/comment.vue')
                  },
                  {
                     path: '/contract',
                     component: () => import('../views/operation/business/contract.vue')
                  },
                  {
                     path: '/information',
                     component: () => import('../views/operation/business/information.vue')
                  },
                  {
                     path: '/tenantPersonnel',
                     component: () => import('../views/operation/tenement/tenantPersonnel.vue')
                  },
                  {
                     path: '/tenementMessage',
                     component: () => import('../views/operation/tenement/tenementMessage.vue')
                  },
                  {
                     path: '/building',
                     component: () => import('../views/operation/property/building.vue')
                  },
                  {
                     path: '/resource',
                     component: () => import('../views/operation/property/resource.vue')
                  },
                  {
                     path: '/CarPayment',
                     component: () => import('../views/operation/bill/CarPayment.vue')
                  },
                  {
                     path: '/tenementBill',
                     component: () => import('../views/operation/bill/tenementBill.vue')
                  },
                  {
                     path: '/articleAdd',
                     component: () => import('../views/operation/content/articleAdd.vue')
                  },
                  {
                     path: '/over',
                     component: () => import('../views/operation/overview/operationall.vue')
                  },
      
               ]
            },

            {
                path: '/property',
                name: 'property',
                redirect: '/property/totalProperty',
                component: () => import('../views/property/property.vue'),
                children: [
                    // 引入物业管理相关的路由
                    ...propertyRouter
                ]

            },
            {
                path: '/visualization',
                name: 'visualization',
                redirect: '/ParkCockpit',
                component: () => import('../views/visualization/visualization.vue'),
                children: [
                    ...visualizationRouter
                ]
            },

        ]
    },

]

// 哈希路由
const router = createRouter({
    // 路由模式
    history: createWebHashHistory(),
    routes: manageroutes,
})
/**
 - 输出对象
 */
export default router;