import Typewriter from 'react-typewriter-animate';
import "react-typewriter-animate/dist/Typewriter.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import me from '../assets/img/collage.jpg';

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
                        [{ type: "word", text: "Agustin Alonso Cantoli" }]]}
                        cursor={{char: '_'}}
                        maxTypeSpeed= {400}
                        contentClass='tw__content'
                        cursorClass='tw__cursor'
                    />
                </div>

                <div>
                    <span className='signos'>&lt;&gt;</span>
                    <p>
                        Soy <strong>desarrollador web Frontend</strong>, en este último tiempo me he dedicado a construir
                        proyectos en <strong>React con HTML, CSS, SASS y JavaScript</strong>. Aunque también he trabajo 
                        con Angular, Node.js y Python. Soy una persona muy organizada por lo que priorizo
                        un <strong>código limpio y ordenado</strong>.
                    </p>
                    <p>
                        Dedico mi día a día en mis proyectos y en seguir aprendiendo, considero que <strong>el conocimiento
                        y la práctica son muy importantes</strong> y doy el máximo para seguir creciendo y cumplir mis objetivos.
                    </p>
                    <p>
                        En mis tiempos libres me gusta mucho pasar tiempo con mis mascotas, viajar y conocer gente
                        nueva. Me apasiona hacer actividad física me ayuda a despejarme, me relaja y mantiene saludable. 
                        <strong> Me inspira trabajar en equipo</strong>, aprendo mucho de las personas e <strong>intento motivar y aportar
                        lo mejor de mí</strong>.
                    </p>
                    <p>
                        Soy de Argentina, pero actualmente resido en <strong>Valencia, España</strong>.
                    </p>
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