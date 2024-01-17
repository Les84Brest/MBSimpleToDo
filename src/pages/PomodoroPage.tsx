import { Button, Container, Typography, Box } from '@mui/material';
import React, { useState, useEffect, FC } from 'react';
import PomodoroTypeSwitcher from '../components/PomodoryTypeSwitcher/PomodoryTypeSwitcher';
import PomodoroDisplay from '../components/PomodoroDisplay';
import PomodoroTasks from '../components/PomodoroTasks';
import { formatTime } from "../utils/formatTime";
import Pomodoro from '../components/Pomodoro';

const POMODORO_INTERVAL = 25;
const SHORT_BREAK_INTERVAL = 5;
const LONG_BREAK_INTERVAL = 15;

type IntervalTimeout = ReturnType<typeof setInterval> | null;

export const PomodoroPage: FC = () => {
    const [timeLeft, setTimeLeft] = useState<number>(25 * 60); // Initial work time in seconds
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [isBreak, setIsBreak] = useState<boolean>(false);
    const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);

    useEffect(() => {
        const tick = () => {
            setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
        };

        if (isRunning) {
            setIntervalId(setInterval(tick, 1000));
        } else {
            clearInterval(intervalId as NodeJS.Timer);
        }

        return () => clearInterval(intervalId as NodeJS.Timer); // Clear interval on unmount
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handlePause = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setTimeLeft(25 * 60);
        setIsRunning(false);
        setIsBreak(false);
    };

    const handleBreak = () => {
        setIsBreak(true);
        setTimeLeft(5 * 60); // Set break time
        handleStart();
    };

    const handleSession = () => {
        setIsBreak(false);
        setTimeLeft(25 * 60); // Set work time
        handleStart();
    };

    const handleTimeComplete = () => {
        if (isBreak) {
            handleSession();
        } else {
            handleBreak();
        }
    };

    const getProgressValue = () => Math.trunc((timeLeft / (25 * 60)) * 100)

    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                
                <Typography variant='h2' sx={{ textAlign: 'center' }}>Pomodoro timer</Typography>
                <Pomodoro/>
                <PomodoroTypeSwitcher />
                <PomodoroDisplay value={getProgressValue()} formatedTime={formatTime(timeLeft)} />
                <Box>
                    <Button variant="contained" onClick={handleStart} disabled={isRunning}> Start</Button>
                    <Button variant="contained" onClick={handlePause} disabled={!isRunning}> Pause</Button>
                    <Button onClick={handleReset} variant="outlined">Reset</Button>
                </Box>
                {isRunning && !timeLeft && <button onClick={handleTimeComplete}>Next</button>}
                <PomodoroTasks tasks={['First task', 'second task']}/>
            </Box>
        </Container>
    );
}


export default PomodoroPage;