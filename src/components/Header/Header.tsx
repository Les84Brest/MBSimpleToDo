import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ListOutlined, PlaylistAddOutlined } from '@mui/icons-material';

const Header = () => {

    const handleAddTask = () => { }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <ListOutlined sx={{ mr: 1.25 }} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Todo lists and tasks
                    </Typography>
                    <IconButton
                        color="inherit"
                        onClick={handleAddTask}
                        title='Add new task with todos'
                    >
                        <PlaylistAddOutlined />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
