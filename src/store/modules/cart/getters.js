const getters = {
    cartItems: state => state.cartItems,
    cartQuantity: state => {
        return state.cartItems.reduce((acc, cartItem) => {
            return acc + cartItem.quantity;
        },0).toFixed(0);
    },
    getTotalCartCost: state => {
        return state.cartItems.reduce((acc, cartItem) => {
            return acc + cartItem.subTotalCost;
        },0).toFixed(0);
    },
};

export default getters;