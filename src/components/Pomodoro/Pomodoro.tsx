import { FC, useState } from "react";
import PomodoroTypeSwitcher from '../PomodoryTypeSwitcher';
import PomodoroTasks from '../PomodoroTasks';

import PomodoroTimer from "../PomodoroTimer";

export const POMODORO_TIME = 25 * 60 * 1000;
export const SHORT_BREAK_TIME = 5 * 60 * 1000;
export const LONG_BREAK_TIME = 15 * 60 * 1000;


export const Pomodoro: FC = () => {




    return (
        <>
            <PomodoroTypeSwitcher />
            <PomodoroTimer workTime={POMODORO_TIME} />
            <PomodoroTasks tasks={['First task', 'second task']} />
        </>
    )
}
export default Pomodoro;