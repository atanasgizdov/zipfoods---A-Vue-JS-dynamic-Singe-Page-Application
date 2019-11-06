<!-- src/components/ShowProduct.vue -->
<template>
    <div class='product'>
        <div class='product-name'>{{ product.name }}</div>
        <img class='product-thumb' :src='"@/images/products/" + product.id + ".jpg"' />
        <p class='product-description'>{{ product.description }}</p>
        <div class='product-price'>${{ product.price }}</div>
    </div>
</template>

<script>
  export default {
    name: 'product',
    props: {
      product: Object
    },
  }
</script>

<style lang='scss'>
@import '@/assets/css/zipfoods.scss'
</style>
