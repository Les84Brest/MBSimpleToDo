import { FC, useState } from "react";
import PomodoroTypeSwitcher from '../PomodoryTypeSwitcher';
import PomodoroTasks from '../PomodoroTasks';
import PomodoroTimer from "../PomodoroTimer";
import { PomodoroTypes } from "../PomodoryTypeSwitcher/types";
import { useEffect, useRef } from 'react';

export const POMODORO_TIME = 25 * 60 * 1000;
export const SHORT_BREAK_TIME = 5 * 60 * 1000;
export const LONG_BREAK_TIME = 15 * 60 * 1000;


export const Pomodoro: FC = () => {

    return (
        <>
            <PomodoroTypeSwitcher />
            <PomodoroTimer workTime={POMODORO_TIME} pomodoroType={PomodoroTypes.POMODORO} />
            <PomodoroTasks tasks={['First task', 'second task']} />
        </>
    )
}
export default Pomodoro;






const Component = ({ value }: { value: number }) => {
    const prevValue = useRef<number | null>();


    useEffect(() => {

        if (value !== null && prevValue.current !== value) {
            console.log("Previous value >> ", value);

            prevValue.current = value;
        }

    }, [value]);

    return <div>{value}</div>
}

