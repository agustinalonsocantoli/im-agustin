import { AboutMe } from './AboutMe';
import { Info } from './Info';
import { Nav } from './Nav';
import { Contact } from './Contact'

export const Home = () => {

    return (
        <div>
            <Nav />
            <AboutMe />
            <Info />
            <Contact />
        </div>
    );
}