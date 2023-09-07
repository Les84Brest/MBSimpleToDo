import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ITask, ToDo } from '../../types/types'

//TODO remove
import data from '../../components/ToDoApp/data';
//TODO remove

// export type Photo = {
//     albumId: number,
//     id: number,
//     title: string,
//     url: string,
//     thumbnailUrl: string,
// }

// export enum Status {
//     LOADING = 'loading',
//     SUCCESS = 'success',
//     ERROR = 'error'
// }

// export interface IPhotoState {
//     photos: Photo[];
//     status: Status;
//     error: string | null;
// }

interface ITaskState {
    tasks: Array<ITask>
}

const initialState: ITaskState = {
    tasks: data,
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<ITask>) {
            state.tasks.push(action.payload);
        },

        addTodo(state, action: PayloadAction<{taskId: number, todo: ToDo}>) {
            //TODO add todo logic
            console.log('%cadd todo', 'padding: 5px; background: FloralWhite; color: red;');
        },

        deleteTodo(state, action: PayloadAction<{taskId: number, todo: ToDo}>) {
            //TODO delete todo logic
            console.log('%cdeleteTodo', 'padding: 5px; background: FloralWhite; color: red;');
        }

    },

});

export const { addTask, addTodo, deleteTodo } = tasksSlice.actions

export default tasksSlice.reducer;