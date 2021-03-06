import {createSelector} from 'reselect';

const selectTodos = ({ todos }) => todos.todos
const selectSelectedTodoList = ({ todoList }) => todoList.selectedTodoList

export const selectTodosFromList = createSelector(
    [selectTodos, selectSelectedTodoList],
    (todos, selectedTodoList) => todos.filter(
        todo => todo.list.includes(selectedTodoList) && !todo.isCompleted
    )
)