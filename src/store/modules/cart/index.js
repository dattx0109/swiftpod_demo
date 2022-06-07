import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const state = {
    cartItems: []
};

const productModule = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};

export default productModule;