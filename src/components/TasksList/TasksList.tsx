
import { Grid } from '@mui/material';
import { FC } from 'react';
import Task from '../Task';
import { useAppSelector } from '../../hooks/redux';
import { selectTaskData } from '../../store/taskToDoSlice/selectors';


const TasksList: FC = () => {

    const {tasks} = useAppSelector(selectTaskData);

    return (
        <Grid container spacing={2}>
            {tasks.map(task => <Task {...task}  key={task.id}/>)}
        </Grid>
    );
}

export default TasksList;
