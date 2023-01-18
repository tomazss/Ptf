import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/components/socialNetworks.sass'


const socialNetworks =[
    {name: "linkedin",url:"https://www.linkedin.com/in/tomaz-silva-sampaio-3aa5a7206/", icon:<FaLinkedinIn />},
    {name: "github",url:"https://github.com/tomazss?tab=repositories", icon:<FaGithub/>},
   // {name: "instagram", icon:<FaInstagram/>},
];

const SocialNetworks = () => {
 

    return (
        <section id='social-networks'>
            {socialNetworks.map((network)=>(
                <a href={network.url} className='social-btn' id={network.name} key={network.name}>
                {network.icon}
                </a>
            )
            )}
            
        </section>
    );
}

export default SocialNetworks;