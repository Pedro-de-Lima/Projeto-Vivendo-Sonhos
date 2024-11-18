import '../css/Home.css'

import Logo from '../assets/LogoInstituicao.png'
import iconWhatsapp from '../assets/whatsapp.png'

export default function Principal() {
    return(
        <>
            <div className="Home">
                <div className="Texto">
                    <h1>Bem - vindo ao</h1>
                    <h2>INSTITUTO <br></br>VIVENDO<br></br>SONHOS</h2>
                    <p>Instituto Vivendo Sonhos: Oferecendo oportunidades para transformar vidas.</p>
                    <a href='https://api.whatsapp.com/send?phone=551922149168'><img src={iconWhatsapp} alt="whatsapp" /></a>
                </div>
                <div className='conent'>
                    <div className='detalhe'></div>
                    <div className='janela'>
                        <div className='detalhe_superior'>
                            <div className='detalhe_formas'>
                                <div className='circulo'></div>
                                <div className='quadrado'></div>
                                <div className='triangulo'></div>
                            </div>
                            <div className='detalhe_linha_branca'></div>
                        </div>
                        <div className='detalhe_retangular'></div>
                        <div className='logo_instituto'>
                            <img src={Logo} alt="Logo" />
                        </div>
                    </div>
                </div>  
            </div>   
        </>
    )
}
