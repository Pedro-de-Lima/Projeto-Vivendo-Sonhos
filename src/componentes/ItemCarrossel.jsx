import '../css/ItemCarrossel.css'

export default function ItemCarrossel({cargo, texto, img}) {

    return(
        <>
            <div className='container'>
                <div className="content" >
                    <div className="imagem" >
                        <img src={img}></img>
                    </div>
                    <div className="texto">
                        <h1>{cargo}</h1>
                        <p>{texto}</p>
                    </div>
                </div>
            </div>
        </>
    )
}