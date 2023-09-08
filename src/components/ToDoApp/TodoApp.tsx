import { useState } from 'react';
import { Container, Box, Typography } from "@mui/material";
import Header from "../Header";
import Search from '../Search';
import TasksList from "../TasksList";


function ToDoApp() {

    const [search, setSearch] = useState<string>('');

    const handleSearch = () => { }

    return (
        <>
            <Header />
            <Container>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    my: 1.25
                }}>
                    <Typography
                        align="left"
                        variant="h2"
                        sx={{ color: 'text.secondary', mr: '20px' }}
                    >
                        todos
                    </Typography>
                    <Search
                        value={search}
                        onChange={handleSearch}
                    />
                </Box>
                <TasksList />
            </Container>
        </>
    );

}

export default ToDoApp