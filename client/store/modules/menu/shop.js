import lazyLoading from './lazyLoading'

export default {
  meta: {
    label: 'Shop',
    icon: 'fa fa-line-chart',
    expanded: true
  },

  children: [
    {
      name: 'Reddit',
      path: '/reddit',
      meta: {
        link: 'ybfinanz/RedditTutorial.vue'
      },
      component: lazyLoading('ybfinanz/RedditTutorial')
    },
    {
      name: 'Stock Analysis',
      path: '/stock',
      meta: {
        link: 'ybfinanz/StockAnalysis.vue'
      },
      component: lazyLoading('ybfinanz/StockAnalysis')
    }
  ]
}
