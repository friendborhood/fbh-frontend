import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Box, FormControl } from '@mui/material';
import { useState } from 'react';

function DropDown({ options }) {
  const [startValue] = options;
  const [value, setValue] = useState(startValue);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const menuItems = options.map((option) => <MenuItem value={option}>{option}</MenuItem>);
  return (

    <Box sx={{ minWidth: 120 }}>
      <FormControl>
        <Select
          value={value}
          onChange={handleChange}
        >

          {menuItems}

        </Select>
      </FormControl>

    </Box>
  );
}
export default DropDown;
