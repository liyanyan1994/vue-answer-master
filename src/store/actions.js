export default {
    // 初始化数据
    initializeData({ commit }) {
        commit('INITIALIZE_DATA')
    },
    addNum({ commit, state }, id) {
        commit('REMEBER_ANSWER', id)
        if (state.itemNum < state.itemDetail.length) {
            commit('ADD_ITEMNUM', 1);
        }
    }
}