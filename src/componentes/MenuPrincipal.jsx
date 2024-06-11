import '../App.css'

export default function MenuPrincipal() {
    return(
        <>
            <nav className='navbar'>
                <img></img>
                <div className='item'>
                    <a href="">Home</a>
                    <a href="">Projetos</a>
                    <a href="">Diretoria</a>
                    <a href="">Insentive</a>
                    <a href="">Parceiros</a>
                    <a href="">Contato</a>
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