import React, { useState } from 'react';
import {Box,Typography } from '@mui/material'


function ApiCall() {
  const [apidata, setApiData] = useState(null);
  const [error, setError] = useState(null);

  const url = 'https://api.publicapis.org/entries'



  const fetchapiData = async () => {
    try {
      const response = await fetch(url);

      const data = await response.json();
      setApiData(data);
      setError(null);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Box m = {10}>


        <button onClick={fetchapiData}>
            CallAPI
        </button>
        
        {apidata && (
                <div>
                    <Typography variant="h6">API Results:</Typography>
                    <pre>{JSON.stringify(apidata, null, 2)}</pre>
                </div>
            )}

        {error && (
            <Typography variant="h6">API Results Failed: >
                <pre>{JSON.stringify(error, null, 2)}</pre>
            </Typography>
        )}



    </Box>
  );
}

export default ApiCall;
