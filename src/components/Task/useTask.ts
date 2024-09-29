import { useAppDispatch } from "../../hooks/redux";
import { toggleCompleted, deleteTodo, clearAllCompletedTodosInTask } from "../../store/taskToDoSlice/taskToDoSlice";

export default function useTask(taskId: string) {
    const dispatcher = useAppDispatch();

    return {
        completeToDo(todoId: string, todoStatus: boolean) {
            dispatcher(toggleCompleted({todoId, todoStatus, taskId}));
        },

        deleteTodo(todoId: string) {
            dispatcher(deleteTodo({todoId, taskId: taskId}))
        },

        clearCompleted(){
            dispatcher(clearAllCompletedTodosInTask(taskId))
        }
    };
}