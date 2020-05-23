// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/styles/_variables.scss'
import '~/assets/styles/styles.scss'

import moment from 'moment'
import Vuex from 'vuex'

export default function (Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(Vuex);

  Vue.filter('formatDate', function(value) {
    if (value) {
      return moment(String(value)).format('MMMM DD, YYYY')
    }
  });

  appOptions.store = new Vuex.Store({
    state: {
      headerbg: '/uploads/sailormoonattitude1.PNG'
    },
    mutations: {
      REPLACE_BG (state, img) {
        state.headerbg = img
      }
    },
    actions: {
      setHeader({ commit }, event) {
        commit('REPLACE_BG', event);
      }
    }
  })

  head.meta.push({
    key: 'og:title',
    name: 'og:title',
    content: 'DarZouras.com'
  })
  head.meta.push({
    key: 'twitter:title',
    name: 'twitter:title',
    content: 'DarZouras.com'
  })
  head.meta.push({
    key: 'og:description',
    name: 'og:description',
    content: 'Darlene Zouras is a UX developer and artist'
  })
  head.meta.push({
    key: 'twitter:description',
    name: 'twitter:description',
    content: 'Darlene Zouras is a UX developer and artist'
  })

  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: 'og:url',
      name: 'og:url',
      content: 'https://darzouras.com' + to.path
    })
    head.meta.push({
      key: 'twitter:url',
      name: 'twitter:url',
      content: 'https://darzouras.com' + to.path
    })
    next()
  })
}
