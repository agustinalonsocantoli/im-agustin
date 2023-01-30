import { useState, useEffect } from 'react';
import { Welcome } from './Welcome';

import Typewriter from 'react-typewriter-animate';
import "react-typewriter-animate/dist/Typewriter.css";

export const Home = () => {
    const [ progress, setProgress ] = useState(0);
    const [ name, setName ] = useState(false);
    const [ welcome, setWelcome ] = useState(false);

    useEffect(() => {
        const intervalProgress = setInterval(() => {
            setProgress(prev => prev + 0.2)
        }, 10)

        if(progress > 100) {
            clearInterval(intervalProgress)
            setName(true)

            setTimeout(() => {
                setWelcome(true)
            }, 6000)
        }

        return () => {
            clearInterval(intervalProgress)
        }
    }, [progress])

    if(!welcome) {
    return (
        <div className='home'>
            <h1>Hi There</h1>
    
            <div className='home__bar'>
                <span className='bar-progress' style={{width: `${progress}%`}}></span>
            </div>
            
            {name && <Typewriter
                dataToRotate={[[{ type: "word", text: "I am" }], [{ type: "word", text: "Agustin" }]]}
                cursor={{char: '_'}}
                maxTypeSpeed= {300}
                contentClass='tw__content'
                cursorClass='tw__cursor'
            />}
        </div>
    );
    } else {
        return (
            <Welcome />
        );
    }
}