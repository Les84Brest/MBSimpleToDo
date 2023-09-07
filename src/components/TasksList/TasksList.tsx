
import { ITask } from '../../types/types';
import { Grid } from '@mui/material';
import { FC } from 'react';
import Task from '../Task';

interface TasksListProps {
    tasks: Array<ITask>;
}

const TasksList: FC<TasksListProps> = ({ tasks }) => {

    //TEST
    const [data] = tasks;
    //TEST

    return (
        <Grid container spacing={2}>
            <Task {...data} />
            <Task {...data} />
            <Task {...data} />
            <Task {...data} />
            <Task {...data} />
            <Task {...data} />
            <Task {...data} />
            <Task {...data} />
        </Grid>
    );
}

export default TasksList;
