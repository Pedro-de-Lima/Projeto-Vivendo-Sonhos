export default function ItemCarrossel({cargo, texto, img}) {

    return(
        <>
            <div style={{width: '70%', height:'75vh', backgroundColor:'white', display: 'flex', margin: 'auto'}}>
                <div className="imagem" style={{width:'50%', display: 'flex', justifyContent: 'center', alignItems:'center', backgroundColor: 'blue'}}>
                    <img src={img} style={{width: '100%'}}></img>
                </div>
                <div className="texto" style={{width:'50%', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center'}}>
                    <h1>{cargo}</h1>
                    <p>{texto}</p>
                </div>
            </div>
        </>
    )
}