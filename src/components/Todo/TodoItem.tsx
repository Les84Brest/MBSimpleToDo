import React, { FC } from "react";
import { ToDo } from "../../types/types";
import { ListItem, IconButton, Avatar, ListItemText, Divider } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import { CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";

const ToDoItem: FC<ToDo> = ({ id, title, completed }) => {

    return (
        <>
            <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                }
            >
                <IconButton edge="end" aria-label="complete">
                    <Avatar>
                        {completed ? <CheckCircle /> : <RadioButtonUnchecked />}
                    </Avatar>
                </IconButton >
                <ListItemText
                    primary={title}
                />
            </ListItem>
            <Divider />
        </>
    );
}
export default ToDoItem;