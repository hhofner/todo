import { combineReducers } from "redux";
import todoListReducer from "./todolist.reducer";
import todoReducer from "./todo.reducer";

export default combineReducers({
    todoList: todoListReducer,
    todos: todoReducer
});
