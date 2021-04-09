import create from "zustand";

const useTodoStore = create(set => ({
    todos: [{id: 1, title: "hello"}, {id: 2, title: "test"}],
    completedTodos: [],
    selectedTodo: [],
    addTodo: newTodo => set(state => ({ todos: [...state.todos, newTodo]})),
    removeTodo: selectedTodo => {
        if (!selectedTodo) {
            return;
        }
        set(state => (
            {
                todos: state.todos.filter(todo => todo.id !== selectedTodo.id),
                selectedTodo: []
            })
        );
    },
    completeTodo: toBeCompletedTodo => set(state => ({
        todos: state.todos.map(todo => {
            if (todo.id === toBeCompletedTodo){
                console.log(`Completing todo: ${todo}`)
            } else {
                return todo;
            }
        })
    })),
    selectTodo: todoId => {
        set(state => ({ selectedTodo: state.todos.filter(todo => todo.id === todoId) }));
    },
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