export const TodoTypes = {
    ADD_TODO: "ADD_TODO",
    SELECT_TODO: "SELECT_TODO",
    CLEAR_SELECTED_TODO: "CLEAR_SELECTED_TODO",
    COMPLETE_SELECTED_TODO: "COMPLETE_SELECTED_TODO"
}

export const addTodo = todo => ({
    type: TodoTypes.ADD_TODO,
    payload: todo
})

export const selectTodo = todo => ({
    type: TodoTypes.SELECT_TODO,
    payload: todo.key
})

export const clearSelectedTodo = todo => ({
    type: TodoTypes.CLEAR_SELECTED_TODO,
    payload: null
})

export const completeSelectedTodo = todo => ({
    type: TodoTypes.COMPLETE_SELECTED_TODO,
    payload: todo.id
})
