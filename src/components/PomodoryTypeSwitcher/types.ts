import { ValueOf } from "../../types/types";

const pomodoroTypes = {
    POMODORO: 'POMODORO',
    SHORT_BREAK: 'SHORT_BREAK',
    LONG_BREAK: 'LONG_BREAK'
} as const;

type PomodoroTypes =  ValueOf<typeof pomodoroTypes>;