/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const cityRouter = {
  path: '/city',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: 'Ciudades',
    icon: 'international'
  },
  children: [
    {
      path: 'tinymce',
      component: () => import('@/views/components-demo/tinymce'),
      name: 'Configuración de Ciudad',
      meta: { title: 'Configuración de Ciudad' }
    },
    {
      path: 'city',
      component: () => import('@/views/components-demo/tinymce'),
      name: 'Configuración de Ciudad',
      meta: { title: 'Configuración de Ciudad' }
    }
  ]
}
export default cityRouter
