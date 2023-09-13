import { ChangeEvent, useState } from 'react'
import { RadioGroup, FormControlLabel, FormControlLabelProps, Radio } from "@mui/material";
import { FC } from "react";
import { styled } from '@mui/material/styles';
import cn from 'classnames';
import './TaskFilter.scss';

interface TaskFilterProps {
    onChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
}

const TodoFilterLabel = styled(FormControlLabel)<FormControlLabelProps>(({ theme }) => ({
    margin: 0,
    padding: '5px 6px',
    borderColor: `${theme.palette.grey[400]}`,
    marginRight: 5,
    '&:last-child': {
        margin: 0
    },
    '& .MuiTypography-root': {
        fontSize: '10px',
        textTransform: 'uppercase',
    },
    '&. filter-active': {
        border: '1px solid #333',
        borderRadius: 4,
        background: 'hotpink'
    },

}))

export enum Filter {
    ALL_TODOS = 'all',
    COMPLETED_TODOS = 'completed',
    ACTIVE_TODOS = 'active'
}

const TaskFilter: FC<TaskFilterProps> = ({ onChange }) => {

    const [currentFilter, setCurrentFilter] = useState<Filter>(Filter.ALL_TODOS);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>, value: string) => {
        setCurrentFilter(value as Filter);
        onChange(event, value);
    }

    return (
        <RadioGroup
            aria-labelledby="todos-filter"
            row
            name="filter-buttons-group"
            onChange={handleOnChange}
            sx={{ justifyContent: 'center' }}
        >
            <div className={cn('task-filter__item-wrap', { 'filter-active': Filter.ALL_TODOS === currentFilter })}>
                <TodoFilterLabel
                    value={Filter.ALL_TODOS}
                    control={<Radio sx={{ display: 'none' }} />} label="All" />
            </div>
            <div className={cn('task-filter__item-wrap', { 'filter-active': Filter.ACTIVE_TODOS === currentFilter })}>
                <TodoFilterLabel
                    value={Filter.ACTIVE_TODOS}
                    control={<Radio sx={{ display: 'none' }} />} label="Active" />
            </div>
            <div className={cn('task-filter__item-wrap', { 'filter-active': Filter.COMPLETED_TODOS === currentFilter })}>
                <TodoFilterLabel
                    value={Filter.COMPLETED_TODOS}
                    control={<Radio sx={{ display: 'none' }} />} label="Completed" />
            </div>
        </RadioGroup>
    );
}
export default TaskFilter;