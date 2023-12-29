import {Navigate} from 'react-router-dom';
import Todos from "./pages/Todos";
import MainLayout from "./layouts/MainLayout";
import Pomodoro from "./pages/Pomodoro";
import PageNotFound from "./components/PageNotFound";


const mainRoutes = {
    path: '/',
    element: <MainLayout/>,
    children: [
        {path: '*', element: <Navigate to='/404'/>},
        {path: '/', element: <Todos/>},
        {path: '404', element: <PageNotFound/>},
        {path: 'account', element: <Navigate to='/account/list'/>},
    ],
};


const pomodoroRoutes = {
    path: 'pomodoro',
    element: <MainLayout/>,
    children: [
        {path: '*', element: <Navigate to='/404'/>},
        {path: '', element: <Pomodoro/>}

    ]
}

export const routes = [mainRoutes, pomodoroRoutes];