<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-lg-10 order-md-last">
          <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-4" v-for="productItem in productItems" :key="productItem.id">
              <div class="product">
                <a href="#" class="img-prod"><img class="img-fluid" :src="require(`@/assets/images/${productItem.image}`)" alt="Colorlib Template">
                  <span class="status">30%</span>
                  <div class="overlay"></div>
                </a>
                <div class="text py-3 px-3">
                  <h3><a href="#">{{productItem.name}}</a></h3>
                  <div class="d-flex">
                    <div class="pricing">
                      <p class="price"><span class="price-sale">${{productItem.cost}}</span></p>
                    </div>
                    <div class="rating">
                      <p class="text-right">
                        <a href="#"><span class="ion-ios-star-outline"></span></a>
                        <a href="#"><span class="ion-ios-star-outline"></span></a>
                        <a href="#"><span class="ion-ios-star-outline"></span></a>
                        <a href="#"><span class="ion-ios-star-outline"></span></a>
                        <a href="#"><span class="ion-ios-star-outline"></span></a>
                      </p>
                    </div>
                  </div>
                  <p class="bottom-area d-flex px-3">
                    <a @click="addCartItem(productItem)" href="#" class="add-to-cart text-center py-2 mr-1"><span>Add to cart <i class="ion-ios-add ml-1"></i></span></a>
                    <a href="#" class="buy-now text-center py-2">Buy now<span><i class="ion-ios-cart ml-1"></i></span></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col text-center">
              <div class="block-27">
                <ul>
                  <li><a href="#">&lt;</a></li>
                  <li class="active"><span>1</span></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">&gt;</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "ProductList",
  created() {
    this.$store.dispatch('product/getProductItems')
  },
  computed: {
    ...mapGetters({
      productItems: 'product/productItems'
    })
  },
  methods: {
    ...mapActions({
      addCartItem: 'cart/addCartItem',
    }),
  }
}
</script>

<style scoped>

</style>