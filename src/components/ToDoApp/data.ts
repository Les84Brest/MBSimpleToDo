import { ITask } from "../../types/types"

export const data: ITask[] = [{
    id: 12,
    taskName: 'Основная функциональность TODO. Какое-то большое заглавие',
    todos: [
        {

            "id": 1,
            "title": "Разработать компоненты",
            "completed": false
        },
        {

            "id": 2,
            "title": "Подключить и настроить redux",
            "completed": true
        },
        {

            "id": 3,
            "title": "Написать тесты к основной функциональности",
            "completed": false
        },
        {

            "id": 4,
            "title": "Стайлинг листа",
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
    taskName: 'Pomodoro',
    todos: [
        {

            "id": 1,
            "title": "Подключить React Router",
            "completed": false
        },
        {

            "id": 2,
            "title": "Создать компоненты таймера",
            "completed": false
        },
        {

            "id": 3,
            "title": "Создать Redux slice для таймера",
            "completed": false
        },
        {

            "id": 4,
            "title": "Создать роут для таймера",
            "completed": false
        },
        {

            "id": 5,
            "title": "Перевести интерфейс на Layout подход",
            "completed": false
        },
    ]
},

]


export default data