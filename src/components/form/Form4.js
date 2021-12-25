import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue=""
          helperText="Can’t be empty"
          focused
        />
    </Box>
  );
}