import { FC, useState } from "react";
import styled from "@emotion/styled";
import { formatTime } from "../../utils/formatTime";
import { Box, Button } from "@mui/material";
import { useNow } from "../../hooks/useNow";
import { useAppDispatch } from "../../hooks/redux";
import { startTimer } from "../../store/pomodoroSlice/pomodoroSlice";
import { PomodoroTypes } from "../PomodoryTypeSwitcher/types";
import { useAppSelector } from "../../hooks/redux";
import { selectPomodoroData } from "../../store/selectors";

const STROKE_LENGTH = 631.14;

type PomodoroTimerProps = {
    workTime: number,
    pomodoroType: PomodoroTypes
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

const BgCircle = styled.circle`
    fill: transparent;
    stroke: #c3bbbb; 
    stroke-width: 30; 
    stroke-dasharray: 631.14px; 
    stroke-dashoffset: 0;
    r: ${(props) => props.radius};
    cx: ${(props) => props.cx};
    cy: ${(props) => props.cy};
`;

const ProgressCircle = styled.circle(
    (props) => ({
        r: props.radius,
        cx: props.cx,
        cy: props.cy,
        stroke: "#eb2626",
        strokeWidth: 30,
        strokeLinecap: "butt",
        strokeDashoffset: props.strokeDashoffset,
        fill: "transparent",
        strokeDasharray: "631"
    })
);


export const PomodoroTimer: FC<PomodoroTimerProps> = ({ workTime, pomodoroType }) => {
    const pomodoroState = useAppSelector(selectPomodoroData);
    console.log('pomodoros >> ', pomodoroState);
    

    const dispatcher = useAppDispatch();

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
        setStartAt((prev) => {
            const startDate = Date.now();
            dispatcher(startTimer({
                pomodoroType,
                startAt: startDate,
                isRunning: true,
            }));

            return startDate;
        });
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
                    <BgCircle cx="110.5" cy="110.5" radius="100.5" />
                    {/* <circle r="100.5" cx="110.5" cy="110.5" ></circle> */}
                    <ProgressCircle cx="110.5" cy="110.5" radius="100.5" strokeDashoffset={calculateStrokeLength()} />
                    {/* <circle r="100.5" cx="110.5" cy="110.5" stroke="#eb2626" stroke-width="30" stroke-linecap="butt" stroke-dashoffset={calculateStrokeLength()} fill="transparent" stroke-dasharray="631"></circle> */}
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