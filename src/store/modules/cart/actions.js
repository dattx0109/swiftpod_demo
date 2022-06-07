import Swal from "sweetalert2";
const actions = {
    getCartItems({ commit }, data) {
        commit('UPDATE_CART_ITEMS', data)
    },
    addCartItem ({ commit }, cartItem) {
        commit('ADD_CART_ITEM', cartItem);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
    },
    changeQuantity ({ commit }, cartItem) {
        commit('ADD_CART_ITEM', cartItem);
    },
};

export default actions;