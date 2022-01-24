/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const providerRouter = {
  path: '/provider',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: 'Proveedores',
    icon: 'peoples'
  },
  children: [
    {
      path: 'configProvider',
      component: () => import('@/components-laLiga/provider/configProvider'),
      name: 'Admin provider',
      meta: { title: 'Admin provider' }
    },
    {
      path: 'provider',
      component: () => import('@/views/components-demo/split-pane'),
      name: 'Admin provider',
      meta: { title: 'Admin provider' }
    }
  ]

}
export default providerRouter
