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
}
