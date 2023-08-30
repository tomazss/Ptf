import SocialNetworks from './SocialNetworks';
import Avatar from '../img/me.jpg'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer';


import pdf from '../pdf/Curriculo.pdf'


const sidebar = () => {
    
    return (

        <aside id="sidebar">
         <img src={Avatar} alt="Tomaz Silva Sampaio"/>
            <p className="title">Desenvolvedor</p>
            <SocialNetworks/>
            <InformationContainer/>
            
           
            <a  href={pdf} download="curriculo.pdf" type='application/pdf' className="btn">Download curriculo</a>
            
            
           
            
            
        </aside>
    );
}

export default sidebar;
