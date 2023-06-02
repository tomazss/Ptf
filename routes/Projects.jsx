import React from 'react';

import '../src/styles/components/projects.sass';
import Organo from '../src/img/organo.png';
import Insta from '../src/img/insta.png';
import Tec from '../src/img/tecblog.png';
import Ptf from '../src/img/ptf.png';
import Cal from '../src/img/calculadoraAd.png';

import Tecnologies from '../src/components/TecnologiesContainer';

const porjectsList = [
    { id: "organo", name: "Organo", img: <img src={Organo}/>, url:"https://github.com/tomazss/organo"  },
    { id: "instaBot", name: "InstaBot", img: <img src={Insta}/>,url:"https://github.com/tomazss/instaBot" },
    { id: "tec", name: "TecBlog", img: <img src={Tec} />, url:"https://github.com/tomazss/tecnoblog" },
    { id: "ptf", name: "Portfólio", img: <img src={Ptf}/>,url:"https://github.com/tomazss/Ptf" },
    { id: "Cal", name: "Calculadora", img: <img src={Cal}/>, url:"https://github.com/tomazss/calculadora_de_aditivo" },
    
  ];
const ListaProjetos = () => {
    return (
       <section className='projetos-container'>
        <h2>Projetos</h2>
      <div className="projetos-grid">
        {porjectsList.map((tech) => (
          
          <div className="projetos-card" id={tech.id} key={tech.id}>
            <h2>{tech.name}</h2>
            {tech.img}
            <div className="projetos-info">
            <a href={tech.url} className='link' id={tech.name} key={tech.name} >
                <h3>Ver Projeto</h3>
                </a>
              
            </div>
          </div>
        ))}
      </div>
      <Tecnologies/>
       </section>
    );
}

export default ListaProjetos;



