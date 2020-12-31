import { TodoListTypes } from "../actions/todoList";

const INITIAL_STATE = {
    selectedTodoList: "Today"
};

const todoListReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TodoListTypes.SELECT_TODO_LIST:
            return {
                ...state,
                selectedTodoList: action.payload
            };
        default:
            return state;
    }
}

export default todoListReducer;
