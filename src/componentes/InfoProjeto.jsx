import '../css/InfoProjeto.css'

export default function InfoProjeto({imagem, paragrafo, display}){
    
    const style = {
        display: 'flex',
        flexDirection: display,
    }
    
    return (
        <div className="infoprojeto">
            <div className="informacao" style={style}>
                <img src={imagem} alt="" />
                <p>{paragrafo}</p>
            </div>
        </div>
    )
}