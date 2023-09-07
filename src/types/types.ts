export type ToDo = {
    id: number;
    title: string;
    completed: boolean;
}

export interface ITask {
    id: number;
    taskName: string;
    todos: ToDo[];
}

