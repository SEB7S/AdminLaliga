/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tourRouter = {
  path: '/tour',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: 'Tour',
    icon: 'education'
  },
  children: [
    {
      path: 'configTour',
      component: () => import('@/components-laLiga/tour/configTour'),
      name: 'Configuración de Tour',
      meta: { title: 'Configuración de Tour' }
    },
    {
      path: 'tinymce',
      component: () => import('@/views/components-demo/tinymce'),
      name: 'Configuración de Tour',
      meta: { title: 'Configuración de Tour' }
    }
  ]
}
export default tourRouter
