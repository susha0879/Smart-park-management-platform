import { createRouter, createWebHashHistory } from 'vue-router' 
// import operationRouter from './operation'
const manageroutes = [
<<<<<<< Updated upstream
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
=======
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/home',
    name: '/home',
    component: () => import('../layout/index.vue'),
    children: [
>>>>>>> Stashed changes
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