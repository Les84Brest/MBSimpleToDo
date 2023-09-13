import { useState } from 'react';
import { Container, Box, Typography, Fab } from "@mui/material";
import Header from "../Header";
import Search from '../Search';
import TasksList from "../TasksList";
import  Add from '@mui/icons-material/Add';


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
                <Fab color="primary" aria-label="add">
                    <Add />
                </Fab>
            </Container>
        </>
    );

}

export default ToDoApp