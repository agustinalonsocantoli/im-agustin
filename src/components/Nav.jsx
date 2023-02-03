import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Nav = () => {

    const [ menu, setMenu ] = useState(true);
    const resposive = window.innerWidth < 992 ? true : false;


    if(!resposive) {
        return (
            <div className="nav">
                <div className="nav__content">
                    <ul>
                        <li>
                            <a href="#aboutme" data-text="&nbsp;SobreMi">&nbsp;SobreMi&nbsp;</a>
                        </li>
                        
                        <li>
                        <a href="#stack" data-text="&nbsp;Stack">&nbsp;Stack&nbsp;</a>
                        </li>
    
                        <li>
                        <a href="#portfolio" data-text="&nbsp;Portafolio">&nbsp;Portafolio&nbsp;</a>
                        </li>
    
                        <li>
                        <a href="#contact" data-text="&nbsp;Contacto">&nbsp;Contacto&nbsp;</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    } else {
        return (
            <div className="nav">
                
                { menu ? 
                <div className="nav__content">
                    <MenuIcon onClick={() => setMenu(false)} sx={{color: '#BBED2F', fontSize: 40}}/>
                </div>
                :
                <div className="nav__content">
                    <ul>
                        <CloseIcon onClick={() => setMenu(true)} sx={{color: '#BBED2F', fontSize: 20}}/>
                        <li>
                            <a href="#aboutme" data-text="&nbsp;SobreMi">&nbsp;SobreMi&nbsp;</a>
                        </li>
                        
                        <li>
                        <a href="#stack" data-text="&nbsp;Stack">&nbsp;Stack&nbsp;</a>
                        </li>
    
                        <li>
                        <a href="#portfolio" data-text="&nbsp;Portafolio">&nbsp;Portafolio&nbsp;</a>
                        </li>
    
                        <li>
                        <a href="#contact" data-text="&nbsp;Contacto">&nbsp;Contacto&nbsp;</a>
                        </li>
                    </ul>
                </div>
                }

            </div>
        );
    }
}