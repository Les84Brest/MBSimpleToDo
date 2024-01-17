import { FC } from "react";

interface PomodoroTasksProps {
    tasks: string[];
}

export const PomodoroTasks: FC<PomodoroTasksProps> = ({ tasks }) => {

    return (
        <ul>
            {tasks.map((task, index) => <li key={index}>{task}</li>)}
        </ul>
    )
}
export default PomodoroTasks;