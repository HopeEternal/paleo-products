<template>
  <div id="app">
    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue';
import ProductListTwo from './components/ProductListTwo.vue';

export default {
  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo
  },
  name: 'app',
  data() {
    return {
      products: [
        { name: 'AIP Banana Bread', price: 20 },
        { name: 'Paleo Turkey and "Rice"', price: 40 },
        { name: 'Keto Tortillas', price: 60 },
        { name: 'Black Bean Brownies', price: 80 }
      ]
    };
  }
};
</script>

<style>
body {
  font-family: Ubuntu;
  color: #2d3436;
}
</style>
