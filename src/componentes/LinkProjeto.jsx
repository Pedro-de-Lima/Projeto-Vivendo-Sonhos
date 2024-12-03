import '../css/LinkProjeto.css'
import { Link } from 'react-router-dom'

export default function LinkProjeto({link, logo}){
    return (
        <>
        <div className="link-projeto">
            <img className='logo-projeto' src={logo} alt="LogoOficina" />
            <div className="button">
                <Link className='botao-conheca' to={link}>CONHEÇA</Link>
            </div>
        </div>
        </>
    )
}