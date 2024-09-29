export type ToDo = {
    id: string;
    title: string;
    completed: boolean;
}

export interface ITask {
    id: string;
    taskName: string;
    todos: ToDo[];
}

export type ValueOf<T> = T[keyof T];

