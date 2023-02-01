import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Contact = () => {
    return (
        <div className="contact">
            <h2>Contacta conmigo</h2>

            <div className="contact__content">
                <form className='form'>
                    <label>Nombre</label>
                    <input type="text"/>
                    <label>Email</label>
                    <input type="email"/>
                    <label>Escriba su mensaje</label>
                    <textarea></textarea>
                    <Button variant="contained" color='success' endIcon={<SendIcon />}>
                        Enviar
                    </Button>
                </form>


                <div className='contact__icons'>
                    <a href='www.google.com'><GitHubIcon sx={{fontSize: 70}} /></a>
                    <a href='www.google.com'><LinkedInIcon sx={{fontSize: 70}} /></a>
                    <a href='www.google.com'><InstagramIcon sx={{fontSize: 70}} /></a>
                    <a href='www.google.com'><EmailIcon sx={{fontSize: 70}} /></a>
                    <span>agustinalonsocantoli@gmail.com</span>
                </div>
            </div>
        </div>
    );
}