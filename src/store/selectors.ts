import { RootState } from './store';

export const selectTaskData = (state: RootState) => state.task;
export const selectPomodoroData = (state: RootState) => state.pomodoro;
export const selectModalData = (state: RootState) => state.modal;
