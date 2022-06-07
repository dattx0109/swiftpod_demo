import {createRouter, createWebHistory} from 'vue-router'
import ProductList from "@/components/product/ProductList";
import Cart from "@/components/cart/Cart";
import Home from "@/components/home/Home";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: Home,
            path: '/',
            component: Home
        },
        {
            name: ProductList,
            path: '/products',
            component: ProductList
        },
        {
            name: Cart,
            path: '/cart',
            component: Cart
        }
    ]
})

export default router;