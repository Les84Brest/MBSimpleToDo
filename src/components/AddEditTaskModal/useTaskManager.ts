import { useReducer } from 'react';
import { ToDo } from '../../types/types';


type State = {
  taskName: string;
  todos: ToDo[];
};

type Action =
  | { type: 'SET_TASK_NAME'; payload: string }
  | { type: 'ADD_TODO'; payload: ToDo }
  | { type: 'UPDATE_TODO'; payload: { index: number; task: ToDo } }
  | { type: 'DELETE_TODO'; payload: number };


const initialState: State = {
  taskName: '',
  todos: [],
};


const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_TASK_NAME':
      return { ...state, taskName: action.payload };
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map((task, index) =>
          index === action.payload.index ? action.payload.task : task
        ),
      };
    case 'DELETE_TODO':
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
    dispatch({ type: 'SET_TASK_NAME', payload: name });
  };

  const addTask = (task: ToDo) => {
    dispatch({ type: 'ADD_TODO', payload: task });
  };

  const updateTask = (index: number, task: ToDo) => {
    dispatch({ type: 'UPDATE_TODO', payload: { index, task } });
  };

  const deleteTask = (index: number) => {
    dispatch({ type: 'DELETE_TODO', payload: index });
  };

  return {
    taskName: state.taskName,
    tasks: state.todos,
    setTaskName,
    addTask,
    updateTask,
    deleteTask,
  };
};

export default useTaskManager;