import { FC, useState } from "react";
import styled from "@emotion/styled";
import { formatTime } from "../../utils/formatTime";
import { Box, Button } from "@mui/material";
import { useNow } from "../../hooks/useNow";

const STROKE_LENGTH = 631.14;

type PomodoroTimerProps = {
    workTime: number
};

const PomodoroCircle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const PomodoroTime = styled.div`
    font-weight: 700;
    font-size: 30px;
    line-height: 1;
    position: absolute;
    color: #eb2626;
`;

export const PomodoroTimer: FC<PomodoroTimerProps> = ({ workTime }) => {
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [isPause, setIsPause] = useState<boolean>(false);
    const [startAt, setStartAt] = useState<null | number>(null);

    const disablePomodoro = (time: number) => {
        if (timeLeft < 1000) {
            setIsRunning(false);
            setStartAt(null);
            alert('Время вышло. Отдохни!');
        }
    }

    const now = useNow(1000, isRunning, disablePomodoro);
    const passedTime = now - (startAt ?? now);

    const timeLeft = workTime - passedTime;
    const handleStart = () => {
        if (isPause) {
            setIsPause(false);
            setIsRunning(true);

            return;
        }

        setIsRunning(true);
        setStartAt(Date.now());
    };

    const handlePause = () => {
        setIsRunning(false);
        setIsPause(true);
    };

    const handleReset = () => {
        setIsRunning(false);
        setStartAt(null);
    };


    const getPersentComplete = () => { return timeLeft / workTime; }


    const calculateStrokeLength = (): number => {
        return STROKE_LENGTH - STROKE_LENGTH * getPersentComplete();
    }

    return (
        <>
            <PomodoroCircle>
                <svg width="221" height="221" viewBox="-27.625 -27.625 276.25 276.25" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(-90deg)' }}>
                    <circle r="100.5" cx="110.5" cy="110.5" fill="transparent" stroke="#c3bbbb" stroke-width="30" stroke-dasharray="631.14px" stroke-dashoffset="0"></circle>
                    <circle r="100.5" cx="110.5" cy="110.5" stroke="#eb2626" stroke-width="30" stroke-linecap="butt" stroke-dashoffset={calculateStrokeLength()} fill="transparent" stroke-dasharray="631"></circle>
                </svg>
                <PomodoroTime>{formatTime(timeLeft)}</PomodoroTime>
            </PomodoroCircle>
            <Box>
                <Button variant="contained" onClick={handleStart} disabled={isRunning}> Start</Button>
                <Button variant="contained" onClick={handlePause} disabled={!isRunning}> Pause</Button>
                <Button onClick={handleReset} variant="outlined">Reset</Button>
            </Box>
        </>
    )
}


export default PomodoroTimer;