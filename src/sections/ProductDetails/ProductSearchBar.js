import { Autocomplete, Box, InputAdornment, TextField } from '@mui/material';
import { GridSearchIcon } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

export default function ProductSearchBar({ filterName, onFilterName }) {
  const { products } = useSelector(state => state.product);

  console.log();

  return (
    <Box>
      <Autocomplete
        freeSolo
        id='free-solo-2-demo'
        disableClearable
        options={products.map(option => option.name)}
        value={filterName}
        onChange={(event, newValue) => onFilterName(newValue)}
        renderInput={params => (
          <TextField
            {...params}
            placeholder='Search product...'
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position='start'>
                  <GridSearchIcon
                    sx={{ color: 'text.disabled', width: 20, height: 20 }}
                  />
                </InputAdornment>
              ),
              type: 'search',
            }}
          />
        )}
      />
    </Box>
  );
}
