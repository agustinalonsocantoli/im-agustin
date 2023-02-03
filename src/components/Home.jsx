import { Nav } from './Nav';
import { AboutMe } from './AboutMe';
import { Stack } from './Stack';
import { Portfolio } from './Portfolio'
import { Contact } from './Contact'
 
export const Home = () => {

    return (
        <div>
            <Nav />
            <AboutMe />
            <Stack />
            <Portfolio />
            <Contact />
        </div>
    );
}