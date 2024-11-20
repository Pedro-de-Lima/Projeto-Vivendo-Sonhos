import '../css/LinkProjeto.css'
import { Link } from 'react-router-dom'

export default function LinkProjeto({link}){
    return (
        <>
        <div className="link-projeto">
            <img src="https://dummyimage.com/300x300/000/fff" alt="LogoOficina" />
            <div className="button">
                <Link to={link}>CONHEÇA</Link>
            </div>
        </div>
        </>
    )
}