import { useState, useEffect } from 'react';
import { Welcome } from './Welcome';

export const Start = () => {
    const [ progress, setProgress ] = useState(0);
    const [ start, setStart ] = useState(true);

    useEffect(() => {
        const intervalProgress = setInterval(() => {
            setProgress(prev => prev + 0.2)
        }, 5)

        if(progress > 100) {
            clearInterval(intervalProgress)
            setStart(false)
        }

        return () => {
            clearInterval(intervalProgress)
        }
    }, [progress])

    if(start) {
    return (
        <div className='start'>
            <h1>Hi There</h1>
    
            <div className='start__bar'>
                <span className='bar-progress' style={{width: `${progress}%`}}></span>
            </div>
        </div>
    );
    } else {
        return (
            <Welcome />
        );
    }
}