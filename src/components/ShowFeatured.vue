<template>
<div>
  <div id='header'>
    <p> ZipFoods is your one-stop-shop for convenient online grocery shopping in the greater Boston area. </p>
  </div>
  <div id='featured'>
        <h2>Featured Products</h2>
        <ul class='cleanList'>
            <li v-for='product in featuredProducts()' :key='product.id'>{{ product.name }}</li>
        </ul>
  </div>
</div>
</template>


<script>
import { products } from '@/products.js';
  export default {
    name: 'featured',
    data() {
      return {
        products: products,
        category: 'snacks'
        }
    },
  /* re-factored out form using props for purpose of individual page routing
  /*  props: {
      products: Array,
      category: String,
    },

  */
    methods: {
      featuredProducts: function() {
        function isMatch(product) {
          return product.categories.includes(this);
        }
      return this.products.filter(isMatch, this.category);
      }
    }
  }
</script>
