import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IPomodoroState {
    timeLeft: number;
    pomodoroType: string;
    isRunning: boolean;
    isPaused: boolean;
}

type SetTimeLeftPayload = {
    timeLeft: number,
}
const initialState: IPomodoroState = {
    timeLeft: 0,
    pomodoroType: '',
    isRunning: false,
    isPaused: false,
}

export const pomodoroSlice = createSlice({
    name: 'pomodoro',
    initialState,
    reducers: {
        setTimeLeft(state, action: PayloadAction<SetTimeLeftPayload>){
            state.timeLeft = action.payload.timeLeft;
        },
        tick(state){
            state.timeLeft = state.timeLeft - 1;
        }
    }
})

export const {setTimeLeft, tick} = pomodoroSlice.actions;

export default pomodoroSlice.reducer;