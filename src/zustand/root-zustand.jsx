import create from "zustand";

const useTodoStore = create(set => ({
    todos: [
            {id: 1, title: "hello", list: "Today", isComplete: false},
            {id: 2, title: "test", list: "Today", isComplete: false},
            {id: 3, title: "cat", list: "Upcoming", isComplete: false}
        ],
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
    completeTodo: toBeCompletedTodo => {
        if (!toBeCompletedTodo) {
            return;
        }
        set(state => ({
            todos: state.todos.map(todo => {
                if (todo === toBeCompletedTodo) {
                    todo.isComplete = true;
                }
                return todo;
            })
        }))
    },
    selectTodo: todoId => {
        set(state => ({ selectedTodo: state.todos.filter(todo => todo.id === todoId) }));
    },
    unSelectTodo: todoId => {
        set(state => ({ selectedTodo: state.selectedTodo.filter(todo => todo.id !== todoId)}))
    }
}))

const useTodoListStore = create(set => ({
    currentTodoList: 'Today',
    setCurrentTodoList: todoList => set(state => ({
        currentTodoList: todoList
    })),
    todoLists: ['Today', 'Upcoming', 'Anytime', 'Test'],
    addTodoList: newTodoList => set(state => ({ todoLists: [...state.todoList, newTodoList] })),
}))

export {
    useTodoStore,
    useTodoListStore
}