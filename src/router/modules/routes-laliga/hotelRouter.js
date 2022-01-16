/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const hotelRouter = {
  path: '/',
  component: Layout,
  redirect: 'hotel',
  name: 'ComponentDemo',
  meta: {
    title: 'Hoteles',
    icon: 'star'
  },
  children: [
    {
      path: 'hotel',
      component: () => import('@/components-laLiga/hotel/categoryHotel'),
      name: 'Categoría de Hotel',
      meta: { title: 'Categoría de Hotel' }
    },
    {
      path: 'markdown',
      component: () => import('@/views/components-demo/split-pane'),
      name: 'Gestionar Hotel',
      meta: { title: 'Gestionar Hotel' }
    },
    {
      path: 'json-editor',
      component: () => import('@/views/components-demo/split-pane'),
      name: 'Gestionar Habitación',
      meta: { title: 'Gestionar Habitación' }
    }

  ]
}
export default hotelRouter
