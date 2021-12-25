import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function ControlledOpenSelect() {
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return ( 
      <FormControl focused className={'sectionn'}  sx={{ m: 0, minWidth: 240 }}>
        <InputLabel id="demo-controlled-open-select-label">Sort by : </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="Sort by : "
          onChange={handleChange}
        
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Most Upvotes'}>Most Upvotes</MenuItem>
          <MenuItem value={'Least Upvotes'}>Least Upvotes</MenuItem>
          <MenuItem value={ 'Most Comments'}> Most Comments</MenuItem>
          <MenuItem value={'Least Comments' }>Least Comments </MenuItem> 
        </Select>
      </FormControl> 
  );
}