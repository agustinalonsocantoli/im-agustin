import { useState, useEffect } from 'react';
import { Home } from './Home';

export const Start = () => {
    const [ progress, setProgress ] = useState(0);
    const [ goHome, setGoHome ] = useState(false);

    useEffect(() => {
        const intervalProgress = setInterval(() => {
            setProgress(prev => prev + 0.2)
        }, 5)

        if(progress > 100) {
            clearInterval(intervalProgress)
            setGoHome(true)
        }

        return () => {
            clearInterval(intervalProgress)
        }
    }, [progress])

    if(!goHome) {
    return (
        <div className='start'>
            <h1>Bienvenido</h1>
    
            <div className='start__bar'>
                <span className='bar-progress' style={{width: `${progress}%`}}></span>
            </div>
        </div>
    );
    } else {
        return (
            <Home />
        );
    }
}