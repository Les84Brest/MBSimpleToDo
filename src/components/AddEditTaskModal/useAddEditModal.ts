import { useAppDispatch } from "../../hooks/redux";
import { openModal, closeModal } from "../../store/modalSlice/modalSlice";
import { EDIT_TASK_MODAL } from "./AddEditTaskModal";

export default function useAddEditModaleTask() {
    const dispatcher = useAppDispatch();

    return {
        openEditTaskModal() {
            dispatcher(openModal({ modalId: EDIT_TASK_MODAL }));
        },

        closeEditTaskModal() {
            dispatcher(closeModal({ modalId: EDIT_TASK_MODAL }));
        },
    };
}
