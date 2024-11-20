import '../css/Projeto.css'
import LinkProjeto from './LinkProjeto'

export default function Projeto() {

    return(
        <>
        <div className="projeto">
            <h1>Nossos Projetos</h1>
            <div className="projeto-container">
                <LinkProjeto link='/qi-dos-sonhos'/>
                <LinkProjeto link='/arte-de-cozinhar'/>
                <LinkProjeto link='futebol'/>
            </div>
        </div>
        </>
    )
}