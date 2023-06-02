import '../styles/components/mainContent.sass'

import About from './AboutContainer';


import { Outlet } from "react-router-dom";

const MainContent = ()=> {
    return (
        <main id='main-content'>
            <About/>
            <Outlet/>
            


            
           
        </main>
    );
}

export default MainContent;