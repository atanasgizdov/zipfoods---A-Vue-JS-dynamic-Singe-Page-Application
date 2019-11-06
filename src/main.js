import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
    { path: '/',
      component: ShowFeatured,
      name: 'featured'
    },
    { path: '/products',
      component: ShowProducts,
      name: 'products'
    },
    { path: '/categories',
      component: ShowCategories,
      name: 'categories'
    }
]

import ShowCategories from './components/ShowCategories.vue';
import ShowProducts from './components/ShowProducts.vue';
import ShowFeatured from './components/ShowFeatured.vue';

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
