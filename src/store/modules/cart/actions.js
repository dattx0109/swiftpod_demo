const data = [
    {
        id: 1,
        name: 'product-1',
        image: 'product-1.jpg',
        cost: 100,
    },
    {
        id: 2,
        name: 'product-2',
        image: 'product-2.jpg',
        cost: 200,
    },
    {
        id: 3,
        name: 'product-3',
        image: 'product-3.jpg',
        cost: 300,
    },
    {
        id: 4,
        name: 'product-4',
        image: 'product-4.jpg',
        cost: 400,
    }
]
const actions = {
    getProductItems({ commit }) {
        commit('UPDATE_PRODUCT_ITEMS', data)
    },
};

export default actions;