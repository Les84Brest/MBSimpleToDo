import { FC } from 'react'
import { TextField } from "@mui/material";

interface SearchProps {
    onChange: () => void,
    value: string
}

const Search: FC<SearchProps> = (props) => {
    const { onChange, value } = props;

    return <TextField
        label='search'
        variant="standard"
        fullWidth
        type='search'
        value={value}
        onChange={onChange}
        sx={{
            mb: "1.5rem"
        }}
    />;
};

export default Search;