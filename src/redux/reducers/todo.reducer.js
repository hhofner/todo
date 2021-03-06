import { TodoTypes } from "../actions/todo";
import Todo from "../../components/todo/todo.component";

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
        case TodoTypes.COMPLETE_SELECTED_TODO:
            return {
                ...state,
                todos: [state.todos.map(todo => {
                    if (todo.id == action.payload) {
                        todo.isCompleted = true;
                    }
                })]
            }
        default:
            return state;
    }
}

export default todoReducer;
