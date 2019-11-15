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
  },
  getters: {
    saleProducts: state => {
      let saleProducts = state.products.map(product => {
        return {
          name: '**' + product.name + '**',
          price: product.price / 2
        };
      });
      return saleProducts;
    }
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach(product => {
        product.price -= payload;
      });
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(function() {
        context.commit('reducePrice', payload);
      }, 2000);
    }
  }
});
