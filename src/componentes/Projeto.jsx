import '../css/Projeto.css'
import LinkProjeto from './LinkProjeto'

export default function Projeto() {

    return(
        <>
        <div className="projeto">
            <h1>Nossos Projetos</h1>
            <div className="projeto-container">
                <LinkProjeto></LinkProjeto>
                <LinkProjeto></LinkProjeto>            
                <LinkProjeto></LinkProjeto>
            </div>
        </div>
        </>
    )
}