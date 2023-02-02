import { data } from '../exports/data';
import WebIcon from '@mui/icons-material/Web';
import GitHubIcon from '@mui/icons-material/GitHub';
import EngineeringIcon from '@mui/icons-material/Engineering';

export const Portfolio = () => {

    return (
        <div className="portfolio" id="portfolio">
            <h2>Portfolio</h2>

            <div className='cards'>
                {data.map(item => 
                    <div className='card' key={item.name}>
                        <img src={item.img} alt='ok'/>

                        <div className='card__content'>
                            
                            <div className='content-text'>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <div className='develop'>
                                    <span><EngineeringIcon />Proximamente</span>
                                </div>
                            </div>

                            <div className='content-links'>
                                <a href={item.page} target='_blank' rel='noopener noreferrer'><WebIcon />Web</a>
                                <a href={item.repository} target='_blank' rel='noopener noreferrer'><GitHubIcon />Repositorio</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>


        </div>
    );
}