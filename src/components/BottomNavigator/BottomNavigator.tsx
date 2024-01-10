import React, {FC, useState} from 'react'
import {Paper, BottomNavigationAction, BottomNavigation} from "@mui/material";
import PomodoroIcon from "../icons/PomodoroIcon";
import TodoListIcon from "../icons/TodoListIcon";
import {useNavigate} from "react-router-dom";
import {routes} from "../../routes";


export const BottomNavigator: FC = () => {
    const mainRoutes: { [p: number]: string } = routes.reduce(
        (acc, cur, currentIndex) => {
            return {...acc, [currentIndex]: cur.path}
        }, {});
    const navigate = useNavigate();

    const [currentTabNumber, setCurrentTabNumber] = useState<number>();
    const handleNavigationChange = (event: React.SyntheticEvent, newValue: number): void => {
        setCurrentTabNumber(newValue);
        navigate(mainRoutes[newValue]);
    }

    return (
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
            <BottomNavigation
                showLabels
                value={currentTabNumber}
                onChange={handleNavigationChange}
            >
                <BottomNavigationAction label="Todos" icon={<TodoListIcon/>}/>
                <BottomNavigationAction label="Pomodoro" icon={<PomodoroIcon/>}/>
            </BottomNavigation>
        </Paper>
    )
}

export default BottomNavigator