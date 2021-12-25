import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';  
import GoogleIcon from '@mui/icons-material/Google';

export default function LoadingButtonsTransition() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <Box sx={{ '& > button': { m: 1 } }}>
      <FormControlLabel
        sx={{
          display: 'block',
        }}
        control={
          <Switch
            checked={loading}
            onChange={() => setLoading(!loading)}
            name="loading"
            color="primary"
          />
        }
        label="Loading"
      /> 
      <LoadingButton
        onClick={handleClick}
        endIcon={<GoogleIcon />}
        loading={loading}
        loadingPosition="end"
        variant="contained"
      >
        SIGN IN WITH GOOGLE
      </LoadingButton>
       
    </Box>
  );
}