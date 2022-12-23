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
      path: 'dynamic-table',
      component: () => import('@/views/table/complex-table'),
      name: 'DynamicTable',
      meta: { title: '动态 Table' }
    },
    {
      path: 'drag-table',
      component: () => import('@/views/table/complex-table'),
      name: 'DragTable',
      meta: { title: '可拖动 Table' }
    },
    {
      path: 'inline-edit-table',
      component: () => import('@/views/table/complex-table'),
      name: 'InlineEditTable',
      meta: { title: '队列 Edit' }
    },
    {
      path: 'complex-table',
      component: () => import('@/views/table/complex-table'),
      name: 'ComplexTable',
      meta: { title: '综合 Table' }
    }
  ]
}
export default tableRouter
