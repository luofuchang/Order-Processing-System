/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/table',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Table',
  meta: {
    title: '订单',
    icon: 'table'
  },
  children: [
    {
      path: 'allOrders',
      component: () => import('@/views/table/complex-table'),
      name: 'allOrders',
      meta: { title: '所有订单' }
    },
    {
      path: 'sentOrders',
      component: () => import('@/views/table/complex-table'),
      name: 'sentOrders',
      meta: { title: '已发货' }
    },
    {
      path: 'buyedOrders',
      component: () => import('@/views/table/complex-table'),
      name: 'buyedOrders',
      meta: { title: '已买货' }
    },
    {
      path: 'buyingOders',
      component: () => import('@/views/table/complex-table'),
      name: 'buyingOders',
      meta: { title: '未买货' }
    }
  ]
}
export default tableRouter
