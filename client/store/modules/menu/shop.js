import lazyLoading from './lazyLoading'

export default {
  meta: {
    label: 'Shop',
    icon: 'fa fa-line-chart',
    expanded: true
  },

  children: [
    {
      name: 'Main',
      path: '/shoppingmin',
      meta: {
        link: 'shop/Shoppingmin.vue'
      },
      component: lazyLoading('shop/Shoppingmin')
    },
    {
      name: 'Categoria 1',
      path: '/categoria1',
      meta: {
        link: 'shop/Categoria1.vue'
      },
      component: lazyLoading('shop/Categoria1')
    },
    {
      name: 'Admin painel',
      path: '/admin',
      meta: {
        link: 'shop/Admin.vue'
      },
      component: lazyLoading('shop/Admin')
    }
  ]
}
