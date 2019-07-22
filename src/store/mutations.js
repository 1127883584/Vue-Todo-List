const mutations = {
    addItem(state, status) {
        state.items.push(status);
    },
    changeShow(state, status) {
        console.log(JSON.stringify(state.items))
        state.tableStatus = status
        if (status === 1) {
            for (let i = 0; i < state.items.length; i++) {
                state.items[i].isShow = true;
            }
        } else if (status === 2) {
            for (let i = 0; i < state.items.length; i++) {
                state.items[i].isShow = !state.items[i].isSelected;
            }
        } else if (status === 3) {
            for (let i = 0; i < state.items.length; i++) {
                state.items[i].isShow = state.items[i].isSelected;
            }
        }
    },
    changeItemIsEditing(state, status) {
        for (let i = 0; i < state.items.length; i++) {
            if (state.items[i].id === status.el.id) {
                state.items[i].isEditing = status.isEdit;
            }
        }
    },
}

export default mutations