import { useAppDispatch } from "../../hooks/redux";
import { toggleCompleted } from "../../store/taskToDoSlice/taskToDoSlice";

export default function useTask(taskId: number) {
    const dispatcher = useAppDispatch();

    return {
        completeToDo(todoId: number, todoStatus: boolean) {
            dispatcher(toggleCompleted({todoId, todoStatus, taskId}));
        },

        deleteTodo() {

        }
    };
}