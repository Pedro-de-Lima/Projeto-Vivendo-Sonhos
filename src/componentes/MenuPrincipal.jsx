import '../css/MenuPrincipal.css'
import { Link } from 'react-router-dom'
import LogoInstituicao from '../assets/LogoInstituicao.png'
export default function MenuPrincipal() {
    return(
        <>
            <nav className='navbar'>
                <img src={LogoInstituicao}/>
                <div className='item'>
                    <Link to="/">Home</Link>
                    <Link to="/diretoria">Diretoria</Link>
                    <Link to="/projetos">Projetos</Link>
                    <Link to="/parceiros">Parceiros</Link>
                    <Link to="/contato">Contato</Link>
                </div>
                <button className='bntDoe'>DOE</button>
            </nav>   
        </>
    )
}