const actions = {
    getCartItems({ commit }, data) {
        commit('UPDATE_CART_ITEMS', data)
    },
    addCartItem ({ commit }, cartItem) {
        commit('ADD_CART_ITEM', cartItem);
    },
};

export default actions;