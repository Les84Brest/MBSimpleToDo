import {useState} from 'react';
import {Box, Typography} from "@mui/material";
import TasksList from "../components/TasksList";
import Search from "../components/Search";


export function Todos() {

    const [search, setSearch] = useState<string>('');
    const handleSearch = () => {
    }

    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
                my: 1.25
            }}>
                <Typography
                    align="left"
                    variant="h2"
                    sx={{color: 'text.secondary', mr: '20px'}}
                >
                    todos
                </Typography>
                <Search
                    value={search}
                    onChange={handleSearch}
                />
            </Box>
            <TasksList/>

        </>
    );

}

export default Todos