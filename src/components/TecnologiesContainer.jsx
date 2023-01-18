import {DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiMongodb, DiReact} from 'react-icons/di'

import '../styles/components/tecnologiescontainer.sass'

const technologies = [
    { id: "html", name: "HTML5",text:"", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3",text:"", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript",text:"", icon: <DiJsBadge /> },
    { id: "node", name: "Node.js",text:"", icon: <DiNodejsSmall /> },
    { id: "mongo", name: "MongoDB",text:"", icon: <DiMongodb /> },
    { id: "react-native", name: "React-Native",text:"", icon: <DiReact  /> },
    { id: "react", name: "React",text:"", icon: <DiReact /> },
  ];
const TecnologiesContainer = () => {
    return (
       <section className='technologies-container'>
        <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.text}</p>
            </div>
          </div>
        ))}
      </div>
       </section>
    );
}

export default TecnologiesContainer;