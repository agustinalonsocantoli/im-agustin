import { AboutMe } from "./AboutMe";
import { Info } from "./Info";
import { Nav } from "./Nav";

export const Home = () => {
    return (
        <div>
            <Nav />
            <AboutMe />
            <Info />
        </div>
    );
}