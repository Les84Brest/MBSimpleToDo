import React, { FC } from "react";
import { ToDo } from "../../types/types";
import { ListItem, IconButton, ListItemText } from "@mui/material";
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
                divider

                sx={{ px: 0 }}
            >
                <IconButton
                    sx={{ mr: 0 }}
                    edge="end"
                    aria-label="complete"
                    size='large'
                    onClick={handleComplete}>
                    {completed ? <CheckCircle /> : <RadioButtonUnchecked />}
                </IconButton >
                <ListItemText
                    sx={{
                        textDecoration: completed ? 'line-through' : 'none',
                    }}
                    primary={title}
                    primaryTypographyProps={{
                        sx: {
                            fontSize: 13,
                            fontWeight: 100
                        }
                    }}
                />
                <IconButton sx={{ mr: 0 }} edge="end" aria-label="edit" onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>

               
            </ListItem>
        </>
    );
}
export default ToDoItem;