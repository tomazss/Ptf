
import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <Link to="projetos" className="btn">Ver Projetos</Link>
      
    </section>
  );
};

export default Project;
