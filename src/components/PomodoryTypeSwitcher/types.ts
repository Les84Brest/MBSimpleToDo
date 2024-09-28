// import { ValueOf } from "../../types/types";

// const pomodoroTypes = {
//     POMODORO: 'POMODORO',
//     SHORT_BREAK: 'SHORT_BREAK',
//     LONG_BREAK: 'LONG_BREAK'
// } as const;

// export type PomodoroTypes =  ValueOf<typeof pomodoroTypes>;
export enum PomodoroTypes {
    POMODORO = 'POMODORO',
    SHORT_BREAK = 'SHORT_BREAK',
    LONG_BREAK = 'LONG_BREAK'
}