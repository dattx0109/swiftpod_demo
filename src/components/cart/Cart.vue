<template>
  <section class="ftco-section ftco-cart">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="cart-list">
            <table class="table">
              <thead class="thead-primary">
              <tr class="text-center">
                <th>&nbsp;</th>
                <th>&nbsp;</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
              </thead>
              <tbody>
              <tr class="text-center"
                  v-for="cartItem in cartItems"
                  :key="cartItem.id"
              >
                <td class="product-remove"><a href="#"><span class="ion-ios-close"></span></a></td>
                <td class="image-prod">
                  <div class="img"
                       :style="{ backgroundImage: `url(${require('@/assets/images/' + cartItem.image)})` }"></div>
                </td>
                <td class="product-name">
                  <h3>{{ cartItem.name }}</h3>
                  <p>Far far away, behind the word mountains, far from the countries</p>
                </td>

                <td class="price">${{ cartItem.cost }}</td>

                <td class="quantity">
                  <div class="input-group mb-3">
                    <input @change="changeQuantityItem(cartItem)" type="number" name="quantity" class="quantity form-control input-number" v-model="cartItem.quantity" min="1"
                           max="100">
                  </div>
                </td>
                <td class="total">${{ cartItem.subTotalCost }}</td>
              </tr><!-- END TR-->
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-lg-5 col-md-6 mt-5 cart-wrap">
          <div class="cart-total mb-3">
            <p class="d-flex total-price">
              <span>Total</span>
              <span>${{ totalCost }}</span>
            </p>
          </div>
          <p class="text-center"><a href="checkout.html" class="btn btn-primary py-3 px-4">Proceed to Checkout</a></p>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "CartIndex",
  computed: {
    ...mapGetters({
      cartItems: 'cart/cartItems',
      totalCost: 'cart/getTotalCartCost',
    })
  },
  methods: {
    ...mapActions({
      changeQuantityItem: 'cart/changeQuantity',
    })
  }
}
</script>

<style scoped>

</style>