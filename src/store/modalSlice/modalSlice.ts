import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IModalPayload {
    modalId: string;
}

interface IModalState {
    addEditTaskModal: IAddEditTaskState;
}

interface IAddEditTaskState {
    isOpen: boolean;
    groupId: number | null;
}

const initialState: IModalState = {
    addEditTaskModal: { isOpen: false, groupId: null },
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal(state, action: PayloadAction<IModalPayload>) {
            const { modalId } = action.payload;

            state[modalId as keyof IModalState].isOpen = true;
        },

        closeModal(state, action: PayloadAction<IModalPayload>) {
            const { modalId } = action.payload;

            state[modalId as keyof IModalState].isOpen = false;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
