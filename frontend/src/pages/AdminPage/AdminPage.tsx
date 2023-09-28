import {Typography, TextField, Box, Button} from '@mui/material'
import { useState, useEffect } from 'react'
import qs from 'qs'
import { AdminPageContent } from '../../components/AdminPageContent'

interface Login {
    email: string,
    password: string,
}

export const AdminPage = () => {
    const [isLoginned, setIsLoginned] = useState(false)
    const [error, setError] = useState(true)
    const [formState, setFormState] = useState<Login>({
        email: "",
        password: "",
        
      });

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({
        ...formState,
        [event.target.name]: event.target.value,
        });
        console.log('Input!')
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const encodedData = qs.stringify(formState);
        
        console.log(formState)
        fetch(`http://localhost:8000/admin/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: encodedData})
            .then(response => {
                console.log(response)
                if(response.ok) {
                    setError(false)
                    setIsLoginned(true)
                } else {
                    setError(false)
                }
                return response.json()
            })
            .catch(error => console.error('Error:', error));
        // setShowMainInfo(false)
    };
    return (
    <Box>
        {isLoginned ?
          <AdminPageContent/> 
          :
          <Box sx={{
            width: 500,
            padding: 3,
            margin: '0 auto'
          }}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                onChange={handleFormChange}
                sx={{marginBottom: 3}}
              />
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                onChange={handleFormChange}
                sx={{marginBottom: 3}}
              />
              <Button color="primary" variant="contained" fullWidth type="submit">
                Submit
              </Button>
              {error ?
                <Typography sx={{fontSize: 16, fontWeight: 500, marginTop: 2, color: '#EF5151'}}>
                  Неправильний логін чи пароль
                </Typography> :
                null
              }
            </form>
          </Box>
        }
      </Box>
    )
}