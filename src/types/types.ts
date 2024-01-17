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

export type ValueOf<T> = T[keyof T];

