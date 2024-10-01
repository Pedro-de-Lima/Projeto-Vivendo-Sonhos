import '../css/MenuPrincipal.css'
import { Link } from 'react-router-dom'
export default function MenuPrincipal() {
    return(
        <>
            <nav className='navbar'>
                <img></img>
                <div className='item'>
                    <Link to="/" >Home</Link>
                    <Link to="/projetos">Projetos</Link>
                    <Link to="/diretoria">Diretoria</Link>
                    <Link to="">Insentive</Link>
                    <Link to="/parceiros">Parceiros</Link>
                    <Link to="/contato">Contato</Link>
                </div>
                <div className='pesquisa'>
                    <form action="">
                        <input type="text" placeholder='Pesquisa' />
                    </form>
                </div>
            </nav>   
        </>
    )
}