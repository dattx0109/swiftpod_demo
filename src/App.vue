<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div class="container">
        <a class="navbar-brand" href="index.html">DEMO SHOP</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="oi oi-menu"></span> Menu
        </button>
        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">
                HOME
              </router-link>
            </li>            <li class="nav-item">
              <router-link class="nav-link" to="/products">
                PRODUCT
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cart">
                CART
              </router-link>
            </li>
            <li class="nav-item cta cta-colored">
              <router-link to="/cart" class="nav-link"><span class="icon-shopping_cart"></span>[{{ cartQuantity }}]</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters({
      cartQuantity: 'cart/cartQuantity'
    })
  },
}
</script>

<style>

</style>
