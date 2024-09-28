import { FC, ChangeEvent } from "react";
import Dialog from '@mui/material/Dialog';
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { selectModalData } from "../../store/selectors";
import {
    Box,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Button,
    IconButton,
    Typography, Stack
} from "@mui/material";
import ususeAddEditModaleTask from "./useAddEditModal";
import { closeModal } from "../../store/modalSlice/modalSlice";
import useTaskManager from "./useTaskManager";
import { Close } from "@mui/icons-material";

export const EDIT_TASK_MODAL = "addEditTaskModal";

export const enum OperationMode {
    ADD_NEW = 'addNew',
    EDIT_TASK = 'editTask'
};

export const AddEditTaskModal: FC = () => {

    const modalData = useAppSelector(selectModalData);
    const dispatch = useAppDispatch();

    const addEditTask = modalData[EDIT_TASK_MODAL];
    const { isOpen } = addEditTask;

    const { taskName, setTaskName } = useTaskManager();

    const handleCloseModal = () => {
        dispatch(closeModal({ modalId: EDIT_TASK_MODAL }));
    }

    const handleSave = () => {
        dispatch(closeModal({ modalId: EDIT_TASK_MODAL }));
    }

    const handleSetTaskName = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskName(event.target.value)
    }

    return (

        <Dialog
            open={isOpen}
            onClose={handleCloseModal}
            maxWidth="md"
        >
            <DialogTitle>
                <Stack
                    direction="row"
                    sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <Typography gutterBottom variant="h5" component="h5">
                        Add task
                    </Typography>
                    <IconButton onClick={handleCloseModal} >
                        <Close />
                    </IconButton>
                </Stack>
            </DialogTitle>
            <DialogContent dividers>
                <TextField
                    label="Task name"
                    defaultValue=""
                    helperText="Enter general name for task group"
                    variant="standard"
                    onChange={handleSetTaskName}
                    value={taskName}
                />
                <Box>

                </Box>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleCloseModal}>
                    Cancel
                </Button>
                <Button onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>
    )
}
export default AddEditTaskModal;