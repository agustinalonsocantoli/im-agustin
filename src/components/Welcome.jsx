import { useState, useEffect } from 'react';

export const Welcome = () => {

    const [ size, setSize ] = useState(0);

    useEffect(() => {
        const intervalSize = setInterval(() => {
            setSize(prev => prev +0.5)
        }, 10)

        if(size > 300) {
            clearInterval(intervalSize)
        }
        
        return  () => {
            clearInterval(intervalSize)
        }
    }, [size])

    return (
        <div className="welcome">
            <h1 className="welcome__title" style={{fontSize: `${size}px`}}>WELCOME</h1>
        </div>
    );
}