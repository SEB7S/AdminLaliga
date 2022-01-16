/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const stadiumRouter = {
  path: '/stadium',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: 'Estadios',
    icon: 'example'
  },
  children: [
    {
      path: 'tinymce',
      component: () => import('@/views/components-demo/tinymce'),
      name: 'Configuración de Estadios',
      meta: { title: 'Configuración de Estadios' }
    },
    {
      path: 'markdown',
      component: () => import('@/views/components-demo/markdown'),
      name: 'Categorías Estadios',
      meta: { title: 'Categorías Estadios' }
    },
  ]
}
export default stadiumRouter