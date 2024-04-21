import { Button, Container, Typography, Box } from '@mui/material';
import React, { useState, useEffect, FC } from 'react';

import Pomodoro from '../components/Pomodoro';

export const PomodoroPage: FC = () => {

    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

                <Typography variant='h2' sx={{ textAlign: 'center' }}>Pomodoro timer</Typography>
                <Pomodoro />
            </Box>
        </Container>
    );
}


export default PomodoroPage;