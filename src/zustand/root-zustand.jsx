import create from "zustand";

const useTodoStore = create(set => ({
    todos: [{id: 1, title: "hello"}, {id: 2, title: "test"}],
    addTodo: newTodo => set(state => ({ todos: [...state.todos, newTodo]})),
    removeTodo: oldTodo => set(state => ({todos: state.todos.filter(todo => todo.id !== oldTodo.id)}))
}))

const useTodoListStore = create(set => ({
    currentTodoList: 'Today',
    setCurrentTodoList: todoList => set(state => ({
        currentTodoList: todoList
    })),
    todoLists: [],
    addTodoList: newTodoList => set(state => ({ todoLists: [...state.todoList, newTodoList] })),
}))

export {
    useTodoStore,
    useTodoListStore
}