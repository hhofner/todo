import { combineReducers } from "redux";
import todoListReducer from "./todolist.reducer";

export default combineReducers({
    selectedTodoList: todoListReducer
});
