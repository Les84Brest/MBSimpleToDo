import { useAppDispatch } from "../../hooks/redux";
import { toggleCompleted, deleteTodo, clearAllCompletedTodosInTask } from "../../store/taskToDoSlice/taskToDoSlice";

export default function useTask(taskId: number) {
    const dispatcher = useAppDispatch();

    return {
        completeToDo(todoId: number, todoStatus: boolean) {
            dispatcher(toggleCompleted({todoId, todoStatus, taskId}));
        },

        deleteTodo(todoId: number) {
            console.log('%cdelete', 'padding: 5px; background: #3dd; color: #333333;');
            dispatcher(deleteTodo({todoId, taskId: taskId}))
        },

        clearCompleted(){
            dispatcher(clearAllCompletedTodosInTask(taskId))
        }
    };
}