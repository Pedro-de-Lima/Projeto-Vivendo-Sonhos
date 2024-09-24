import '../css/Home.css'

import iconWhatsapp from '../assets/whatsapp.png'

export default function Principal() {
    return(
        <>
            <div className="Home">
                <div className="Texto">
                    <h1>Bem-vindo ao</h1>
                    <h2>INSTITUTO <br></br>VIVENDO<br></br>SONHOS</h2>
                    <p>BREVE TEXTO SOBRE A INTITUIÇÃO</p>
                    <a href='https://api.whatsapp.com/send?phone=5519982836007'>WhatsApp<img src={iconWhatsapp} alt="whatsapp" /></a>
                </div>
                <div className="Quadrado">
                    <div className="Janela">
                        <div className="Logo"></div>
                    </div>
                </div>    
            </div>   
        </>
    )
}
