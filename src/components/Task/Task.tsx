import React, { FC, useCallback, useState, useEffect } from "react";
import { ITask, ToDo } from "../../types/types";
import TaskFilter, { Filter } from './TaskFilter';
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
} from "@mui/material";
import ToDoItem from "../Todo/TodoItem";
import useTask from "./useTask";

const TaskButton = styled(Button)<ButtonProps>(({ theme }) => ({
    margin: 0,
    color: theme.palette.grey[900],
    fontSize: 10,
}))


const Task: FC<ITask> = ({ id, taskName, todos }) => {
    const [filter, setFilter] = useState<Filter>(Filter.ALL_TODOS);
    const [filteredTodos, setFilteredTodos] = useState<Array<ToDo>>(todos);
    const { completeToDo, deleteTodo, clearCompleted } = useTask(id);

    useEffect(() => {
        switch (filter) {
            case Filter.ACTIVE_TODOS:
                const activeTodos = todos.filter(todo => !todo.completed)
                setFilteredTodos(activeTodos);
                break;
            case Filter.COMPLETED_TODOS:
                const completedTodos = todos.filter((todo) => todo.completed)
                setFilteredTodos(completedTodos);
                break;
            default:
                setFilteredTodos(sortTodos(todos));
                break;
        }

    }, [filter, todos])

    const sortTodos = (todos: ToDo[]): ToDo[] => {

        const sortedTodos = todos.slice()
            .sort((todo, nextTodo) => {
                if (todo.completed === nextTodo.completed) {
                    return 0
                }
                if (todo.completed) {
                    return 1;
                }
                return -1;
            })

        return sortedTodos;
    }

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
        setFilter(value as Filter);
    }

    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={3}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{
                            fontSize: 16,
                            fontStyle: 'italic',
                            fontWeight: 100
                        }} color="text.secondary" gutterBottom>
                            {taskName}
                        </Typography>
                        <Divider />
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            {filteredTodos.map(todo => <ToDoItem
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