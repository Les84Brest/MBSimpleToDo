import { FC, lazy, Suspense } from 'react';
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Container } from '@mui/material';
import BottomNavigator from '../components/BottomNavigator/BottomNavigator';

export const MainLayout: FC = () => {
    return (
        <>
            <Header />
            <Container>
                <Suspense fallback={<div>Loading... </div>}>
                    <Outlet />
                </Suspense>                
            </Container>
            <BottomNavigator />
        </>
    );
}

export default MainLayout
