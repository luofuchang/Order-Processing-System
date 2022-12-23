/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/table',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Table',
  meta: {
    title: 'Table',
    icon: 'table'
  },
  children: [
    {
      path: 'allOrders',
      component: () => import('@/views/table/complex-table'),
      name: 'DynamicTable',
      meta: { title: '所有订单' }
    },
    {
      path: 'sentOrders',
      component: () => import('@/views/table/complex-table'),
      name: 'DragTable',
      meta: { title: '已发货' }
    },
    {
      path: 'buyedOrders',
      component: () => import('@/views/table/complex-table'),
      name: 'InlineEditTable',
      meta: { title: '已买货' }
    },
    {
      path: 'buyingOders',
      component: () => import('@/views/table/complex-table'),
      name: 'ComplexTable',
      meta: { title: '未买货' }
    }
  ]
}
export default tableRouter
