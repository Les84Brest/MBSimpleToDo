import cn from "classnames";

import s from './TodoApp.module.scss';

const ToDoApp = () => {
    const classes = cn(s.todo__wrap, { some: true, other: true })

    return (
        <div className={classes}>
            SomeTodos
        </div>
    );
}
export default ToDoApp;