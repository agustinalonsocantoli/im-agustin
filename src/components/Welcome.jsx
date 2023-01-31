import { useState, useEffect } from 'react';
import { Home } from './Home';

import Typewriter from 'react-typewriter-animate';
import "react-typewriter-animate/dist/Typewriter.css";

export const Welcome = () => {

    const [ rotate, setRotate ] = useState(0);
    const [ size, setSize ] = useState(0);
    const [ typeWriter, setTypeWriter ] = useState(false);
    const [ goHome, setGoHome ] = useState(false);

    useEffect(() => {
        const intervalRotate = setInterval(() => {
            setRotate(prev => prev + 1)
        }, 10)

        if(rotate >= 360) {
            clearInterval(intervalRotate)
        }

        const intervalSize = setInterval(() => {
            setSize(prev => prev +0.5)
        }, 10)

        if(size > 180) {
            clearInterval(intervalSize)
            setTypeWriter(true)

            setTimeout(() => {
                setGoHome(true)
            }, 4000)
        }
        

        return  () => {
            clearInterval(intervalSize)
            clearInterval(intervalRotate)
        }
    }, [rotate, size, goHome])

    if(!goHome) {
        return (
            <div className="welcome">
                {!typeWriter && <h1 className="welcome__title" style={{fontSize: `${size}px`, rotate: `1 2 1 ${rotate}deg`}}>WELCOME</h1>}
    
                {typeWriter && <Typewriter
                    dataToRotate={[[{ type: "word", text: "I am" }], [{ type: "word", text: "Agustin" }]]}
                    cursor={{char: '_'}}
                    maxTypeSpeed= {200}
                    contentClass='tw__content'
                    cursorClass='tw__cursor'
                />}
            </div>
        );
    } else {
        return (
            <Home />
        );
    }
}