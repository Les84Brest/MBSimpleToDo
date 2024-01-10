import {FC} from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import {Container} from "@mui/material";

export const MainLayout: FC = () => {
    return (
        <>
            <Header/>
            <Container>
                <Outlet/>
            </Container>
        </>
    );
}

export default MainLayout
