import { useState, useEffect } from 'react';
import Typewriter from 'react-typewriter-animate';
import "react-typewriter-animate/dist/Typewriter.css";

export const Home = () => {
    const [ progress, setProgress ] = useState(0)
    const [ welcome, setWelcome ] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => prev + 0.2)
        }, 10)

        if(progress > 90) {
            setWelcome(true)
        }

        if(progress > 100) {
            clearInterval(interval)
        }

        return () => {
            clearInterval(interval)
        }
    }, [progress])

    console.log(progress);

    return (
        <div className='home'>
            <h1>Hi, I'm</h1>
            <Typewriter
                dataToRotate={[[{ type: "word", text: "Agustin Alonso Cantoli" }]]}
                cursor={{char: '_'}}
                maxTypeSpeed= {400}
                contentClass='tw__content'
                cursorClass='tw__cursor'
            />
            <div className='home__bar'>
                <span className='bar-progress' style={{width: `${progress}%`}}></span>
            </div>
            {welcome && <h2>Welcome !!</h2>}
        </div>
    );
}