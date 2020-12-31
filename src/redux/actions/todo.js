export const TodoTypes = {
    ADD_TODO: "ADD_TODO"
}

export const addTodo = todo => ({
    type: TodoTypes.ADD_TODO,
    payload: todo
})
