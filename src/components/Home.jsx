import { Nav } from './Nav';
import { AboutMe } from './AboutMe';
import { Info } from './Info';
import { Portfolio } from './Portfolio'
import { Contact } from './Contact'
 
export const Home = () => {

    return (
        <div>
            <Nav />
            <AboutMe />
            <Info />
            <Portfolio />
            <Contact />
        </div>
    );
}