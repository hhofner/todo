export const TodoListTypes = {
    SELECT_TODO_LIST: "SELECT_TODO_LIST"
}

export const selectTodoList = todoListName => ({
    type: TodoListTypes.SELECT_TODO_LIST,
    payload: todoListName
})
