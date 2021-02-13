import { TodoTypes } from "../actions/todo";

const INITIAL_STATE = {
    todos: [],
    selectedTodo: null
};

const todoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TodoTypes.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case TodoTypes.SELECT_TODO:
            return {
                ...state,
                selectedTodo: action.payload
            };
        case TodoTypes.CLEAR_SELECTED_TODO:
            return {
                ...state,
                selectedTodo: action.payload
            }
        default:
            return state;
    }
}

export default todoReducer;
