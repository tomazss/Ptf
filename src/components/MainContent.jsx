import '../styles/components/mainContent.sass'

import About from './AboutContainer';
import Tecnologies from './TecnologiesContainer';
import Project from './ProjectContainer';

const MainContent = ()=> {
    return (
        <main id='main-content'>
            <About/>
            <Tecnologies/>
            <Project/>
        </main>
    );
}

export default MainContent;