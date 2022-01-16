/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const matchRouter = {
  path: '/match',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: 'Match',
    icon: 'component'
  },
  children: [
    {
      path: 'tinymce',
      component: () => import('@/views/components-demo/tinymce'),
      name: 'Configuracion Match',
      meta: { title: 'Configuracion Match' }
    },
    {
      path: 'markdown',
      component: () => import('@/views/components-demo/markdown'),
      name: 'Match Rates',
      meta: { title: 'Match Rates' }
    },
    {
      path: 'json-editor',
      component: () => import('@/views/components-demo/json-editor'),
      name: 'Clubs',
      meta: { title: 'Clubs' }
    }

  ]
}
export default matchRouter
