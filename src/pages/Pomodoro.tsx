import React, {useState, useEffect} from 'react';

interface TimerProps {
    minutes: number;
}

const Timer: React.FC<TimerProps> = ({minutes}) => {
    const [seconds, setSeconds] = useState(minutes * 60);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return <div>{Math.floor(seconds / 60)}:{seconds % 60}</div>;
};

interface TaskListProps {
    tasks: string[];
}

const TaskList: React.FC<TaskListProps> = ({tasks}) => (
    <ul>
        {tasks.map((task, index) => <li key={index}>{task}</li>)}
    </ul>
);

const PomodoroTimer: React.FC = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [isBreak, setIsBreak] = useState(false);
    const [tasks, setTasks] = useState<string[]>([]);

    const toggleTimer = () => {
        setIsRunning(!isRunning);
        if (!isRunning) {
            setTimeout(() => {
                setIsBreak(!isBreak);
            }, isBreak ? 5 * 60 * 1000 : 25 * 60 * 1000);
        }
    };

    const addTask = (task: string) => {
        setTasks([...tasks, task]);
    };

    return (
        <div>
            <button onClick={toggleTimer}>{isRunning ? 'Stop' : 'Start'}</button>
            {isRunning && <Timer minutes={isBreak ? 5 : 25}/>}
            <TaskList tasks={tasks}/>
            {/* Add task input and button here */}
        </div>
    );

};

export default PomodoroTimer;