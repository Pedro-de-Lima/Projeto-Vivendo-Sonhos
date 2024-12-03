import '../css/Projeto.css'
import LinkProjeto from './LinkProjeto'
import QiDosSonhos from '../assets/QI dos sonhos.jpeg'
import Futebol from '../assets/oficina-de-futebol.jpeg'
import ArteDeCozinhar from '../assets/arte de cozinhar.jpeg'

export default function Projeto() {

    return(
        <>
        <div id='projeto' className="projeto">
            <h1>Nossos Projetos</h1>
            <div className="projeto-container">
                <LinkProjeto link='/qi-dos-sonhos' logo={QiDosSonhos}/>
                <LinkProjeto link='/futebol' logo={Futebol}/>
                <LinkProjeto link='/arte-de-cozinhar' logo={ArteDeCozinhar}/>
            </div>
        </div>
        </>
    )
}