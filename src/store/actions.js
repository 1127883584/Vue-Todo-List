const actions = {
    addItem ({ commit }, status) {
        commit('addItem', status)
    },
    changeItemIsSelected({ commit }, status) {
        commit('changeItemIsSelected', status)
    },
}

export default actions