import { frontend, backend, extras, control } from "../exports/skills";

export const Stack = () => {
    const resposive = window.innerWidth < 768 ? true : false;

    return (
        <div className="info" id="stack">

            <h2>Stack Tecnologico</h2>

            <div className="stacks__box">

                <div className="front__box">
                    <h3>Frontend</h3>
                    
                    {frontend.map((item, index) => (
                        <div key={index} className='skill'>
                            
                            <div className="img__box">
                                <img 
                                src={item.src} 
                                alt={`img/${item.name}`} 
                                style={{width: '45px', heigth: '45px'}}
                                />
                            </div>
                            
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>

                <div className="control__box">
                    {control.map((item, index) => (
                        <div key={index}>
                            
                            <div className="img__box">
                                <img 
                                src={item.src} 
                                alt={`img/${item.name}`} 
                                style={{width: '100px', heigth: '100px'}}
                                />
                            </div>

                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>

                <div className="back__box">
                    <h3>Backend</h3>
                    
                    {backend.map((item, index) => (
                        <div key={index} className='skill'>

                            <div className="img__box">
                                <img 
                                src={item.src} 
                                alt={`img/${item.name}`} 
                                style={{width: '45px', heigth: '45px'}}
                                />
                            </div>
                            
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="extras__box">
                {extras.map((item, index) => (
                    <div key={index}>

                        <div className="img__box">
                            <img 
                            src={item.src} 
                            alt={`img/${item.name}`} 
                            style={!resposive ? {width: '70px', heigth: '70px'} : {width: '50px', heigth: '50px'}}
                            />
                        </div>
                        
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}