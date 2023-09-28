import { Box, TextField, Typography, Button } from '@mui/material'
import { useState, useEffect } from 'react'
import qs from 'qs';

interface Question {
    email: string;
    name: string;
    message: string
}

export const Questions = () => {
    const [res, setRes] = useState<null|string>(null)
    const [formState, setFormState] = useState<Question>({
        email: "",
        name: "",
        message: "",
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

        const { name, email, message} = formState;

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        const encodedData = qs.stringify(formState);
        
        console.log(formState)
        fetch(`http://localhost:8000/comment/add`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: encodedData})
            .then(response => {
                console.log(response)
                if(response.ok) {
                    setRes('Ваше повідомлення було надіслане')
                } else {
                    setRes('Помилка сервера')
                }
                return response.json()
            })
            .catch(error => console.error('Error:', error));
        // setShowMainInfo(false)
    };

    return (
        <Box display='flex' flexDirection={'row'}>
        <Typography maxWidth={'400px'}>У Вас залишилися запитання? Зв'яжіться з нами! Обіцяємо наша відповідь не забариться</Typography>
        <form onSubmit={handleSubmit}>
            <Box display='flex' flexDirection={'column'}>
                <TextField id="outlined-basic" label="Email" name='email' variant="outlined" sx={{width:'30vw', marginBottom: '30px'}} onChange={handleFormChange} required/>
                <TextField id="outlined-basic" label="ПІП" name='name' variant="outlined" sx={{width:'30vw', marginBottom: '30px'}} onChange={handleFormChange} required/>
                <TextField id="outlined-basic" label="Ваше питання або повідомлення" name='message' variant="outlined" sx={{width:'30vw',  marginBottom: '30px'}} onChange={handleFormChange} required multiline/>
                {res ? <Typography>{res}</Typography> : <></>}
                <Button type='submit' sx={{marginBottom:'70px'}}>Надіслати</Button>
            </Box>
        </form>
        
        </Box>
    )
}