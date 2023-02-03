import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Contact = () => {

    const resposive = window.innerWidth < 768 ? true : false;
    const form = useRef();
    const regex = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const [ name, setName ] = useState(true);
    const [ email, setEmail ] = useState(true);
    const [ message, setMessage ] = useState(true);
    const [ send, setSend ] = useState(true);
    const [ error, setError ] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isNaN(e.target.user_name.value) && e.target.user_name.value.length > 2) {
            if(e.target.user_email.value.match(regex)) {
                if(e.target.user_message.value.length > 0) {
                    emailjs.sendForm(process.env.REACT_APP_SERVICES_KEY, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
                    .then((response) => {
                        console.log(response);
                        setSend(true)
                        setName(false)
                        setEmail(false)
                        setMessage(false)
                    }, (error) => {
                        console.log(error);
                        setError(true)
                    });

                    e.target.reset()
 
                } else {
                    setName(false)
                    setEmail(false)
                    setMessage(true)
                }
            } else {
                setName(false)
                setEmail(true)
            }
        } else {
            setName(true)
        }
    }

    return (
        <div className="contact" id='contact'>
            <h2>Contacta conmigo</h2>

            <div className="contact__content">
            
                <div className='contact__icons'>
                        <a href='http://github.com/agustinalonsocantoli' target='_blank' rel='noopener noreferrer'>
                            <GitHubIcon sx={!resposive ? {fontSize: 60} : {fontSize: 40}} />
                        </a>
                        
                        <a href='http://www.linkedin.com/in/agustin-alonso-cantoli-5a54a0182/' target='_blank' rel='noopener noreferrer'>
                            <LinkedInIcon sx={!resposive ? {fontSize: 60} : {fontSize: 40}} />
                        </a>
                        
                        <a href='http://www.instagram.com/alonsoagus_/' target='_blank' rel='noopener noreferrer'>
                            <InstagramIcon sx={!resposive ? {fontSize: 60} : {fontSize: 40}} />
                            </a>
                        
                        <a href='mailto:agustinalonsocantoli@gmail.com'>
                            <EmailIcon sx={!resposive ? {fontSize: 60} : {fontSize: 40}} />
                        </a>
                        <span>agustinalonsocantoli@gmail.com</span>
                        <span>Agustin Alonso Cantoli &copy; 2023</span>
                </div>

                <form className='form' ref={form} onSubmit={handleSubmit}>
                    <label>Nombre</label>
                    <input type="text" name='user_name'/>
                    <label>Email</label>
                    <input type="email" name='user_email'/>
                    <label>Escriba su mensaje</label>
                    <textarea name='user_message'></textarea>
                    <Button variant="contained" color='success' endIcon={<SendIcon />} type='submit'>
                        Enviar
                    </Button>
                </form>
            </div>

            <Stack className='status-messages' spacing={2}>
                        {error && <Alert variant="filled" severity="error">
                            Status error, vuelva a intentar
                        </Alert>}
                        {name && <Alert variant="filled" severity="warning">
                            Debe ingresar un nombre correcto
                        </Alert>}
                        {email && <Alert variant="filled" severity="warning">
                            Debe ingresar un email correcto
                        </Alert>}
                        {message && <Alert variant="filled" severity="warning">
                            Debe escribir un mensaje
                        </Alert>}
                        {send && <Alert variant="filled" severity="success">
                            Su mensaje se envio con exito
                        </Alert>}
            </Stack>
        </div>
    );
}