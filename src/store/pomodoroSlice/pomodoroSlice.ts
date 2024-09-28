import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PomodoroTypes } from "../../components/PomodoryTypeSwitcher/types";

interface IPomodoroState {
    timeLeft: number;
    startAt: number | null;
    pomodoroType: string;
    isRunning: boolean;
    isPaused: boolean;
}

type SetTimeLeftPayload = {
    timeLeft: number,
}
type StartTimerPayload = {
    pomodoroType: PomodoroTypes,
    startAt: number,
    isRunning: boolean,
}
const initialState: IPomodoroState = {
    timeLeft: 0,
    pomodoroType: '',
    isRunning: false,
    isPaused: false,
    startAt: null
}

export const pomodoroSlice = createSlice({
    name: 'pomodoro',
    initialState,
    reducers: {
        setTimeLeft(state, action: PayloadAction<SetTimeLeftPayload>) {
            state.timeLeft = action.payload.timeLeft;
        },
        tick(state) {
            state.timeLeft = state.timeLeft - 1;
        },
        startTimer(state, action: PayloadAction<StartTimerPayload>) {
            const { pomodoroType, isRunning, startAt } = action.payload;

            state.isRunning = isRunning;
            state.pomodoroType = pomodoroType;
            state.startAt = startAt;
        }
    }
})

export const { setTimeLeft, tick, startTimer } = pomodoroSlice.actions;

export default pomodoroSlice.reducer;