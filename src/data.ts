import {ITask} from "./types/types";

export const data: ITask[] = [{
    id: 12,
    taskName: 'Первая главная задача',
    todos: [
        {

            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {

            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": true
        },
        {

            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
    ]
},
{
    id: 25,
    taskName: 'Вторая основная задача',
    todos: [
        {

            "id": 1,
            "title": "Незастуканными быть на месте",
            "completed": false
        },
        {

            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": true
        },
        {

            "id": 3,
            "title": "fugiat veniam minus",
            "completed": true
        },
    ]
},

{
    id: 138,
    taskName: 'Ещё задачка',
    todos: [
        {

            "id": 1,
            "title": "Незастуканными быть на месте",
            "completed": true
        },
        {

            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": true
        },
        {

            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
    ]
},

]


export default data