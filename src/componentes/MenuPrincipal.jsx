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
                    <a href='#carrossel'>Diretoria</a>
                    <a href="#projeto">Projetos</a>
                    <a href="#contatos">Contatos</a>
                </div>
                <Link to='/incentive' className='bntDoe'>DOE</Link>
            </nav>   
        </>
    )
}