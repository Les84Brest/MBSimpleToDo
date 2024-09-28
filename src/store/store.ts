import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './taskToDoSlice/taskToDoSlice';
import pomodoroReducer from "./pomodoroSlice/pomodoroSlice";
import modalReducer from "./modalSlice/modalSlice"

export const store = configureStore({
    reducer: {
        task: tasksReducer,
        pomodoro: pomodoroReducer,
        modal: modalReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch