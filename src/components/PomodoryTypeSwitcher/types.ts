import { ValueOf } from "../../types/types";

const pomodoroTypes = {
    POMODORO: 'pomodoro',
    SHORT_BREAK: 'short_breack',
    LONG_BREAK: 'long_breack'
} as const;

type PomodoroTypes =  ValueOf<typeof pomodoroTypes>;