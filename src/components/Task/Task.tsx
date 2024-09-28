import React, { FC, useCallback } from "react";
import { ITask } from "../../types/types";
import TaskFilter from './TaskFilter';
import { styled } from '@mui/material/styles';
import {
    Button,
    Box,
    Card,
    CardActions,
    CardContent,
    Grid, List,
    Paper,
    Typography,
    Divider,
    ButtonProps,
    IconButton
} from "@mui/material";
import ToDoItem from "../Todo/TodoItem";
import EditIcon from '@mui/icons-material/Edit';
import useTask from "./useTask";
import useAddEditModaleTask from "../AddEditTaskModal/useAddEditModal";

const TaskButton = styled(Button)<ButtonProps>(({ theme }) => ({
    margin: 0,
    color: theme.palette.grey[900],
    fontSize: 10,
}))


const Task: FC<ITask> = ({ id, taskName, todos }) => {

    const { completeToDo, deleteTodo, clearCompleted } = useTask(id);

    const { openEditTaskModal } = useAddEditModaleTask();

    const cbDeleteTodo = useCallback<(id: number) => void>((id) => {
        deleteTodo(id);
    }, [deleteTodo]);

    const cbCompleteTodo = useCallback<(id: number, todoStatus: boolean) => void>((id, todoStatus) => {
        completeToDo(id, todoStatus);
    }, [completeToDo]);

    const getUncompletedTodosCount = (): number => {
        if (!todos.length) {
            return 0;
        }

        return todos.filter(todo => todo.completed ? false : true).length;
    }

    const getCompletedTodosCount = (): number => {
        if (!todos.length) {
            return 0;
        }

        return todos.filter(todo => todo.completed ? true : false).length;
    }

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>,
        value: string) => {

    }
    const handleEditTask = () => {
        openEditTaskModal();
    }
    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={3}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Box component="div">
                            <Typography sx={{
                                fontSize: 16,
                                fontStyle: 'italic',
                                fontWeight: 100
                            }} color="text.secondary" gutterBottom>
                                {taskName}
                            </Typography>
                            <IconButton sx={{ mr: 0 }} edge="end" aria-label="edit" onClick={handleEditTask}>
                                <EditIcon />
                            </IconButton>
                        </Box>
                        <Divider />
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            {todos.map(todo => <ToDoItem
                                todo={todo}
                                onClickComplete={cbCompleteTodo}
                                onClickDelete={cbDeleteTodo}
                                key={todo.id} />)}
                        </List>
                    </CardContent>
                    <CardActions>
                        <Box component="div"
                            sx={{
                                width: '100%',
                                padding: '5px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignContent: 'center',
                            }}
                        >
                            <Typography
                                sx={{ fontSize: 10, alignSelf: 'center' }}
                                color="text.secondary"

                            >
                                {getUncompletedTodosCount()} items left
                            </Typography>
                            <TaskFilter onChange={handleFilterChange} />
                            <TaskButton onClick={clearCompleted} size='small' disabled={!(getCompletedTodosCount() > 0)}>Clear completed</TaskButton>
                        </Box>
                    </CardActions>
                </Card>
            </Paper>
        </Grid>
    );
}
export default Task;