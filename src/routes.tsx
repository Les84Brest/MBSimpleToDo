import {Navigate} from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import {ReactNode, lazy} from "react";

const PageNotFound = lazy( () => import('./components/PageNotFound/PageNotFound'));
const Todos = lazy(() =>import( "./pages/Todos"));
const Pomodoro = lazy(() =>import( "./pages/Pomodoro"));

export type ChildRoute = {
    path: string,
    element: ReactNode
}

export type GeneralRoute = {
    path: string,
    element: ReactNode
    children: Array<ChildRoute>
}

const mainRoutes: GeneralRoute = {
    path: '/',
    element: <MainLayout/>,
    children: [
        {path: '*', element: <Navigate to='/404'/>},
        {path: '/', element: <Todos/>},
        {path: '404', element: <PageNotFound/>},
        {path: 'account', element: <Navigate to='/account/list'/>},
    ],
};


const pomodoroRoutes: GeneralRoute = {
    path: 'pomodoro',
    element: <MainLayout/>,
    children: [
        {path: '*', element: <Navigate to='/404'/>},
        {path: '', element: <Pomodoro/>}

    ]
}

export const routes: Array<GeneralRoute> = [mainRoutes, pomodoroRoutes];