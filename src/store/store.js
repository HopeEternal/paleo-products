import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      { name: 'AIP Banana Bread', price: 20 },
      { name: 'Paleo Turkey and "Rice"', price: 40 },
      { name: 'Keto Tortillas', price: 60 },
      { name: 'Black Bean Brownies', price: 80 }
    ]
  }
});
