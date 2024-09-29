import { useReducer } from "react";
import { ToDo } from "../../types/types";

type State = {
    taskName: string;
    todos: ToDo[];
};

type Action =
    | { type: "SET_TASK_NAME"; payload: string }
    | { type: "ADD_TODO"; payload: ToDo }
    | { type: "UPDATE_TODO"; payload: { task: ToDo } }
    | { type: "DELETE_TODO"; payload: number };

const initialState: State = {
    taskName: "",
    todos: [],
};

const reducer = (state: State, action: Action): State => {
  console.log('%cstate', 'padding: 5px; background: DarkKhaki; color: Yellow;', state);
    switch (action.type) {
        case "SET_TASK_NAME":
            return { ...state, taskName: action.payload };
        case "ADD_TODO":
            return { ...state, todos: [...state.todos, action.payload] };
        case "UPDATE_TODO":
            return {
                ...state,
                todos: state.todos.map((task) => (task.id === action.payload.task.id ? action.payload.task : task)),
            };
        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter((_, index) => index !== action.payload),
            };
        default:
            return state;
    }
};

// Hook to manage task and todo items
const useTaskManager = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setTaskName = (name: string) => {
        dispatch({ type: "SET_TASK_NAME", payload: name });
    };

    const addTodo = (task: ToDo) => {
        dispatch({ type: "ADD_TODO", payload: task });
    };

    const updateTodo = (task: ToDo) => {
        dispatch({ type: "UPDATE_TODO", payload: { task } });
    };

    const deleteTodo = (index: number) => {
        dispatch({ type: "DELETE_TODO", payload: index });
    };

    return {
        taskName: state.taskName,
        todos: state.todos,
        setTaskName,
        addTodo,
        updateTodo,
        deleteTodo,
    };
};

export default useTaskManager;
