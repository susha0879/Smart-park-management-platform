import { createRouter, createWebHashHistory } from 'vue-router' 
import operationRouter from './operation'
const manageroutes = [
   {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login.vue'),
   },
   {
      path: '/',
      name: '/',
      component: () => import('../layout/index.vue'),
      children:[
      {
            path: '/home',
            name: 'home',
            component: () => import('../views/home.vue'),
      },
      {
         path: '/configuration',
         name: 'configuration',
         component: () => import('../views/configuration.vue'),
      },
      {
         path: '/operation',
         name: 'operation',
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
            }


         ]
      }, 
      {
         path: '/property',
         name: 'property',
         component: () => import('../views/property.vue')
      },
      {
         path: '/visualization',
         name: 'visualization',
         component: () => import('../views/visualization.vue')
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