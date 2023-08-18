import React from 'react'
import {Box,  Button, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import axios from 'axios'


function ApiCall() {

    const [apidata, setApidata] = useState()
    const [error, setError] = useState()

    const url = 'https://api.publicapis.org/entries'

    const fetchapiData = () => {
        axios.get(url)
            .then((response) => {
                console.log('api response-', response.data)
                setApidata(response.data)
            })
            .catch((error) => {
                console.error('Error -', error);
                setError(error)
            });
    }

    useEffect(() => {
        fetchapiData();
      }, [url]);

  
  return (
    <Box m = {10}>

        <Button variant="contained" 
        onClick={fetchapiData}
        >
            Call API
        </Button>
        
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
  )
}

export default ApiCall