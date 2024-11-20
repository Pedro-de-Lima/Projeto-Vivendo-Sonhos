import '../css/MenuPrincipal.css'
import { Link } from 'react-router-dom'
import LogoInstituicao from '../assets/LogoInstituicao.png'
import '../componentes/Projeto'
export default function MenuPrincipal() {
    return(
        <>
            <nav className='navbar'>
                <img src={LogoInstituicao}/>
                <div className='item'>
                    <Link to="/">Home</Link>
                    <Link to="/">Diretoria</Link>
                    <Link to="/projetos">Projetos</Link>
                    <Link to="/">Parceiros</Link>
                    <Link to="/">Contato</Link>
                </div>
                <button className='bntDoe'>DOE</button>
            </nav>   
        </>
    )
}