<template>
  <div id="app">

    <nav>
        <ul>
            <li v-for='link in links' :key='link'>
                <router-link :to='names[link]' exact>{{ link }}</router-link>
            </li>
        </ul>
    </nav>

<router-view></router-view>

  </div>

</template>

<script>
//import ShowProducts from './components/ShowProducts.vue'
//import ShowFeatured from './components/ShowFeatured.vue'
//import ShowCategories from './components/ShowCategories.vue'
import { products } from './products.js';

export default {
  name: 'app',
  components: {
    //ShowProducts,
    //ShowFeatured,
    //ShowCategories
  },
  data() {
    return {
      products: products,
      links: ['home', 'products', 'categories'],
      names: {
        home: '/',
        products: 'products',
        categories: 'categories'
        }
      }
  },
  methods: {
  }
}
</script>

<style lang='scss'>
@import './assets/css/zipfoods.scss'
</style>
