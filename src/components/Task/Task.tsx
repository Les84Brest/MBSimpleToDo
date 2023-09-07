import React, { FC } from "react";
import { ITask } from "../../types/types";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Grid, List,
    Paper,
    Typography,
    ButtonGroup,
} from "@mui/material";
import ToDoItem from "../Todo/TodoItem";

const Task: FC<ITask> = ({ id, taskName, todos }) => {

    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={3}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {taskName}
                        </Typography>
                        <List sx={{ width: '100%', maxWidth: 275, bgcolor: 'background.paper' }}>
                            {todos.map(todo => <ToDoItem {...todo} key={todo.id} />)}
                        </List>
                    </CardContent>
                    <CardActions>
                        <Typography sx={{ fontSize: 10 }} color="text.secondary">
                            2 items left
                        </Typography>
                        <ButtonGroup variant="outlined" aria-label="filter button group">
                            <Button>All</Button>
                            <Button>Active</Button>
                            <Button>Completed</Button>
                        </ButtonGroup>
                        <Button>Clear completed</Button>
                    </CardActions>
                </Card>
            </Paper>
        </Grid>
    );
}
export default Task;