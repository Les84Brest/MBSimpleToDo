import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './taskToDoSlice/taskToDoSlice';
import pomodoroReducer from "./pomodoroSlice/pomodoroSlice";

export const store = configureStore({
    reducer: {
        task: tasksReducer,
        pomodoro: pomodoroReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch