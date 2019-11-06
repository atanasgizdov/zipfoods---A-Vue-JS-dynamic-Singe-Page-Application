<!-- src/components/ShowProducts.vue -->
<template>
    <div id='show-products'>
        <h2>Products</h2>
        <show-product
          v-for='product in products' :key='product.id' :product='product'>

        </show-product>
    </div>
</template>

<script>
import ShowProduct from '@/components/ShowProduct.vue'
import { products } from '@/products.js';

export default {
  name: 'show-products',
  components: {
    ShowProduct
  },
  data() {
    return {
      products: products
      }
  },

/* refactored out for routing
  props: {
    products: Array,
  },

  */
}

</script>

<style lang='scss'>
@import '@/assets/css/zipfoods.scss'
</style>
