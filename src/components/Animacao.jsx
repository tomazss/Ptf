import React from 'react'
import Lottie from 'react-lottie';
import  animationData from '../animacoes/99312-developer-skills.json'
 

export default function Animacao() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div className="animation">
        <Lottie 
          options={defaultOptions}
          
          
        />
      </div>
    );
  }