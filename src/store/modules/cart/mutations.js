const mutations = {
    UPDATE_PRODUCT_ITEMS (state, payload) {
        state.productItems = payload;
    },
    UPDATE_CART_ITEMS (state, payload) {
        state.cartItems = payload;
    },
    ADD_CART_ITEM (state, productItem) {
        const index = state.cartItems.findIndex(x => x.id === productItem.id)
        if (index !== -1) {
            let productFound = state.cartItems[index]
            productFound.quantity++
            productFound.subTotalCost = productFound.quantity * productFound.cost
            state.cartItems[index] = productFound;
        } else {
            // Add product to state
            productItem.quantity = 1
            productItem.subTotalCost = productItem.quantity * productItem.cost
            state.cartItems.push({...productItem})
        }
    },
    CHANGE_QUANTITY_CART_ITEM (state, productItem) {
        const index = state.cartItems.findIndex(x => x.id === productItem.id)

        if (index === -1) {
            return;
        }

        let productFound = state.cartItems[index]
        productFound.quantity = productItem.quantity
        productFound.subTotalCost = productFound.quantity * productFound.cost
        state.cartItems[index] = productFound;
    }
};

export default mutations;