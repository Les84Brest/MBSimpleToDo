import React, { FC, useCallback } from "react";
import { ITask } from "../../types/types";
import {
    Button,
    Box,
    Card,
    CardActions,
    CardContent,
    Grid, List,
    Paper,
    Typography,
    ButtonGroup,
} from "@mui/material";
import ToDoItem from "../Todo/TodoItem";
import useTask from "./useTask";

const Task: FC<ITask> = ({ id, taskName, todos }) => {

    const { completeToDo } = useTask(id);

    const cbDeleteTodo = useCallback<(id: number) => void>((id) => {
        console.log('%cdelete id', 'padding: 5px; background: #3dd; color: #333333;', id);
    }, [])

    const cbCompleteTodo = useCallback<(id: number, todoStatus: boolean) => void>((id, todoStatus) => {
        completeToDo(id, todoStatus);
    }, [completeToDo])

    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={3}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {taskName}
                        </Typography>
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            {todos.map(todo => <ToDoItem
                                todo={todo}
                                onClickComplete={cbCompleteTodo}
                                onClickDelete={cbDeleteTodo}
                                key={todo.id} />)}
                        </List>
                    </CardContent>
                    <CardActions>
                        <Box>
                            <Typography sx={{ fontSize: 10 }} color="text.secondary">
                                2 items left
                            </Typography>
                            <ButtonGroup variant="outlined" aria-label="filter button group">
                                <Button>All</Button>
                                <Button>Active</Button>
                                <Button>Completed</Button>
                            </ButtonGroup>
                            <Button>Clear completed</Button>
                        </Box>
                    </CardActions>
                </Card>
            </Paper>
        </Grid>
    );
}
export default Task;