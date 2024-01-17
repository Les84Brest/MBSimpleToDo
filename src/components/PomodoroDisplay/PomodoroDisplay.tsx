import { FC, useEffect, useState } from "react";
import CircularProgress, {
    CircularProgressProps,
} from '@mui/material/CircularProgress';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';


type PomodoroDisplayProps = CircularProgressProps & { value: number, formatedTime: string };

const PomodoroTime = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    fontSize: '1.8rem',
    fontWeight: 700,
    color: theme.palette.grey[700],
}));

export const PomodoroDisplay: FC<PomodoroDisplayProps> = (props) => {


    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress size={150} variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >

                <PomodoroTime>
                    {props.formatedTime}
                </PomodoroTime>
            </Box>
        </Box>
    );
}

export default PomodoroDisplay;