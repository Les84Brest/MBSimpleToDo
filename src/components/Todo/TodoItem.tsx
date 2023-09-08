import React, { FC } from "react";
import { ToDo } from "../../types/types";
import { ListItem, IconButton, Avatar, ListItemText, Divider } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";


interface ToDoItemProps {
    todo: ToDo;
    onClickDelete: (id: number) => void;
    onClickComplete: (id: number, todoStatus: boolean) => void;
}

const ToDoItem: FC<ToDoItemProps> = ({ todo, onClickDelete, onClickComplete }) => {
    const { id, title, completed } = todo;

    const handleDelete = () => {
        onClickDelete(id)
    }

    const handleComplete = () => {
        onClickComplete(id, !completed);
    }
    return (
        <>
            <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                }
                sx={{px:0, py:0}}
            >
                <IconButton edge="end" aria-label="complete" size='large' onClick={handleComplete}>
                    {completed ? <CheckCircle /> : <RadioButtonUnchecked />}
                </IconButton >
                <ListItemText
                    sx={{textDecoration: completed ? 'line-through' : 'none'} }
                    primary={title}
                />
            </ListItem>
            <Divider />
        </>
    );
}
export default ToDoItem;