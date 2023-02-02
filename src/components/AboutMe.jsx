import me from '../assets/img/me.jpeg';
import Typewriter from 'react-typewriter-animate';
import "react-typewriter-animate/dist/Typewriter.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const AboutMe = () => {
    return (
        <div className="aboutme" id='aboutme'>
            <div className='aboutme__img'>
                <img src={me} alt="me" />
            </div>

            <div className='aboutme__content'>

                <div className='start__writer'>
                    <h2>Hola, soy</h2>
                    <Typewriter
                        dataToRotate={[
                        [{ type: "word", text: "Agustin Alonso Cantoli" }],
                        [{ type: "word", text: "Front-End Developer" }]]}
                        cursor={{char: '_'}}
                        maxTypeSpeed= {400}
                        contentClass='tw__content'
                        cursorClass='tw__cursor'
                    />
                </div>

                <div>
                    <span className='signos'>&lt;&gt;</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi perferendis nulla distinctio mollitia sequi repudiandae quidem aliquam sapiente similique explicabo accusantium perspiciatis optio totam blanditiis obcaecati ad recusandae, deleniti labore?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aliquam quidem assumenda ipsam, corporis mollitia, labore exercitationem, cupiditate culpa enim placeat sed optio expedita perferendis odio! Laborum doloremque sapiente illum.</p>
                    <span className='signos'>&lt;/&gt;</span>
                </div>
                
                <div className='aboutme__enlaces'>
                    <a className='descarga' href="https://drive.google.com/file/d/1DjgYXmvjbxNti3VYOCbvLeynSYihZbfv/view?usp=sharing" target='_blank' rel='noopener noreferrer'>
                        DESCARGAR CURRICULUM
                    </a>
                    
                    <a className='icons' 

                    href='http://github.com/agustinalonsocantoli' target='_blank' rel='noopener noreferrer'>
                        <GitHubIcon sx={{fontSize: 50}}/>
                    </a>
                    
                    <a className='icons' href='http://www.linkedin.com/in/agustin-alonso-cantoli-5a54a0182/' target='_blank' rel='noopener noreferrer'>
                        <LinkedInIcon sx={{fontSize: 50}}/>
                    </a>

                </div>
            </div>
        </div>
    );
}