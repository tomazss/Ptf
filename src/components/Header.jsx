import Animacao from"./Animacao";
import '../styles/components/header.sass'

export default function Header(){
    return(
        <div className="cabecalho">
           
      <h1>Tomaz Silva</h1>
      <div >
      <Animacao className="animacao" />
       
      </div>
      
        </div>
    )
}