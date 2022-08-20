import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Box, FormControl } from '@mui/material';
import { useEffect } from 'react';

function DropDown({ options, setState, state }) {
  const handleChange = (event) => {
    setState(event.target.value);
  };
  useEffect(() => setState(options[0]), []);
  const menuItems = options.map((option) => <MenuItem value={option}>{option}</MenuItem>);
  return (

    <Box sx={{ minWidth: 520 }}>
      <FormControl>
        <Select
          value={state}
          onChange={handleChange}
        >
          {menuItems}
        </Select>
      </FormControl>

    </Box>
  );
}
export default DropDown;
